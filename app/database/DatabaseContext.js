import React from 'react';
import { SQLiteProvider } from 'expo-sqlite';

const initializeDatabase = async (db) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      endereco TEXT NOT NULL,
      numero TEXT NOT NULL,
      complemento TEXT,
      cep TEXT NOT NULL,
      telefone TEXT,
      plano TEXT NOT NULL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS doctors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      specialty TEXT NOT NULL,
      location TEXT NOT NULL,
      email TEXT UNIQUE,
      phone TEXT,
      available BOOLEAN DEFAULT 1
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      doctor_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      status TEXT NOT NULL,
      FOREIGN KEY (doctor_id) REFERENCES doctors (id),
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS medical_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      record TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);

  await db.execAsync(`
    INSERT OR IGNORE INTO doctors (name, specialty, location, email, phone, available) VALUES
    ('Dr. Norberto', 'Clinico geral', 'Rua natal coneglian, 123', 'norberto@gmail.com', '14999283809', 1),
    ('Dr. Manoel', 'Pediatra', 'Rua joara, 456', 'manoel@gmail.com', '1498768762', 1),
    ('Dr. Fabio', 'Cardiologista', 'Rua anita garibaldi, 198', 'fabio@gmail.com', '149876243', 1);
  `);
};

export const DatabaseContext = ({ children }) => {
  return (
    <SQLiteProvider databaseName="myapp.db" onInit={initializeDatabase}>
      {children}
    </SQLiteProvider>
  );
};
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
            <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Boas-vindas!</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a especialidade"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua localização"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.testimonialsContainer}>
          <Text style={styles.testimonialsTitle}>Depoimentos</Text>
          <Text style={styles.testimonialText}>
            muito top, me ajudou muito
          </Text>
          <Text style={styles.testimonialAuthor}>ana rita , 18 anos, Macatuba/SP</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoHighlight: {
    color: '#4A90E2',
  },
  logoSubtext: {
    fontSize: 18,
    color: '#4A90E2',
  },
  welcomeText: {
    fontSize: 22,
    marginTop: 10,
    color: '#4A90E2',
  },
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  testimonialsContainer: {
    marginBottom: 20,
  },
  testimonialsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366',
  },
  testimonialText: {
    marginBottom: 10,
    lineHeight: 20,
  },
  testimonialAuthor: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#003366',
  },
});
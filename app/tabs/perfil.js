import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Perfil() {
    const handleSignUp = () => {
        router.push('/tabs/consultas');
      };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>

      <View style={styles.profileImageContainer}>
      <Image source={require('../../assets/img_usuario.png')} style={styles.logo} />
      </View>


      <Text style={styles.sectionTitle}>Informações pessoais</Text>
      <Text style={styles.infoText} onPress={handleSignUp}>Vinicius Ferreira Torres</Text>
      <Text style={styles.infoText}>11/08/2006</Text>
      <Text style={styles.infoText}>Lençóis Paulista - São Paulo</Text>


      <View style={styles.separator} />


      <Text style={styles.sectionTitle}>Histórico médico</Text>
      <Text style={styles.infoText}>• Lesão na virilha</Text>
      <Text style={styles.infoText}>• Dentinho quebrado</Text>
      <Text style={styles.infoText}>• Dedão do pé quebrado</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E6FB6',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E6FB6',
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

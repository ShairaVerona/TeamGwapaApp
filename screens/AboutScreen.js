import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.paragraph}>
          Welcome to our coffee shop! We are passionate about serving the finest quality coffee
          and providing a cozy and inviting atmosphere for our customers.
        </Text>
        <Text style={styles.paragraph}>
          Our journey began with a love for coffee and a desire to create a space where people
          can relax, unwind, and enjoy a perfect cup of coffee.
        </Text>
        <View style={styles.roleImagesContainer}>
          <Image
            source={require('../assets/images/shai.jpg')}
            style={styles.roleImage}
            resizeMode="cover"
          />
          <Text style={styles.roleText}>Shaira Verona - Backend Developer</Text>
          <Image
            source={require('../assets/images/maejean.jpg')}
            style={styles.roleImage}
            resizeMode="cover"
          />
          <Text style={styles.roleText}>Maejean L. Roble - UI/UX Designer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  roleImagesContainer: {
    marginBottom: 20,
  },
  roleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  roleText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});

export default AboutScreen;

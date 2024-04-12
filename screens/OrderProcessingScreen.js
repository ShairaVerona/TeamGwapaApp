import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderProcessingScreen = ({ navigation, route }) => {
  const { productName } = route.params;

  const handleConfirmOrder = () => {
    // Implement order confirmation logic here
    // For demonstration purposes, let's navigate back to the product screen after confirming the order
    navigation.navigate('Product');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Processing</Text>
      <Text style={styles.message}>Thank you for your order of {productName}!</Text>
      <Text style={styles.message}>We are processing your order. You will receive a confirmation shortly.</Text>
      <Button title="Confirm Order" onPress={handleConfirmOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default OrderProcessingScreen;

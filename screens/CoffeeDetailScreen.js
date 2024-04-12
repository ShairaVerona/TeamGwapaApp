import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoffeeDetailScreen = ({ route }) => {
  const { product } = route.params;

  // Define details for each product
  const productDetails = {
    1: { // Classic Iced Coffee
      id: 1,
      name: 'Classic Iced Coffee',
      price: 'P180.00',
      description: 'A refreshing iced coffee made with our signature blend and served over ice.',
      ingredients: ['Coffee', 'Ice', 'Sweetener (optional)'],
    },
    2: { // Vanilla Iced Coffee
      id: 2,
      name: 'Vanilla Iced Coffee',
      price: 'P200.00',
      description: 'Our classic iced coffee infused with smooth vanilla flavoring.',
      ingredients: ['Coffee', 'Ice', 'Vanilla Syrup'],
    },
    3: { // Classic Cappuccino
      id: 3,
      name: 'Classic Cappuccino',
      price: 'P100.00',
      description: 'A classic cappuccino made with rich espresso and frothy milk.',
      ingredients: ['Espresso', 'Steamed Milk', 'Foamed Milk'],
    },
    4: { // Caramel Cappuccino
      id: 4,
      name: 'Caramel Cappuccino',
      price: 'P100.00',
      description: 'Indulge in the rich flavor of caramel combined with our smooth espresso and frothy milk.',
      ingredients: ['Espresso', 'Caramel Syrup', 'Steamed Milk', 'Foamed Milk'],
    },
    // Add more products as needed
  };

  // Determine which product details to display based on the selected product
  const selectedProductDetails = productDetails[product.id] || product;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{selectedProductDetails.name}</Text>
      <Text style={styles.price}>Price: {selectedProductDetails.price}</Text>
      <Text style={styles.description}>{selectedProductDetails.description}</Text>
      <Text style={styles.ingredients}>Ingredients: {selectedProductDetails.ingredients.join(', ')}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 10,
  },
  // Add more styles as needed
});

export default CoffeeDetailScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { 
      id: 1, 
      name: 'Iced Coffee', 
      image: require('../assets/images/iced_coffee.png'), 
      products: [
        { id: 1, name: 'Classic Iced Coffee', price: 'P180.00' },
        { id: 2, name: 'Vanilla Iced Coffee', price: 'P200.00' },
        // Add more products as needed
      ]
    },
    { 
      id: 2, 
      name: 'Cappuccino', 
      image: require('../assets/images/cappuccino.jpg'), 
      products: [
        { id: 3, name: 'Classic Cappuccino', price: 'P100.00' },
        { id: 4, name: 'Caramel Cappuccino', price: 'P100.00' },
        // Add more products as needed
      ]
    },
    // Add more categories with products as needed
  ];

  const handleCategoryPress = (category) => {
    navigation.navigate('CoffeeCategory', { category: category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryContainer}
          onPress={() => handleCategoryPress(category)}
        >
          <Image source={category.image} style={styles.categoryImage} />
          <Text style={styles.categoryName}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 18,
  },
});

export default CategoryScreen;

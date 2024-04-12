import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();

  // Sample data for products
  const products = [
    { id: 1, name: 'Espresso', type: 'Hot Coffee', image: require('../assets/images/espresso.jpg') },
    { id: 2, name: 'Cappuccino', type: 'Hot Coffee', image: require('../assets/images/cappuccino.jpg') },
    { id: 3, name: 'Iced Latte', type: 'Iced Coffee', image: require('../assets/images/iced-latte.jpg') },
    // Add more products as needed
  ];

  const handleBuy = (productName) => {
    // Navigate to the order processing screen with the selected product name
    navigation.navigate('OrderProcessing', { productName });
  };

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} resizeMode="cover" />
        <Text style={styles.productName}>{item.name}</Text>
        <Text>Type: {item.type}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item.name)}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  productContainer: {
    borderWidth: 0,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '50%',
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductScreen;

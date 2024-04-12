// screens/FavoriteScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Favorite"
        onPress={() => navigation.navigate('Favorite')}
      />
    </View>
  );
};

export default FavoriteScreen;

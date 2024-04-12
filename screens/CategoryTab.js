// Update CategoryTab component
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryTab = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to CategoryScreen when component mounts
    navigation.navigate('CategoryScreen');
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Category Tab</Text>
    </View>
  );
};

export default CategoryTab;

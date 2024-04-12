// screens/FilterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const FilterScreen = () => {
  const [checkedFilters, setCheckedFilters] = useState([]);

  const filters = [
    { name: 'Hot Coffee'},
    { name: 'Iced Coffee' },
    { name: 'Espresso'},
    { name: 'Cappuccino'},
    { name: 'Latte'},
    { name: 'Mocha'},
  ];

  const toggleFilter = (filterName) => {
    if (checkedFilters.includes(filterName)) {
      setCheckedFilters(checkedFilters.filter((filter) => filter !== filterName));
    } else {
      setCheckedFilters([...checkedFilters, filterName]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filters</Text>
      {filters.map((filter, index) => (
        <View key={index} style={styles.filterItem}>
          <Checkbox.Android
            status={checkedFilters.includes(filter.name) ? 'checked' : 'unchecked'}
            onPress={() => toggleFilter(filter.name)}
            color="#FF5733"
          />
          <Text style={styles.filterName}>{filter.name}</Text>
          <Text style={styles.filterDescription}>{filter.description}</Text>
        </View>
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
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterDescription: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});

export default FilterScreen;

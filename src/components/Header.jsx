import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Header = () => {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.headerTitle}>Component Playground</Text>
      <Text style={globalStyles.headerSubtitle}>
        Explore componentes do React Native de forma interativa
      </Text>
    </View>
  );
};

export default Header;

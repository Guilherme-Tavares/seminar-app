import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ComponentList = ({ components, selectedComponent, onSelectComponent, isCollapsed, onToggleCollapse }) => {
  const getAbbreviation = (name) => {
    // Retorna a primeira letra ou sigla do componente
    const abbreviations = {
      'View': 'V',
      'Text': 'T',
      'TouchableOpacity': 'TO',
      'Image': 'I',
      'TextInput': 'TI',
      'ScrollView': 'SV',
      'ActivityIndicator': 'AI',
    };
    return abbreviations[name] || name.charAt(0);
  };

  return (
    <View style={[globalStyles.sidebar, isCollapsed && globalStyles.sidebarCollapsed]}>
      {!isCollapsed ? (
        <View style={globalStyles.sidebarHeader}>
          <Text style={globalStyles.sidebarHeaderTitle}>Componentes</Text>
          <TouchableOpacity
            style={globalStyles.sidebarToggleButton}
            onPress={onToggleCollapse}
            activeOpacity={0.7}
          >
            <Text style={globalStyles.sidebarToggleText}>←</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={globalStyles.sidebarHeader}>
          <TouchableOpacity
            style={[globalStyles.sidebarToggleButton, { width: '100%' }]}
            onPress={onToggleCollapse}
            activeOpacity={0.7}
          >
            <Text style={globalStyles.sidebarToggleText}>→</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>
        {components.map((component) => (
          <TouchableOpacity
            key={component.id}
            style={[
              isCollapsed ? globalStyles.componentItemCollapsed : globalStyles.componentItem,
              selectedComponent === component.id && globalStyles.componentItemActive,
            ]}
            onPress={() => onSelectComponent(component.id)}
            activeOpacity={0.7}
          >
            {isCollapsed ? (
              <Text
                style={[
                  globalStyles.componentItemAbbr,
                  selectedComponent === component.id && globalStyles.componentItemAbbrActive,
                ]}
              >
                {getAbbreviation(component.name)}
              </Text>
            ) : (
              <Text
                style={[
                  globalStyles.componentItemText,
                  selectedComponent === component.id && globalStyles.componentItemTextActive,
                ]}
              >
                {component.name}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ComponentList;

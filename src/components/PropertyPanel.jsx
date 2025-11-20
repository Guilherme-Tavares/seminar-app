import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const PropertyPanel = ({ properties, values, onPropertyChange, isSidebarCollapsed }) => {
  // Estado local para controlar os valores dos inputs durante a edição
  const [localValues, setLocalValues] = useState({});

  // Atualizar valores locais quando as propriedades ou valores mudarem
  useEffect(() => {
    const newLocalValues = {};
    properties.forEach(prop => {
      newLocalValues[prop.key] = values[prop.key] !== undefined ? values[prop.key] : prop.default;
    });
    setLocalValues(newLocalValues);
  }, [properties, values]);

  const renderPropertyInput = (property) => {
    switch (property.type) {
      case 'text':
        return (
          <TextInput
            style={globalStyles.propertyInput}
            value={String(localValues[property.key] !== undefined ? localValues[property.key] : property.default)}
            onChangeText={(value) => {
              setLocalValues(prev => ({ ...prev, [property.key]: value }));
            }}
            onBlur={() => {
              const finalValue = localValues[property.key] || property.default;
              onPropertyChange(property.key, finalValue);
            }}
            placeholder={property.placeholder || ''}
          />
        );
      
      case 'number':
        return (
          <View style={globalStyles.numberInputContainer}>
            <TextInput
              style={globalStyles.propertyInput}
              value={String(localValues[property.key] !== undefined ? localValues[property.key] : property.default)}
              onChangeText={(value) => {
                // Permitir campo vazio ou apenas números
                if (value === '' || /^\d+$/.test(value)) {
                  setLocalValues(prev => ({ ...prev, [property.key]: value }));
                }
              }}
              onBlur={() => {
                let finalValue = localValues[property.key];
                
                // Se estiver vazio, usar o padrão
                if (finalValue === '' || finalValue === undefined) {
                  finalValue = property.default;
                } else {
                  finalValue = parseInt(finalValue);
                  
                  // Aplicar limites se existirem
                  if (property.min !== undefined && finalValue < property.min) {
                    finalValue = property.min;
                  }
                  if (property.max !== undefined && finalValue > property.max) {
                    finalValue = property.max;
                  }
                }
                
                setLocalValues(prev => ({ ...prev, [property.key]: finalValue }));
                onPropertyChange(property.key, finalValue);
              }}
              keyboardType="numeric"
              placeholder={property.placeholder || '0'}
            />
            <View style={globalStyles.incrementButtons}>
              <TouchableOpacity
                style={globalStyles.incrementButton}
                onPress={() => {
                  let currentValue = parseInt(localValues[property.key]) || property.default;
                  let newValue = currentValue + 1;
                  
                  // Limitar apenas ao máximo absoluto (menu retraído)
                  if (property.max !== undefined && newValue > property.max) {
                    newValue = property.max;
                  }
                  
                  setLocalValues(prev => ({ ...prev, [property.key]: newValue }));
                  onPropertyChange(property.key, newValue);
                }}
              >
                <Text style={globalStyles.incrementButtonText}>▲</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={globalStyles.incrementButton}
                onPress={() => {
                  let currentValue = parseInt(localValues[property.key]) || property.default;
                  let newValue = currentValue - 1;
                  if (property.min !== undefined && newValue < property.min) {
                    newValue = property.min;
                  }
                  setLocalValues(prev => ({ ...prev, [property.key]: newValue }));
                  onPropertyChange(property.key, newValue);
                }}
              >
                <Text style={globalStyles.incrementButtonText}>▼</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      
      case 'color':
        return (
          <TextInput
            style={globalStyles.propertyInput}
            value={String(localValues[property.key] !== undefined ? localValues[property.key] : property.default)}
            onChangeText={(value) => {
              setLocalValues(prev => ({ ...prev, [property.key]: value }));
            }}
            onBlur={() => {
              const finalValue = localValues[property.key] || property.default;
              onPropertyChange(property.key, finalValue);
            }}
            placeholder="#000000"
          />
        );
      
      case 'boolean':
        return (
          <View style={{ marginTop: 5 }}>
            <Switch
              value={values[property.key] !== undefined ? values[property.key] : property.default}
              onValueChange={(value) => onPropertyChange(property.key, value)}
              trackColor={{ false: colors.border, true: colors.secondary }}
              thumbColor={values[property.key] ? colors.primary : '#f4f3f4'}
            />
          </View>
        );
      
      case 'button':
        return (
          <TouchableOpacity
            style={globalStyles.propertyButton}
            onPress={() => onPropertyChange(property.key, !values[property.key])}
          >
            <Text style={globalStyles.propertyButtonText}>{property.label}</Text>
          </TouchableOpacity>
        );
      
      default:
        return null;
    }
  };

  return (
    <View style={globalStyles.propertiesPanel}>
      <Text style={globalStyles.propertiesTitle}>Propriedades</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
          {properties.map((property) => (
            <View key={property.key} style={globalStyles.propertyRow}>
              <Text style={globalStyles.propertyLabel}>{property.label}</Text>
              {renderPropertyInput(property)}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PropertyPanel;

import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const PreviewArea = ({ componentType, properties }) => {
  const renderComponent = () => {
    switch (componentType) {
      case 'view':
        return (
          <View
            style={{
              width: properties.width || 200,
              height: properties.height || 100,
              backgroundColor: properties.backgroundColor || colors.primary,
              borderRadius: properties.borderRadius || 0,
            }}
          />
        );

      case 'text':
        return (
          <Text
            style={{
              fontSize: properties.fontSize || 16,
              color: properties.color || colors.text,
              fontWeight: properties.bold ? 'bold' : 'normal',
              textAlign: properties.textAlign || 'left',
            }}
          >
            {properties.text || 'Texto de exemplo'}
          </Text>
        );

      case 'button':
        return (
          <TouchableOpacity
            style={{
              backgroundColor: properties.backgroundColor || colors.primary,
              padding: properties.padding || 15,
              borderRadius: properties.borderRadius || 8,
              width: properties.width || 200,
            }}
            onPress={() => alert('Botão pressionado!')}
          >
            <Text
              style={{
                color: properties.textColor || '#FFFFFF',
                textAlign: 'center',
                fontSize: properties.fontSize || 16,
                fontWeight: 'bold',
              }}
            >
              {properties.text || 'Pressione-me'}
            </Text>
          </TouchableOpacity>
        );

      case 'image':
        return (
          <Image
            source={{ uri: properties.uri || 'https://picsum.photos/200' }}
            style={{
              width: properties.width || 200,
              height: properties.height || 200,
              borderRadius: properties.borderRadius || 0,
            }}
            resizeMode={properties.resizeMode || 'cover'}
          />
        );

      case 'textinput':
        return (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: properties.borderColor || colors.border,
              padding: properties.padding || 10,
              width: properties.width || 200,
              fontSize: properties.fontSize || 16,
              borderRadius: properties.borderRadius || 4,
              backgroundColor: properties.backgroundColor || '#FFFFFF',
            }}
            placeholder={properties.placeholder || 'Digite algo...'}
            value={properties.value || ''}
          />
        );

      case 'scrollview':
        return (
          <ScrollView
            style={{
              width: properties.width || 250,
              height: properties.height || 200,
              backgroundColor: colors.surface,
              borderRadius: 8,
              padding: 10,
            }}
          >
            <Text style={{ marginBottom: 10 }}>Item 1</Text>
            <Text style={{ marginBottom: 10 }}>Item 2</Text>
            <Text style={{ marginBottom: 10 }}>Item 3</Text>
            <Text style={{ marginBottom: 10 }}>Item 4</Text>
            <Text style={{ marginBottom: 10 }}>Item 5</Text>
            <Text style={{ marginBottom: 10 }}>Item 6</Text>
            <Text style={{ marginBottom: 10 }}>Item 7</Text>
            <Text style={{ marginBottom: 10 }}>Item 8</Text>
            <Text style={{ marginBottom: 10 }}>Item 9</Text>
            <Text style={{ marginBottom: 10 }}>Item 10</Text>
            <Text style={{ marginBottom: 10 }}>Item 11</Text>
            <Text style={{ marginBottom: 10 }}>Item 12</Text>
            <Text style={{ marginBottom: 10 }}>Item 13</Text>
            <Text style={{ marginBottom: 10 }}>Item 14</Text>
            <Text style={{ marginBottom: 10 }}>Item 15</Text>
            <Text style={{ marginBottom: 10 }}>Item 16</Text>
          </ScrollView>
        );

      case 'activityindicator':
        return (
          <ActivityIndicator
            size={properties.size || 'large'}
            color={properties.color || colors.primary}
          />
        );

      default:
        return <Text>Selecione um componente</Text>;
    }
  };

  return (
    <View style={globalStyles.previewSection}>
      <Text style={globalStyles.previewTitle}>Preview</Text>
      <View style={globalStyles.previewArea}>
        {renderComponent()}
      </View>
    </View>
  );
};

export default PreviewArea;

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CodeDisplay = ({ componentType, properties }) => {
  const generateCode = () => {
    switch (componentType) {
      case 'view':
        return `<View
  style={{
    width: ${properties.width || 200},
    height: ${properties.height || 100},
    backgroundColor: '${properties.backgroundColor || '#6200EE'}',
    borderRadius: ${properties.borderRadius || 0},
  }}
/>`;

      case 'text':
        return `<Text
  style={{
    fontSize: ${properties.fontSize || 16},
    color: '${properties.color || '#000000'}',
    fontWeight: '${properties.bold ? 'bold' : 'normal'}',
    textAlign: '${properties.textAlign || 'left'}',
  }}
>
  ${properties.text || 'Texto de exemplo'}
</Text>`;

      case 'button':
        return `<TouchableOpacity
  style={{
    backgroundColor: '${properties.backgroundColor || '#6200EE'}',
    padding: ${properties.padding || 15},
    borderRadius: ${properties.borderRadius || 8},
    width: ${properties.width || 200},
  }}
  onPress={() => alert('Botão pressionado!')}
>
  <Text
    style={{
      color: '${properties.textColor || '#FFFFFF'}',
      textAlign: 'center',
      fontSize: ${properties.fontSize || 16},
      fontWeight: 'bold',
    }}
  >
    ${properties.text || 'Pressione-me'}
  </Text>
</TouchableOpacity>`;

      case 'image':
        return `<Image
  source={{ uri: '${properties.uri || 'https://picsum.photos/200'}' }}
  style={{
    width: ${properties.width || 200},
    height: ${properties.height || 200},
    borderRadius: ${properties.borderRadius || 0},
  }}
  resizeMode="${properties.resizeMode || 'cover'}"
/>`;

      case 'textinput':
        return `<TextInput
  style={{
    borderWidth: 1,
    borderColor: '${properties.borderColor || '#E0E0E0'}',
    padding: ${properties.padding || 10},
    width: ${properties.width || 200},
    fontSize: ${properties.fontSize || 16},
    borderRadius: ${properties.borderRadius || 4},
    backgroundColor: '${properties.backgroundColor || '#FFFFFF'}',
  }}
  placeholder="${properties.placeholder || 'Digite algo...'}"
/>`;

      case 'scrollview':
        return `<ScrollView
  style={{
    width: ${properties.width || 250},
    height: ${properties.height || 200},
  }}
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  <Text>Item 4</Text>
  <Text>Item 5</Text>
  {/* ... 16 itens no total */}
</ScrollView>`;

      case 'activityindicator':
        return `<ActivityIndicator
  size="${properties.size || 'large'}"
  color="${properties.color || '#6200EE'}"
/>`;

      default:
        return '// Selecione um componente para ver o código';
    }
  };

  return (
    <View style={globalStyles.codeSection}>
      <Text style={globalStyles.codeTitle}>Código JSX</Text>
      <ScrollView>
        <Text style={globalStyles.codeText}>{generateCode()}</Text>
      </ScrollView>
    </View>
  );
};

export default CodeDisplay;

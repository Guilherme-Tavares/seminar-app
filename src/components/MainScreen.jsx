import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Header from './Header';
import ComponentList from './ComponentList';
import PreviewArea from './PreviewArea';
import PropertyPanel from './PropertyPanel';
import CodeDisplay from './CodeDisplay';
import globalStyles from '../styles/globalStyles';

const MainScreen = () => {
  const [selectedComponent, setSelectedComponent] = useState('view');
  const [propertyValues, setPropertyValues] = useState({});
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Definição dos componentes disponíveis
  const components = [
    { id: 'view', name: 'View' },
    { id: 'text', name: 'Text' },
    { id: 'button', name: 'TouchableOpacity' },
    { id: 'image', name: 'Image' },
    { id: 'textinput', name: 'TextInput' },
    { id: 'scrollview', name: 'ScrollView' },
    { id: 'activityindicator', name: 'ActivityIndicator' },
  ];

  // Definição das propriedades para cada componente
  const componentProperties = {
    view: [
      { key: 'width', label: 'Largura', type: 'number', default: 200, placeholder: '200', min: 50, max: 300, maxCollapsed: 200 },
      { key: 'height', label: 'Altura', type: 'number', default: 100, placeholder: '100', min: 50, max: 365, maxCollapsed: 365 },
      { key: 'backgroundColor', label: 'Cor de fundo', type: 'color', default: '#6200EE', placeholder: '#6200EE' },
      { key: 'borderRadius', label: 'Borda arredondada', type: 'number', default: 0, placeholder: '0', min: 0, max: 100 },
    ],
    text: [
      { key: 'text', label: 'Texto', type: 'text', default: 'Texto de exemplo', placeholder: 'Digite o texto' },
      { key: 'fontSize', label: 'Tamanho da fonte', type: 'number', default: 16, placeholder: '16', min: 8, max: 72 },
      { key: 'color', label: 'Cor', type: 'color', default: '#000000', placeholder: '#000000' },
      { key: 'bold', label: 'Negrito', type: 'boolean', default: false },
    ],
    button: [
      { key: 'text', label: 'Texto', type: 'text', default: 'Pressione-me', placeholder: 'Texto do botão' },
      { key: 'backgroundColor', label: 'Cor de fundo', type: 'color', default: '#6200EE', placeholder: '#6200EE' },
      { key: 'textColor', label: 'Cor do texto', type: 'color', default: '#FFFFFF', placeholder: '#FFFFFF' },
      { key: 'padding', label: 'Padding', type: 'number', default: 15, placeholder: '15', min: 5, max: 50 },
      { key: 'borderRadius', label: 'Borda arredondada', type: 'number', default: 8, placeholder: '8', min: 0, max: 50 },
      { key: 'width', label: 'Largura', type: 'number', default: 200, placeholder: '200', min: 80, max: 300, maxCollapsed: 200 },
    ],
    image: [
      { key: 'uri', label: 'URL da imagem', type: 'text', default: 'https://picsum.photos/200', placeholder: 'https://...' },
      { key: 'width', label: 'Largura', type: 'number', default: 200, placeholder: '200', min: 50, max: 300, maxCollapsed: 200 },
      { key: 'height', label: 'Altura', type: 'number', default: 200, placeholder: '200', min: 50, max: 350, maxCollapsed: 350 },
      { key: 'borderRadius', label: 'Borda arredondada', type: 'number', default: 0, placeholder: '0', min: 0, max: 200 },
    ],
    textinput: [
      { key: 'placeholder', label: 'Placeholder', type: 'text', default: 'Digite algo...', placeholder: 'Texto de ajuda' },
      { key: 'width', label: 'Largura', type: 'number', default: 200, placeholder: '200', min: 100, max: 300, maxCollapsed: 200 },
      { key: 'fontSize', label: 'Tamanho da fonte', type: 'number', default: 16, placeholder: '16', min: 8, max: 32 },
      { key: 'padding', label: 'Padding', type: 'number', default: 10, placeholder: '10', min: 5, max: 30 },
      { key: 'borderColor', label: 'Cor da borda', type: 'color', default: '#E0E0E0', placeholder: '#E0E0E0' },
    ],
    scrollview: [
      { key: 'width', label: 'Largura', type: 'number', default: 200, placeholder: '200', min: 120, max: 300, maxCollapsed: 200 },
      { key: 'height', label: 'Altura', type: 'number', default: 200, placeholder: '200', min: 100, max: 365, maxCollapsed: 365 },
    ],
    activityindicator: [
      { key: 'color', label: 'Cor', type: 'color', default: '#6200EE', placeholder: '#6200EE' },
    ],
  };

  const handlePropertyChange = (key, value) => {
    // Obter os limites da propriedade atual
    const currentProps = componentProperties[selectedComponent] || [];
    const property = currentProps.find(p => p.key === key);
    
    if (property && property.type === 'number') {
      const maxCollapsed = property.maxCollapsed || property.max;
      const maxExpanded = property.max;
      
      // Se o valor excede o limite com menu expandido, retrair o menu
      if (!isSidebarCollapsed && value > maxCollapsed) {
        setIsSidebarCollapsed(true);
      }
      
      // Limitar o valor ao máximo permitido (expandido)
      if (value > maxExpanded) {
        value = maxExpanded;
      }
    }
    
    setPropertyValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSelectComponent = (componentId) => {
    setSelectedComponent(componentId);
    setPropertyValues({});
  };

  const handleToggleSidebar = () => {
    const newCollapsedState = !isSidebarCollapsed;
    
    // Se está expandindo o menu, verificar se precisa ajustar valores
    if (!newCollapsedState) {
      const currentProps = componentProperties[selectedComponent] || [];
      const newValues = { ...propertyValues };
      let needsUpdate = false;
      
      currentProps.forEach(prop => {
        if (prop.type === 'number' && prop.maxCollapsed) {
          const currentValue = propertyValues[prop.key];
          if (currentValue !== undefined && currentValue > prop.maxCollapsed) {
            newValues[prop.key] = prop.maxCollapsed;
            needsUpdate = true;
          }
        }
      });
      
      if (needsUpdate) {
        setPropertyValues(newValues);
      }
    }
    
    setIsSidebarCollapsed(newCollapsedState);
  };

  const currentProperties = componentProperties[selectedComponent] || [];

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header />
      <View style={globalStyles.mainContent}>
        <ComponentList
          components={components}
          selectedComponent={selectedComponent}
          onSelectComponent={handleSelectComponent}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
        />
        <View style={globalStyles.previewContainer}>
          <PreviewArea
            componentType={selectedComponent}
            properties={propertyValues}
          />
          <PropertyPanel
            properties={currentProperties}
            values={propertyValues}
            onPropertyChange={handlePropertyChange}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <CodeDisplay
            componentType={selectedComponent}
            properties={propertyValues}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

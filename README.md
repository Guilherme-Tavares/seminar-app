# React Native Workshop 🚀

**React Native Workshop** é uma plataforma educacional integrada que combina duas poderosas ferramentas de aprendizagem para React Native: exploração interativa de componentes e exercícios práticos progressivos.

## 📋 Sobre o Projeto

Este aplicativo educacional oferece duas experiências complementares de aprendizagem:

### 🎨 Component Playground
Explore e experimente com componentes do React Native em tempo real:
- Visualize 7 componentes essenciais
- Modifique propriedades interativamente
- Veja o código JSX gerado automaticamente
- Compreenda o comportamento de cada componente

### 📚 React Step Builder
Aprenda React Native através de exercícios práticos progressivos:
- 4 módulos de aprendizagem (Fundamentos, Interatividade, Estilização, Navegação)
- Exercícios teóricos e práticos
- Feedback imediato
- Sistema de progresso e acompanhamento

## ✨ Funcionalidades Principais

### Interface Unificada
- **Menu Principal**: Navegação intuitiva entre as duas aplicações
- **Design Moderno**: Interface elegante com paleta de cores diferenciada
- **Navegação Fluida**: Sistema de navegação com botão de retorno ao menu em todas as telas

### Component Playground
- **Menu Lateral Retrátil**: Navegação rápida entre componentes
- **Área de Preview**: Visualização em tempo real
- **Painel de Propriedades**: Controles interativos para modificar atributos
- **Exibição de Código JSX**: Código gerado conforme as modificações
- **Sistema Responsivo**: Limites adaptativos e auto-colapso inteligente

### React Step Builder
- **Aprendizagem Progressiva**: Do básico ao avançado
- **Exercícios Interativos**: Complete lacunas no código com feedback imediato
- **Preview de Código**: Visualize exemplos com syntax highlighting
- **Sistema de Progresso**: Acompanhe sua evolução em tempo real
- **Persistência**: Seu progresso é salvo automaticamente

## 🎯 Módulos de Aprendizagem

### Fase 1 - Fundamentos
- Componentes funcionais
- JSX e estrutura básica
- View, Text e Image

### Fase 2 - Interatividade
- Eventos (onPress)
- Hook useState
- Renderização condicional

### Fase 3 - Estilização
- StyleSheet
- Flexbox
- Cards e layouts

### Fase 4 - Navegação
- React Navigation
- Stack Navigator
- Navegação entre telas

## 🛠️ Tecnologias

- **React Native** 0.81.5 com Expo ~54.0.25
- **React Navigation** para navegação entre telas
- **AsyncStorage** para persistência de progresso
- **Hooks** (useState, useEffect, useFocusEffect)
- **FlatList** para listas eficientes
- **SafeAreaView** para suporte a diferentes dispositivos

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI (instalado automaticamente como dependência)

### Instalação

1. Clone ou baixe o repositório do projeto

2. Navegue até o diretório do projeto:
```bash
cd seminar-app
```

3. Instale as dependências:
```bash
npm install
```

### Executando o Aplicativo

#### Modo Web

Para executar no navegador:

```bash
npm start
```

Ou diretamente:

```bash
npm run web
```

O aplicativo será aberto automaticamente no navegador padrão. Para melhor experiência, recomendamos:

1. Abrir o Microsoft Edge
2. Pressionar F12 para abrir o Developer Tools
3. Ativar o modo de emulação de dispositivo móvel
4. Selecionar **Samsung Galaxy S20 Ultra** (412 x 915)

#### Modo Mobile

Para Android:
```bash
npm run android
```

Para iOS (apenas em macOS):
```bash
npm run ios
```

## 🏗️ Estrutura do Projeto

```
seminar-app/
├── App.js                      # Componente raiz
├── src/
│   ├── components/            # Componentes React
│   │   ├── Header.jsx        # Cabeçalho do app
│   │   ├── ComponentList.jsx # Menu lateral de componentes
│   │   ├── PreviewArea.jsx   # Área de visualização
│   │   ├── PropertyPanel.jsx # Painel de propriedades
│   │   ├── CodeDisplay.jsx   # Exibição do código JSX
│   │   └── MainScreen.jsx    # Tela principal (orquestrador)
│   └── styles/
│       └── globalStyles.js   # Estilos centralizados
├── assets/                    # Recursos estáticos
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

## 👥 Contexto

Projeto desenvolvido como atividade da disciplina de Dispositivos Móveis do curso de Análise e Desenvolvimento de Sistemas (ADS) do IFRO.

## 📄 Licença

Este projeto é de uso educacional.
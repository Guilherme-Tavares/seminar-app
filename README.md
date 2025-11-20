# Component Playground 🎨

**Component Playground** é um aplicativo educacional interativo desenvolvido em React Native que permite explorar e aprender sobre os principais componentes do framework de forma prática e visual.

## 📋 Sobre o Projeto

Este miniapp foi criado como ferramenta de ensino para iniciantes em React Native, permitindo que os usuários:

- Visualizem componentes nativos em tempo real
- Modifiquem propriedades interativamente
- Vejam o código JSX correspondente
- Experimentem com diferentes configurações
- Compreendam o comportamento de cada componente

### Componentes Disponíveis

O aplicativo oferece exploração interativa de 7 componentes essenciais do React Native:

- **View** - Container básico para layout
- **Text** - Exibição de texto
- **TouchableOpacity** - Botões e elementos clicáveis
- **Image** - Exibição de imagens
- **TextInput** - Campos de entrada de texto
- **ScrollView** - Listas roláveis
- **ActivityIndicator** - Indicador de carregamento

## ✨ Funcionalidades

### Interface Intuitiva
- **Menu Lateral Retrátil**: Navegação rápida entre componentes com opção de colapsar para maximizar o espaço de trabalho
- **Área de Preview**: Visualização em tempo real do componente selecionado
- **Painel de Propriedades**: Controles interativos para modificar atributos do componente
- **Exibição de Código JSX**: Código gerado automaticamente conforme as modificações

### Controles Inteligentes
- **Inputs Numéricos com Setas**: Botões de incremento/decremento para ajustes precisos
- **Limites Dinâmicos**: Sistema que ajusta automaticamente os valores máximos baseado no espaço disponível
- **Auto-Colapso**: Menu retrai automaticamente quando valores excedem o espaço da área de preview
- **Validação em Tempo Real**: Impede valores que causariam extrapolação da área de visualização

### Sistema Responsivo
- Limites adaptativos conforme estado do menu (expandido/retraído)
- Layout otimizado para diferentes tamanhos de tela
- Componentes sempre visíveis dentro da área de preview

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
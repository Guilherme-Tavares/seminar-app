# Guia Rápido - React Native Workshop

## 🚀 Como Usar

### Iniciando o Projeto

1. **Instalar dependências** (se ainda não foi feito):
   ```bash
   cd "seminar-app"
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

3. **Executar no dispositivo**:
   - **Android**: Pressione `a` no terminal ou use o Expo Go e escaneie o QR code
   - **iOS**: Pressione `i` no terminal ou use a câmera do iPhone para escanear o QR code
   - **Web**: Pressione `w` no terminal

## 📱 Navegação no App

### Tela Inicial (Welcome Screen)
- Apresenta dois cards grandes:
  1. **Component Playground** (roxo) - Primeira posição
  2. **React Step Builder** (indigo) - Segunda posição
- Toque em qualquer card para acessar a aplicação correspondente

### Component Playground
- **Funcionalidade**: Explore componentes React Native interativamente
- **Menu Lateral**: Lista de 7 componentes (View, Text, TouchableOpacity, etc.)
- **Área de Preview**: Visualize o componente em tempo real
- **Painel de Propriedades**: Modifique valores e veja mudanças instantâneas
- **Código JSX**: Gerado automaticamente na parte inferior
- **Voltar**: Botão "← Menu" no header superior esquerdo

### React Step Builder
- **Tela Home**: Apresentação do aplicativo com botão "Começar Agora"
- **Módulos**: 4 fases de aprendizagem com progresso visual
- **Exercícios**: Mix de teoria e prática
  - **Teoria**: Leia conceitos e veja exemplos de código
  - **Prática**: Complete lacunas no código escolhendo opções corretas
- **Progresso**: Automaticamente salvo no dispositivo
- **Voltar**: Botão "← Menu" disponível em todas as telas

## 🎨 Diferenciação Visual

### Component Playground (Roxo)
- Cor primária: `#6200EE`
- Header roxo
- Badge "Interativo" em ciano
- Ícone: 🎨

### React Step Builder (Indigo)
- Cor primária: `#6366f1`
- Header indigo
- Badge "Progressivo" em verde
- Ícone: 📚

## 💡 Dicas de Uso

### No Component Playground:
1. Use o menu lateral para trocar entre componentes
2. Clique em "←" para retrair o menu e ter mais espaço de preview
3. Use os botões + e - para ajustar valores numéricos
4. Experimente diferentes combinações de propriedades
5. Observe o código JSX gerado na parte inferior

### No React Step Builder:
1. Complete os exercícios na ordem para melhor aproveitamento
2. Leia as instruções e dicas com atenção
3. Nas práticas com lacunas:
   - Clique na lacuna que deseja preencher (fica destacada)
   - Escolha uma opção da lista abaixo
   - A próxima lacuna vazia é selecionada automaticamente
4. Valide suas respostas clicando em "Validar Código"
5. Seu progresso é salvo automaticamente

## 🔧 Funcionalidades Especiais

### Auto-Colapso Inteligente (Playground)
- O menu lateral retrai automaticamente quando você aumenta valores que excedem o espaço disponível
- Garante que o componente sempre fique visível na área de preview

### Sistema de Validação (Step Builder)
- Feedback imediato sobre respostas corretas/incorretas
- Mensagens claras de erro com dicas
- Não permite prosseguir sem completar corretamente

### Persistência de Progresso (Step Builder)
- Exercícios completados ficam marcados com ✓
- Progresso salvo mesmo após fechar o app
- Botão de reset disponível na tela de módulos

## 📖 Módulos de Aprendizagem

### Fase 1 - Fundamentos
- O que são componentes
- JSX básico
- View, Text e Image

### Fase 2 - Interatividade
- Eventos (onPress)
- useState Hook
- Renderização condicional

### Fase 3 - Estilização
- StyleSheet
- Flexbox
- Layouts responsivos

### Fase 4 - Navegação
- React Navigation
- Stack Navigator
- Passagem de parâmetros

## 🐛 Solução de Problemas

### App não inicia
- Verifique se o Node.js está instalado: `node --version`
- Delete a pasta `node_modules` e execute `npm install` novamente
- Limpe o cache do Metro: `npm start -- --clear`

### Componentes não aparecem
- Verifique se está usando Expo Go atualizado
- Recarregue o app pressionando `r` no terminal

### Progresso não salva
- Verifique permissões de armazenamento do app
- O AsyncStorage pode estar desabilitado - reinstale o app

### Erros de navegação
- Force o fechamento do app e reabra
- Limpe o cache e reinicie o Metro Bundler

## 📞 Informações Adicionais

- **Versão**: 1.0.0
- **Plataformas**: Android, iOS, Web
- **React Native**: 0.81.5
- **Expo**: ~54.0.25

## 🎓 Aprendizado Recomendado

1. **Iniciantes**: Comece pelo Component Playground para familiarização
2. **Após exploração**: Vá para o React Step Builder, Fase 1
3. **Complete todas as fases** progressivamente
4. **Revise conceitos** voltando ao Playground quando necessário
5. **Experimente modificações** no código dos exercícios

Bom aprendizado! 🚀

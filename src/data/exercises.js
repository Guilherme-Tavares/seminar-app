export default {
  modules: [
    {
      id: 1,
      title: "Fundamentos",
      description: "Aprenda os conceitos básicos do React Native",
      icon: "📚",
      exercises: [
        {
          id: "1-1",
          title: "O que é um Componente?",
          type: "theory",
          content: "Em React Native, componentes são blocos de construção reutilizáveis que compõem a interface do usuário. Um componente funcional é uma função JavaScript que retorna JSX.",
          codeExample: `import React from 'react';
import { Text } from 'react-native';

function MeuComponente() {
  return <Text>Olá, React Native!</Text>;
}

export default MeuComponente;`,
          explanation: "Este é um componente funcional simples que renderiza um texto."
        },
        {
          id: "1-2",
          title: "Criando seu Primeiro Componente",
          type: "practice",
          instruction: "Complete o componente para exibir 'Bem-vindo ao React Native!'",
          codeTemplate: `import React from 'react';
import { Text } from 'react-native';

function BemVindo() {
  return <Text>{{0}}</Text>;
}

export default BemVindo;`,
          blanks: [
            {
              id: 0,
              correctAnswer: "Bem-vindo ao React Native!",
              options: [
                "Bem-vindo ao React Native!",
                "Hello World!",
                "Olá Mundo!",
                "Welcome to React",
                "React Native App"
              ]
            }
          ],
          hint: "Escolha a mensagem de boas-vindas correta"
        },
        {
          id: "1-3",
          title: "Estruturando com View",
          type: "practice",
          instruction: "Use View para agrupar dois componentes Text",
          codeTemplate: `import React from 'react';
import { View, Text } from 'react-native';

function MeuCard() {
  return (
    <View>
      <{{0}}>Título</{{1}}>
      <{{2}}>Descrição</{{3}}>
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "Text",
              options: [
                "Text",
                "Label",
                "Paragraph",
                "Span",
                "TextView"
              ]
            },
            {
              id: 1,
              correctAnswer: "Text",
              options: [
                "Text",
                "Label",
                "Paragraph",
                "Span",
                "TextView"
              ]
            },
            {
              id: 2,
              correctAnswer: "Text",
              options: [
                "Text",
                "Label",
                "Paragraph",
                "Span",
                "TextView"
              ]
            },
            {
              id: 3,
              correctAnswer: "Text",
              options: [
                "Text",
                "Label",
                "Paragraph",
                "Span",
                "TextView"
              ]
            }
          ],
          hint: "Use o componente Text para exibir texto"
        },
        {
          id: "1-4",
          title: "Usando Image",
          type: "practice",
          instruction: "Adicione uma imagem ao componente",
          codeTemplate: `import React from 'react';
import { View, Image } from 'react-native';

function FotoCard() {
  return (
    <View>
      <Image 
        source={{uri: 'https://via.placeholder.com/150'}}
        style={{width: {{0}}, height: {{1}}}}
      />
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "150",
              options: [
                "150",
                "100",
                "200",
                "'150px'",
                "'150'"
              ]
            },
            {
              id: 1,
              correctAnswer: "150",
              options: [
                "150",
                "100",
                "200",
                "'150px'",
                "'150'"
              ]
            }
          ],
          hint: "Lembre-se de definir width e height no style com valores numéricos"
        }
      ]
    },
    {
      id: 2,
      title: "Interatividade",
      description: "Adicione interações e estado aos componentes",
      icon: "⚡",
      exercises: [
        {
          id: "2-2",
          title: "Introdução ao useState",
          type: "theory",
          content: "useState é um Hook que permite adicionar estado a componentes funcionais. Ele retorna um array com o valor atual e uma função para atualizá-lo.",
          codeExample: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
}`,
          explanation: "useState(0) inicializa o estado com valor 0"
        },
        {
          id: "2-1",
          title: "Capturando Eventos",
          type: "practice",
          instruction: "Crie um botão que exibe um alerta ao ser pressionado",
          codeTemplate: `import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

function MeuBotao() {
  return (
    <TouchableOpacity onPress={() => {{0}}}>
      <Text>Clique Aqui</Text>
    </TouchableOpacity>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "Alert.alert('Botão pressionado!')",
              options: [
                "Alert.alert('Botão pressionado!')",
                "console.log('Clicado')",
                "alert('Botão pressionado!')",
                "Alert.show('Mensagem')",
                "showAlert('Clicado')"
              ]
            }
          ],
          hint: "Use Alert.alert() para exibir um alerta nativo"
        },
        {
          id: "2-3",
          title: "Criando um Contador",
          type: "practice",
          instruction: "Complete o contador com botões de incrementar e decrementar",
          codeTemplate: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="+" onPress={() => {{0}}} />
      <Button title="-" onPress={() => {{1}}} />
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "setCount(count + 1)",
              options: [
                "setCount(count + 1)",
                "count++",
                "setCount(count)",
                "count = count + 1",
                "useState(count + 1)"
              ]
            },
            {
              id: 1,
              correctAnswer: "setCount(count - 1)",
              options: [
                "setCount(count - 1)",
                "count--",
                "setCount(count)",
                "count = count - 1",
                "useState(count - 1)"
              ]
            }
          ],
          hint: "Use setCount para atualizar o valor do estado"
        },
        {
          id: "2-4",
          title: "Renderização Condicional",
          type: "practice",
          instruction: "Exiba mensagens diferentes baseadas no estado",
          codeTemplate: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{{0}}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: '{isOn ? "ON" : "OFF"}',
              options: [
                '{isOn ? "ON" : "OFF"}',
                '{isOn && "ON"}',
                '{isOn || "OFF"}',
                '{"ON"}',
                '{isOn.toString()}'
              ]
            }
          ],
          hint: "Use operador ternário: condição ? verdadeiro : falso"
        }
      ]
    },
    {
      id: 3,
      title: "Estilização",
      description: "Domine a estilização de componentes",
      icon: "🎨",
      exercises: [
        {
          id: "3-1",
          title: "StyleSheet Básico",
          type: "theory",
          content: "StyleSheet permite criar estilos organizados e eficientes. É semelhante ao CSS, mas usando camelCase.",
          codeExample: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StyledComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto estilizado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  text: {
    fontSize: 18,
    color: '#333'
  }
});`,
          explanation: "StyleSheet.create otimiza os estilos para melhor performance"
        },
        {
          id: "3-2",
          title: "Criando Estilos",
          type: "practice",
          instruction: "Adicione estilos: fundo azul, texto branco, padding 20",
          codeTemplate: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: {{0}},
    padding: {{1}}
  },
  text: {
    color: {{2}},
    fontSize: 18
  }
});`,
          blanks: [
            {
              id: 0,
              correctAnswer: "'blue'",
              options: [
                "'blue'",
                "'#2196F3'",
                "'#0000FF'",
                "'rgb(33, 150, 243)'",
                "'azul'"
              ]
            },
            {
              id: 1,
              correctAnswer: "20",
              options: [
                "20",
                "'20px'",
                "10",
                "'20'",
                "30"
              ]
            },
            {
              id: 2,
              correctAnswer: "'#fff'",
              options: [
                "'#fff'",
                "'white'",
                "'#FFFFFF'",
                "'rgb(255,255,255)'",
                "'#000'"
              ]
            }
          ],
          hint: "Use backgroundColor, color e padding com valores apropriados"
        },
        {
          id: "3-3",
          title: "Flexbox - Centralização",
          type: "practice",
          instruction: "Centralize o conteúdo usando flexbox",
          codeTemplate: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Centered() {
  return (
    <View style={styles.container}>
      <Text>Centralizado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: {{0}},
    alignItems: {{1}}
  }
});`,
          blanks: [
            {
              id: 0,
              correctAnswer: "'center'",
              options: [
                "'center'",
                "'flex-start'",
                "'flex-end'",
                "'space-between'",
                "'space-around'"
              ]
            },
            {
              id: 1,
              correctAnswer: "'center'",
              options: [
                "'center'",
                "'flex-start'",
                "'flex-end'",
                "'stretch'",
                "'baseline'"
              ]
            }
          ],
          hint: "justifyContent: 'center' e alignItems: 'center'"
        },
        {
          id: "3-4",
          title: "Card Completo",
          type: "practice",
          instruction: "Crie um card estilizado com título e descrição",
          codeTemplate: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nome</Text>
      <Text style={styles.description}>Desenvolvedor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: {{0}},
    elevation: {{1}}
  },
  title: {
    fontSize: 24,
    fontWeight: {{2}}
  },
  description: {
    fontSize: 16,
    color: '#666'
  }
});`,
          blanks: [
            {
              id: 0,
              correctAnswer: "10",
              options: [
                "10",
                "5",
                "15",
                "20",
                "'10px'"
              ]
            },
            {
              id: 1,
              correctAnswer: "3",
              options: [
                "3",
                "5",
                "1",
                "10",
                "'3'"
              ]
            },
            {
              id: 2,
              correctAnswer: "'bold'",
              options: [
                "'bold'",
                "'normal'",
                "'heavy'",
                "'strong'",
                "bold"
              ]
            }
          ],
          hint: "Use borderRadius para cantos arredondados e elevation para sombra no Android"
        }
      ]
    },
    {
      id: 4,
      title: "Navegação",
      description: "Navegue entre telas com React Navigation",
      icon: "🧭",
      exercises: [
        {
          id: "4-1",
          title: "Conceitos de Navegação",
          type: "theory",
          content: "React Navigation permite criar navegação entre telas de forma intuitiva. O Stack Navigator gerencia uma pilha de telas.",
          codeExample: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
          explanation: "Stack.Navigator gerencia a navegação entre telas empilhadas"
        },
        {
          id: "4-2",
          title: "Navegando para Outra Tela",
          type: "practice",
          instruction: "Use navigation.navigate para ir para a tela Details",
          codeTemplate: `import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button 
        title="Ver Detalhes"
        onPress={() => {{0}}}
      />
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "navigation.navigate('Details')",
              options: [
                "navigation.navigate('Details')",
                "navigation.push('Details')",
                "navigation.goTo('Details')",
                "navigate('Details')",
                "navigation.open('Details')"
              ]
            }
          ],
          hint: "Use navigation.navigate('NomeDaTela')"
        },
        {
          id: "4-3",
          title: "Passando Parâmetros",
          type: "practice",
          instruction: "Passe um parâmetro 'itemId' na navegação",
          codeTemplate: `import React from 'react';
import { View, Button } from 'react-native';

function ListScreen({ navigation }) {
  return (
    <View>
      <Button 
        title="Item 1"
        onPress={() => navigation.navigate('Details', {{0}})}
      />
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "{ itemId: 1 }",
              options: [
                "{ itemId: 1 }",
                "itemId: 1",
                "{ id: 1 }",
                "1",
                "{ item: 1 }"
              ]
            }
          ],
          hint: "Passe um objeto como segundo parâmetro"
        },
        {
          id: "4-4",
          title: "Recebendo Parâmetros",
          type: "practice",
          instruction: "Receba e exiba o parâmetro itemId na tela de detalhes",
          codeTemplate: `import React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen({ route }) {
  const { itemId } = {{0}};
  
  return (
    <View>
      <Text>Item ID: {{1}}</Text>
    </View>
  );
}`,
          blanks: [
            {
              id: 0,
              correctAnswer: "route.params",
              options: [
                "route.params",
                "route.parameters",
                "route.data",
                "route.props",
                "navigation.params"
              ]
            },
            {
              id: 1,
              correctAnswer: "{itemId}",
              options: [
                "{itemId}",
                "itemId",
                "{route.params.itemId}",
                "{params.itemId}",
                "route.itemId"
              ]
            }
          ],
          hint: "Use route.params para acessar os parâmetros"
        },
      ]
    }
  ]
};


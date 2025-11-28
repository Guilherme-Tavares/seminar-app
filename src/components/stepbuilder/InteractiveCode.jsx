import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../utils/theme';

export default function InteractiveCode({ 
  codeTemplate, 
  blanks, 
  userAnswers, 
  onAnswerSelect,
  validationError,
  showSuccessMessage,
  onContinue,
  theme = 'stepBuilder'
}) {
  const [selectedBlankId, setSelectedBlankId] = React.useState(blanks.length > 0 ? blanks[0].id : null);
  
  const themeColors = theme === 'playground' ? {
    primary: colors.playgroundPrimary,
  } : {
    primary: colors.stepBuilderPrimary,
  };
  
  // Coletar opções garantindo que todas as respostas corretas estejam incluídas
  const allOptions = [];
  const seenOptions = new Set();
  
  // Primeiro, adicionar todas as respostas corretas
  blanks.forEach((blank) => {
    if (!seenOptions.has(blank.correctAnswer)) {
      seenOptions.add(blank.correctAnswer);
      allOptions.push(blank.correctAnswer);
    }
  });
  
  // Depois, completar com outras opções até 5
  blanks.forEach((blank) => {
    blank.options.forEach((option) => {
      if (!seenOptions.has(option) && allOptions.length < 5) {
        seenOptions.add(option);
        allOptions.push(option);
      }
    });
  });

  // Função para renderizar o código com lacunas interativas
  const renderCodeWithBlanks = () => {
    let parts = [codeTemplate];
    
    // Substituir cada placeholder {{id}} por um componente interativo
    blanks.forEach((blank) => {
      const newParts = [];
      parts.forEach((part) => {
        if (typeof part === 'string') {
          const placeholder = `{{${blank.id}}}`;
          const segments = part.split(placeholder);
          
          for (let i = 0; i < segments.length; i++) {
            newParts.push(segments[i]);
            if (i < segments.length - 1) {
              // Adicionar o componente de lacuna
              newParts.push({
                type: 'blank',
                id: blank.id,
                value: userAnswers[blank.id] || '______'
              });
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    
    return parts;
  };

  const codeParts = renderCodeWithBlanks();

  return (
    <View style={styles.container}>
      {/* Quadro de código expandido */}
      <View style={styles.codeBox}>
        <ScrollView 
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={true}
          >
            <Text style={styles.codeWrapper}>
              {codeParts.map((part, index) => {
                if (typeof part === 'string') {
                  return (
                    <Text key={index} style={styles.codeText}>
                      {part}
                    </Text>
                  );
                } else if (part.type === 'blank') {
                  const isSelected = selectedBlankId === part.id;
                  return (
                    <TouchableOpacity 
                      key={index} 
                      style={[
                        styles.blankContainer,
                        isSelected && { ...styles.blankContainerSelected, borderColor: themeColors.primary }
                      ]}
                      onPress={() => setSelectedBlankId(part.id)}
                    >
                      <Text style={[
                        styles.blankText,
                        isSelected && { ...styles.blankTextSelected, color: themeColors.primary }
                      ]}>{part.value}</Text>
                    </TouchableOpacity>
                  );
                }
                return null;
              })}
            </Text>
          </ScrollView>
        </ScrollView>
      </View>

      {/* Mensagens de erro e sucesso */}
      {validationError && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>
            ⚠️ Verifique suas respostas e tente novamente
          </Text>
        </View>
      )}

      {showSuccessMessage && (
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>✅ Correto!</Text>
          <Text style={styles.successText}>
            Parabéns! Você completou o exercício corretamente!
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={onContinue}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Indicador de lacuna ativa */}
      {blanks.length > 1 && (
        <View style={[styles.blankIndicator, { backgroundColor: themeColors.primary + '20' }]}>
          <Text style={[styles.blankIndicatorText, { color: themeColors.primary }]}>
            Lacuna ativa: #{selectedBlankId + 1} de {blanks.length}
          </Text>
        </View>
      )}

      {/* Opções unificadas para todas as lacunas */}
      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>
          Escolha uma opção{blanks.length > 1 ? ' (clique na lacuna para mudar)' : ''}:
        </Text>
        <View style={styles.optionsList}>
          {allOptions.map((option, index) => {
            // Verificar se esta opção está selecionada na lacuna ativa
            const isSelected = userAnswers[selectedBlankId] === option;
            
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  isSelected && { ...styles.optionButtonSelected, 
                    backgroundColor: themeColors.primary + '20',
                    borderColor: themeColors.primary 
                  }
                ]}
                onPress={() => {
                  if (selectedBlankId !== null) {
                    onAnswerSelect(selectedBlankId, option);
                    // Avançar para próxima lacuna vazia automaticamente
                    const nextEmptyBlank = blanks.find(b => b.id > selectedBlankId && !userAnswers[b.id]);
                    if (nextEmptyBlank) {
                      setSelectedBlankId(nextEmptyBlank.id);
                    }
                  }
                }}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.optionText,
                  isSelected && { ...styles.optionTextSelected, color: themeColors.primary }
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  codeBox: {
    backgroundColor: '#2d3748',
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: '#4a5568',
    height: 400,
  },
  codeWrapper: {
    fontFamily: 'monospace',
    color: '#e2e8f0',
    fontSize: 13,
    lineHeight: 24,
  },
  codeText: {
    fontFamily: 'monospace',
    color: '#e2e8f0',
    lineHeight: 24,
    fontSize: 13,
  },
  blankContainer: {
    backgroundColor: '#4a5568',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    minWidth: 80,
  },
  blankContainerSelected: {
    backgroundColor: '#5a6578',
  },
  blankText: {
    ...typography.bodySmall,
    fontFamily: 'monospace',
    color: '#cbd5e0',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
  },
  blankTextSelected: {
    // color será definida dinamicamente
  },
  blankIndicator: {
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    marginTop: spacing.md,
    alignItems: 'center',
  },
  blankIndicatorText: {
    ...typography.bodySmall,
    fontWeight: 'bold',
  },
  errorBox: {
    backgroundColor: colors.error,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
  },
  errorText: {
    ...typography.body,
    color: 'white',
    textAlign: 'center',
  },
  successBox: {
    backgroundColor: colors.success,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
  },
  successTitle: {
    ...typography.h4,
    color: 'white',
    marginBottom: spacing.sm,
  },
  successText: {
    ...typography.body,
    color: 'white',
    marginBottom: spacing.md,
  },
  continueButton: {
    backgroundColor: 'white',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  continueButtonText: {
    ...typography.body,
    fontWeight: '600',
    color: colors.success,
  },
  optionsContainer: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  optionsTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  optionsList: {
    gap: spacing.sm,
  },
  optionButton: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.border,
  },
  optionButtonSelected: {
    // backgroundColor e borderColor serão definidas dinamicamente
  },
  optionText: {
    ...typography.body,
    fontFamily: 'monospace',
    color: colors.text,
  },
  optionTextSelected: {
    fontWeight: 'bold',
    // color será definida dinamicamente
  },
});

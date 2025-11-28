import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../../components/stepbuilder/Button';
import CodePreview from '../../components/stepbuilder/CodePreview';
import InteractiveCode from '../../components/stepbuilder/InteractiveCode';
import { ProgressManager } from '../../utils/progressManager';
import { colors, spacing, borderRadius, typography } from '../../utils/theme';

export default function ExerciseScreen({ route, navigation }) {
  const { moduleId, exerciseIndex, exercises } = route.params;
  const [currentIndex, setCurrentIndex] = useState(exerciseIndex);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [validationError, setValidationError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const exercise = exercises[currentIndex];
  const isLastExercise = currentIndex === exercises.length - 1;
  const isTheory = exercise.type === 'theory';
  const isPractice = exercise.type === 'practice' && exercise.blanks;

  useEffect(() => {
    checkIfCompleted();
    // Reset user answers when changing exercise
    setUserAnswers({});
    setValidationError(false);
    setShowSuccessMessage(false);
    // Update header with current exercise number
    navigation.setOptions({
      title: `Exercício ${currentIndex + 1}/${exercises.length}`,
    });
  }, [currentIndex]);

  const checkIfCompleted = async () => {
    const completed = await ProgressManager.isExerciseCompleted(exercise.id);
    setIsCompleted(completed);
  };

  const handleComplete = async () => {
    if (isPractice) {
      // Validate interactive exercise
      const isValid = validateAnswers();
      
      if (!isValid) {
        setValidationError(true);
        setShowSuccessMessage(false);
        return;
      }
      
      // If validation passed - show success message
      setValidationError(false);
      setShowSuccessMessage(true);
    } else if (!isTheory) {
      // For old-style practice exercises without blanks
      Alert.alert(
        'Validar Código',
        'Na versão completa, aqui seria validado o código que você escreveu. Por enquanto, vamos marcar como concluído!',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Marcar como Concluído', onPress: () => completeExercise() }
        ]
      );
    } else {
      // For theory exercises - mark as completed only when user clicks button
      completeExercise();
    }
  };

  const handleContinueAfterSuccess = () => {
    setShowSuccessMessage(false);
    completeExercise();
  };

  const validateAnswers = () => {
    if (!exercise.blanks) return true;
    
    // Check if all blanks are filled
    for (let blank of exercise.blanks) {
      if (!userAnswers[blank.id]) {
        return false;
      }
      // Trim and compare to handle potential whitespace issues
      const userAnswer = String(userAnswers[blank.id]).trim();
      const correctAnswer = String(blank.correctAnswer).trim();
      
      if (userAnswer !== correctAnswer) {
        return false;
      }
    }
    
    return true;
  };

  const handleAnswerSelect = (blankId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [blankId]: answer
    }));
    setValidationError(false);
  };

  const completeExercise = async () => {
    await ProgressManager.completeExercise(exercise.id);
    setIsCompleted(true);
    
    if (isLastExercise) {
      // Show completion message
      Alert.alert(
        'Parabéns! 🎉',
        'Você concluiu todos os exercícios deste módulo!',
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]
      );
    } else {
      // Move to next exercise
      Alert.alert(
        'Exercício Concluído! ✓',
        'Pronto para o próximo?',
        [
          { text: 'Voltar', onPress: () => navigation.goBack() },
          { text: 'Próximo', onPress: () => setCurrentIndex(currentIndex + 1) }
        ]
      );
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Exercise Header */}
        <View style={styles.header}>
          <View style={styles.typeContainer}>
            <Text style={[
              styles.typeLabel,
              isTheory ? styles.theoryLabel : styles.practiceLabel
            ]}>
              {isTheory ? '📖 Teoria' : '💻 Prática'}
            </Text>
          </View>
          
          <Text style={styles.title}>{exercise.title}</Text>
          
          {isCompleted && (
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>✓ Concluído</Text>
            </View>
          )}
        </View>

        {/* Exercise Content */}
        <View style={styles.content}>
          {isTheory ? (
            // Theory Content
            <>
              <Text style={styles.contentText}>{exercise.content}</Text>
              
              <Text style={styles.sectionTitle}>Exemplo:</Text>
              <CodePreview code={exercise.codeExample} theme="stepBuilder" />
              
              {exercise.explanation && (
                <>
                  <Text style={styles.sectionTitle}>Explicação:</Text>
                  <View style={styles.explanationBox}>
                    <Text style={styles.explanationText}>{exercise.explanation}</Text>
                  </View>
                </>
              )}
            </>
          ) : isPractice ? (
            // Interactive Practice Content
            <>
              <Text style={styles.sectionTitle}>Desafio:</Text>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionText}>{exercise.instruction}</Text>
              </View>

              <Text style={styles.sectionTitle}>Complete o Código:</Text>
              <InteractiveCode 
                codeTemplate={exercise.codeTemplate}
                blanks={exercise.blanks}
                userAnswers={userAnswers}
                onAnswerSelect={handleAnswerSelect}
                validationError={validationError}
                showSuccessMessage={showSuccessMessage}
                onContinue={handleContinueAfterSuccess}
                theme="stepBuilder"
              />

              {exercise.hint && (
                <>
                  <Text style={styles.sectionTitle}>💡 Dica:</Text>
                  <View style={styles.hintBox}>
                    <Text style={styles.hintText}>{exercise.hint}</Text>
                  </View>
                </>
              )}
            </>
          ) : (
            // Old Practice Content (for exercises without blanks)
            <>
              <Text style={styles.sectionTitle}>Desafio:</Text>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionText}>{exercise.instruction}</Text>
              </View>

              <Text style={styles.sectionTitle}>Código Inicial:</Text>
              <CodePreview code={exercise.initialCode} theme="stepBuilder" />

              {exercise.hint && (
                <>
                  <Text style={styles.sectionTitle}>💡 Dica:</Text>
                  <View style={styles.hintBox}>
                    <Text style={styles.hintText}>{exercise.hint}</Text>
                  </View>
                </>
              )}

              {exercise.solution && (
                <>
                  <Text style={styles.sectionTitle}>Solução:</Text>
                  <CodePreview code={exercise.solution} theme="stepBuilder" />
                </>
              )}
            </>
          )}
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressIndicator}>
          <View style={styles.progressDots}>
            {exercises.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex && styles.activeDot,
                  index < currentIndex && styles.completedDot,
                ]}
              />
            ))}
          </View>
          <Text style={styles.progressText}>
            {currentIndex + 1} de {exercises.length}
          </Text>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <View style={styles.navigationButtons}>
          <Button
            title="← Anterior"
            onPress={handlePrevious}
            variant="outline"
            disabled={currentIndex === 0}
            theme="stepBuilder"
          />
          
          {!isCompleted && !showSuccessMessage && (
            <Button
              title={isPractice ? 'Verificar' : isTheory ? 'Entendi' : 'Concluir'}
              onPress={handleComplete}
              theme="stepBuilder"
            />
          )}
          
          <Button
            title="Próximo →"
            onPress={handleNext}
            variant="outline"
            disabled={isLastExercise}
            theme="stepBuilder"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },
  typeContainer: {
    marginBottom: spacing.sm,
  },
  typeLabel: {
    ...typography.bodySmall,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  theoryLabel: {
    backgroundColor: colors.info + '20',
    color: colors.info,
  },
  practiceLabel: {
    backgroundColor: colors.secondary + '20',
    color: colors.secondary,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  completedBadge: {
    backgroundColor: colors.success + '20',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
  },
  completedText: {
    ...typography.bodySmall,
    color: colors.success,
    fontWeight: 'bold',
  },
  content: {
    padding: spacing.lg,
  },
  contentText: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  instructionBox: {
    backgroundColor: colors.primary + '10',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    marginBottom: spacing.md,
  },
  instructionText: {
    ...typography.body,
    color: colors.text,
  },
  explanationBox: {
    backgroundColor: colors.info + '10',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.info,
  },
  explanationText: {
    ...typography.body,
    color: colors.text,
  },
  successBox: {
    backgroundColor: colors.success,
    padding: spacing.md,
    borderRadius: 8,
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
  },
  hintBox: {
    backgroundColor: colors.warning + '10',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  hintText: {
    ...typography.body,
    color: colors.text,
  },
  errorBox: {
    backgroundColor: colors.error + '10',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    marginVertical: spacing.md,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    fontWeight: 'bold',
  },
  progressIndicator: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  progressDots: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.border,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 24,
  },
  completedDot: {
    backgroundColor: colors.success,
  },
  progressText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  actions: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
});

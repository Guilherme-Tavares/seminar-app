import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import ModuleCard from '../../components/stepbuilder/ModuleCard';
import ProgressBar from '../../components/stepbuilder/ProgressBar';
import Button from '../../components/stepbuilder/Button';
import exercisesData from '../../data/exercises';
import { ProgressManager } from '../../utils/progressManager';
import { colors, spacing, typography } from '../../utils/theme';

export default function ModulesScreen({ navigation }) {
  const [progress, setProgress] = useState({ completedExercises: [], currentModule: 1 });
  const [moduleProgresses, setModuleProgresses] = useState([]);

  // Reload progress every time the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadProgress();
    }, [])
  );

  const loadProgress = async () => {
    const userProgress = await ProgressManager.getProgress();
    setProgress(userProgress);

    // Calculate progress for each module
    const progresses = await Promise.all(
      exercisesData.modules.map(async (module) => {
        return await ProgressManager.getModuleProgress(module.id, module.exercises.length);
      })
    );
    setModuleProgresses(progresses);
  };

  const handleModulePress = (module) => {
    navigation.navigate('Exercise', { 
      moduleId: module.id,
      exerciseIndex: 0,
      exercises: module.exercises
    });
  };

  const getTotalExercises = () => {
    return exercisesData.modules.reduce((total, module) => {
      return total + (module.exercises ? module.exercises.length : 0);
    }, 0);
  };

  const handleResetProgress = async () => {
    // Check if running on web or mobile
    if (Platform.OS === 'web') {
      // Use window.confirm for web browsers
      const confirmed = window.confirm(
        'Tem certeza que deseja apagar todo o seu progresso? Esta ação não pode ser desfeita.'
      );
      
      if (confirmed) {
        await ProgressManager.resetProgress();
        await loadProgress();
      }
    } else {
      // Use Alert.alert for mobile devices (iOS/Android)
      Alert.alert(
        'Reiniciar Progresso',
        'Tem certeza que deseja apagar todo o seu progresso? Esta ação não pode ser desfeita.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { 
            text: 'Reiniciar', 
            style: 'destructive',
            onPress: async () => {
              await ProgressManager.resetProgress();
              await loadProgress();
            }
          }
        ]
      );
    }
  };

  const totalExercises = getTotalExercises();
  const completedExercises = progress.completedExercises.length;
  const allExercisesCompleted = completedExercises === totalExercises && totalExercises > 0;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sua Jornada de Aprendizado</Text>
          <Text style={styles.subtitle}>
            Complete os módulos em sequência para dominar React Native
          </Text>
        </View>

        {/* Overall Progress */}
        <View style={styles.progressSection}>
          <ProgressBar current={completedExercises} total={totalExercises} theme="stepBuilder" />
          
          {/* Reset Button - Only shown when all exercises are completed */}
          {allExercisesCompleted && (
            <View style={styles.resetContainer}>
              <Button
                title="🔄 Reiniciar Progresso"
                onPress={handleResetProgress}
                variant="secondary"
                theme="stepBuilder"
              />
            </View>
          )}
        </View>

        {/* Modules List */}
        <View style={styles.modulesList}>
          {exercisesData.modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              onPress={() => handleModulePress(module)}
              progress={moduleProgresses[index]}
              theme="stepBuilder"
            />
          ))}
        </View>

        {/* Motivational Message */}
        <View style={styles.motivation}>
          <Text style={styles.motivationText}>
            💪 Continue praticando! Cada exercício concluído te aproxima do seu objetivo.
          </Text>
        </View>
      </ScrollView>
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
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  progressSection: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    marginBottom: spacing.sm,
  },
  resetContainer: {
    marginTop: spacing.md,
  },
  modulesList: {
    padding: spacing.lg,
  },
  motivation: {
    margin: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.primaryLight + '20',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  motivationText: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
  },
});

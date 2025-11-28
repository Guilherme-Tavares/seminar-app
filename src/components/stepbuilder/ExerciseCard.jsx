import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../utils/theme';

export default function ExerciseCard({ exercise, onPress, isCompleted, index, theme = 'stepBuilder' }) {
  const themeColors = theme === 'playground' ? {
    primary: colors.playgroundPrimary,
  } : {
    primary: colors.stepBuilderPrimary,
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={[styles.badge, isCompleted && styles.badgeCompleted]}>
          <Text style={[styles.badgeText, isCompleted && styles.badgeTextCompleted]}>
            {index + 1}
          </Text>
        </View>
        
        {isCompleted && (
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{exercise.title}</Text>
        
        <View style={styles.typeContainer}>
          <Text style={[
            styles.typeLabel,
            exercise.type === 'theory' ? styles.theoryLabel : styles.practiceLabel
          ]}>
            {exercise.type === 'theory' ? '📖 Teoria' : '💻 Prática'}
          </Text>
        </View>
      </View>

      <View style={styles.arrow}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
    ...shadows.small,
  },
  header: {
    marginRight: spacing.md,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeCompleted: {
    backgroundColor: colors.success,
  },
  badgeText: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  badgeTextCompleted: {
    color: colors.surface,
  },
  checkmark: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: borderRadius.full,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: colors.surface,
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  typeContainer: {
    flexDirection: 'row',
  },
  typeLabel: {
    ...typography.caption,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  theoryLabel: {
    backgroundColor: colors.info + '20',
    color: colors.info,
  },
  practiceLabel: {
    backgroundColor: colors.success + '20',
    color: colors.success,
  },
  arrow: {
    marginLeft: spacing.sm,
  },
  arrowText: {
    fontSize: 24,
    color: colors.textLight,
  },
});

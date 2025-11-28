import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../utils/theme';

export default function ProgressBar({ current, total, theme = 'stepBuilder' }) {
  const percentage = Math.round((current / total) * 100);
  
  const themeColors = theme === 'playground' ? {
    primary: colors.playgroundPrimary,
  } : {
    primary: colors.stepBuilderPrimary,
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.label}>Progresso</Text>
        <Text style={[styles.percentage, { color: themeColors.primary }]}>{percentage}%</Text>
      </View>
      
      <View style={styles.barContainer}>
        <View style={[styles.barFill, { width: `${percentage}%`, backgroundColor: themeColors.primary }]} />
      </View>
      
      <Text style={styles.text}>
        {current} de {total} exercícios concluídos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
  percentage: {
    ...typography.body,
    fontWeight: 'bold',
  },
  barContainer: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
  },
  text: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});

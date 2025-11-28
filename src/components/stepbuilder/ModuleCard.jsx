import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../utils/theme';

export default function ModuleCard({ module, onPress, progress, theme = 'stepBuilder' }) {
  const themeColors = theme === 'playground' ? {
    primary: colors.playgroundPrimary,
    primaryLight: colors.playgroundPrimary,
  } : {
    primary: colors.stepBuilderPrimary,
    primaryLight: colors.stepBuilderPrimaryLight,
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: themeColors.primaryLight + '20' }]}>
        <Text style={styles.icon}>{module.icon}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{module.title}</Text>
        <Text style={styles.description}>{module.description}</Text>
        
        {progress && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[styles.progressFill, { 
                  width: `${progress.percentage}%`,
                  backgroundColor: themeColors.primary 
                }]} 
              />
            </View>
            <Text style={styles.progressText}>
              {progress.completed}/{progress.total} exercícios
            </Text>
          </View>
        )}
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
    ...shadows.medium,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  icon: {
    fontSize: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  progressContainer: {
    marginTop: spacing.sm,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    ...typography.caption,
    color: colors.textLight,
  },
  arrow: {
    marginLeft: spacing.sm,
  },
  arrowText: {
    fontSize: 24,
    color: colors.textLight,
  },
});

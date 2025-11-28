import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../utils/theme';

export default function CodePreview({ code, language = 'javascript' }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotRed]} />
          <View style={[styles.dot, styles.dotYellow]} />
          <View style={[styles.dot, styles.dotGreen]} />
        </View>
        <Text style={styles.language}>{language}</Text>
      </View>
      
      <ScrollView 
        style={styles.codeContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.code}>{code}</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginVertical: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f172a',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  dots: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
  },
  dotRed: {
    backgroundColor: '#ef4444',
  },
  dotYellow: {
    backgroundColor: '#f59e0b',
  },
  dotGreen: {
    backgroundColor: '#22c55e',
  },
  language: {
    ...typography.caption,
    color: colors.textLight,
    textTransform: 'uppercase',
  },
  codeContainer: {
    padding: spacing.md,
  },
  code: {
    ...typography.bodySmall,
    fontFamily: 'monospace',
    color: '#e2e8f0',
    lineHeight: 20,
  },
});

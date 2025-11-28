import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../utils/theme';

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  disabled = false,
  loading = false,
  icon = null,
  fullWidth = false,
  theme = 'stepBuilder' // 'stepBuilder' ou 'playground'
}) {
  // Selecionar cores baseado no tema
  const themeColors = theme === 'playground' ? {
    primary: colors.playgroundPrimary,
    primaryDark: colors.playgroundPrimaryDark,
  } : {
    primary: colors.stepBuilderPrimary,
    primaryDark: colors.stepBuilderPrimaryDark,
  };

  const buttonStyles = [
    styles.button,
    variant === 'primary' && { ...styles.primaryButton, backgroundColor: themeColors.primary },
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && { ...styles.outlineButton, borderColor: themeColors.primary },
    disabled && styles.disabledButton,
    fullWidth && styles.fullWidth,
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && { ...styles.outlineText, color: themeColors.primary },
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? themeColors.primary : colors.surface} />
      ) : (
        <>
          {icon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
    ...shadows.small,
  },
  primaryButton: {
    // backgroundColor será definida dinamicamente
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    // borderColor será definida dinamicamente
  },
  disabledButton: {
    backgroundColor: colors.border,
    opacity: 0.6,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    ...typography.body,
    fontWeight: '600',
  },
  primaryText: {
    color: colors.surface,
  },
  secondaryText: {
    color: colors.surface,
  },
  outlineText: {
    // color será definida dinamicamente
  },
  disabledText: {
    color: colors.textLight,
  },
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing, borderRadius, typography, shadows } from '../utils/theme';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>⚛️</Text>
          </View>
          
          <Text style={styles.title}>React Native Workshop</Text>
          <Text style={styles.subtitle}>
            Explore, aprenda e domine React Native de forma interativa
          </Text>
        </View>

        {/* Cards Section */}
        <View style={styles.cardsSection}>
          <Text style={styles.sectionTitle}>Escolha sua jornada</Text>
          
          {/* Component Playground Card */}
          <TouchableOpacity
            style={[styles.card, styles.playgroundCard]}
            onPress={() => navigation.navigate('ComponentPlayground')}
            activeOpacity={0.9}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconContainer, { backgroundColor: colors.playgroundPrimary + '20' }]}>
                <Text style={styles.cardIcon}>🎨</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: colors.playgroundSecondary }]}>
                <Text style={styles.badgeText}>Interativo</Text>
              </View>
            </View>
            
            <Text style={styles.cardTitle}>Component Playground</Text>
            <Text style={styles.cardDescription}>
              Explore componentes do React Native em tempo real. Modifique propriedades, 
              visualize mudanças instantaneamente e veja o código JSX gerado automaticamente.
            </Text>
            
            <View style={styles.features}>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>7 componentes essenciais</Text>
              </View>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>Preview em tempo real</Text>
              </View>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>Código JSX automático</Text>
              </View>
            </View>
            
            <View style={[styles.cardButton, { backgroundColor: colors.playgroundPrimary }]}>
              <Text style={styles.cardButtonText}>Começar a Explorar →</Text>
            </View>
          </TouchableOpacity>

          {/* Step Builder Card */}
          <TouchableOpacity
            style={[styles.card, styles.stepBuilderCard]}
            onPress={() => navigation.navigate('StepBuilder')}
            activeOpacity={0.9}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconContainer, { backgroundColor: colors.stepBuilderPrimary + '20' }]}>
                <Text style={styles.cardIcon}>📚</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: colors.stepBuilderSecondary }]}>
                <Text style={styles.badgeText}>Progressivo</Text>
              </View>
            </View>
            
            <Text style={styles.cardTitle}>React Step Builder</Text>
            <Text style={styles.cardDescription}>
              Aprenda React Native através de exercícios práticos e progressivos. 
              Do básico ao avançado, com feedback imediato e acompanhamento do seu progresso.
            </Text>
            
            <View style={styles.features}>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>4 módulos de aprendizagem</Text>
              </View>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>Exercícios práticos</Text>
              </View>
              <View style={styles.feature}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>Sistema de progresso</Text>
              </View>
            </View>
            
            <View style={[styles.cardButton, { backgroundColor: colors.stepBuilderPrimary }]}>
              <Text style={styles.cardButtonText}>Começar a Aprender →</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🎓 Plataforma educacional para React Native
          </Text>
          <Text style={styles.footerSubtext}>
            Gratuito • Sem cadastro necessário
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.stepBuilderPrimary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  hero: {
    alignItems: 'center',
    paddingTop: spacing.xxl * 1.5,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    ...shadows.large,
  },
  logo: {
    fontSize: 56,
  },
  title: {
    ...typography.h1,
    fontSize: 36,
    color: colors.surface,
    textAlign: 'center',
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  subtitle: {
    ...typography.body,
    fontSize: 16,
    color: colors.surface,
    textAlign: 'center',
    opacity: 0.95,
    maxWidth: width - spacing.xxl,
  },
  cardsSection: {
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius.xl * 1.5,
    borderTopRightRadius: borderRadius.xl * 1.5,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.large,
  },
  playgroundCard: {
    borderWidth: 2,
    borderColor: colors.playgroundPrimary + '30',
  },
  stepBuilderCard: {
    borderWidth: 2,
    borderColor: colors.stepBuilderPrimary + '30',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: 32,
  },
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardTitle: {
    ...typography.h2,
    fontSize: 24,
    color: colors.text,
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  cardDescription: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 22,
  },
  features: {
    marginBottom: spacing.lg,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  featureBullet: {
    ...typography.body,
    color: colors.success,
    marginRight: spacing.sm,
    fontWeight: 'bold',
  },
  featureText: {
    ...typography.bodySmall,
    color: colors.text,
  },
  cardButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.small,
  },
  cardButtonText: {
    ...typography.body,
    color: colors.surface,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  footerText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  footerSubtext: {
    ...typography.bodySmall,
    color: colors.textLight,
    textAlign: 'center',
  },
});

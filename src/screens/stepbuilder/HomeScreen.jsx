import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/stepbuilder/Button';
import { colors, spacing, borderRadius, typography } from '../../utils/theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
          
          <Text style={styles.title}>React Step Builder</Text>
          <Text style={styles.subtitle}>
            Aprenda React Native através de exercícios práticos e progressivos
          </Text>
        </View>

        {/* Features */}
        <View style={styles.features}>
          <FeatureItem 
            icon="📚"
            title="Aprendizagem Progressiva"
            description="4 módulos que vão do básico ao avançado"
          />
          <FeatureItem 
            icon="💻"
            title="Exercícios Práticos"
            description="Aprenda fazendo, com feedback imediato"
          />
          <FeatureItem 
            icon="📊"
            title="Acompanhe seu Progresso"
            description="Veja sua evolução em tempo real"
          />
        </View>

        {/* Modules Preview */}
        <View style={styles.modulesPreview}>
          <Text style={styles.sectionTitle}>O que você vai aprender:</Text>
          
          <ModulePreview phase="1" title="Fundamentos" icon="📚" />
          <ModulePreview phase="2" title="Interatividade" icon="⚡" />
          <ModulePreview phase="3" title="Estilização" icon="🎨" />
          <ModulePreview phase="4" title="Navegação" icon="🧭" />
        </View>

        {/* CTA Button */}
        <View style={styles.ctaContainer}>
          <Button
            title="Começar Agora"
            onPress={() => navigation.navigate('Modules')}
            fullWidth
            theme="stepBuilder"
          />
          
          <Text style={styles.footerText}>
            Gratuito • Sem cadastro necessário
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <View style={styles.featureItem}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

function ModulePreview({ phase, title, icon }) {
  return (
    <View style={styles.modulePreview}>
      <View style={styles.modulePhase}>
        <Text style={styles.modulePhaseText}>Fase {phase}</Text>
      </View>
      <Text style={styles.moduleIcon}>{icon}</Text>
      <Text style={styles.moduleTitle}>{title}</Text>
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
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: colors.surface + '20',
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  logo: {
    fontSize: 64,
  },
  title: {
    ...typography.h1,
    color: colors.surface,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.surface,
    textAlign: 'center',
    opacity: 0.9,
  },
  features: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    padding: spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  modulesPreview: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  modulePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },
  modulePhase: {
    backgroundColor: colors.stepBuilderPrimary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
  },
  modulePhaseText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: 'bold',
  },
  moduleIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  moduleTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
  ctaContainer: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  footerText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});

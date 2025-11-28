import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../../components/stepbuilder/Button';
import { colors, spacing, borderRadius, typography } from '../../utils/theme';

export default function ResultScreen({ navigation }) {
  const handleBackToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const handleReviewModules = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Modules' }],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Animation */}
        <View style={styles.successContainer}>
          <Text style={styles.trophy}>🏆</Text>
          <Text style={styles.title}>Parabéns!</Text>
          <Text style={styles.subtitle}>
            Você concluiu o React Step Builder!
          </Text>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>O que você conquistou:</Text>
          
          <Achievement 
            icon="📚"
            title="Fundamentos Dominados"
            description="Você entende componentes, JSX e estrutura básica"
          />
          <Achievement 
            icon="⚡"
            title="Interatividade Implementada"
            description="Hooks, estado e eventos não são mais mistério"
          />
          <Achievement 
            icon="🎨"
            title="Estilização Profissional"
            description="StyleSheet e Flexbox sob controle"
          />
          <Achievement 
            icon="🧭"
            title="Navegação Configurada"
            description="React Navigation é sua ferramenta agora"
          />
          <Achievement 
            icon="🚀"
            title="Projeto Completo"
            description="Capaz de construir aplicações funcionais"
          />
        </View>

        {/* Next Steps */}
        <View style={styles.nextStepsContainer}>
          <Text style={styles.sectionTitle}>Próximos Passos:</Text>
          
          <NextStep 
            number="1"
            title="Continue Praticando"
            description="Crie seus próprios projetos para consolidar o conhecimento"
          />
          <NextStep 
            number="2"
            title="Explore Bibliotecas"
            description="Conheça bibliotecas populares como React Query, Zustand, etc."
          />
          <NextStep 
            number="3"
            title="Aprofunde-se"
            description="Estude performance, animações e recursos avançados"
          />
          <NextStep 
            number="4"
            title="Compartilhe"
            description="Ensine o que aprendeu e contribua com a comunidade"
          />
        </View>

        {/* Resources */}
        <View style={styles.resourcesBox}>
          <Text style={styles.resourcesTitle}>📖 Recursos Recomendados:</Text>
          <Text style={styles.resourceText}>
            • Documentação oficial do React Native{'\n'}
            • React Navigation docs{'\n'}
            • Expo documentation{'\n'}
            • React Native community forums{'\n'}
            • GitHub projects and examples
          </Text>
        </View>

        {/* Final Message */}
        <View style={styles.finalMessageBox}>
          <Text style={styles.finalMessageText}>
            "A jornada de mil milhas começa com um único passo. Você deu muitos 
            passos hoje. Continue caminhando e construindo aplicativos incríveis!" 🌟
          </Text>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <Button
          title="Voltar ao Início"
          onPress={handleBackToHome}
          variant="outline"
          fullWidth
          theme="stepBuilder"
        />
        <Button
          title="Revisar Módulos"
          onPress={handleReviewModules}
          fullWidth
          theme="stepBuilder"
        />
      </View>
    </View>
  );
}

function Achievement({ icon, title, description }) {
  return (
    <View style={styles.achievementCard}>
      <Text style={styles.achievementIcon}>{icon}</Text>
      <View style={styles.achievementContent}>
        <Text style={styles.achievementTitle}>{title}</Text>
        <Text style={styles.achievementDescription}>{description}</Text>
      </View>
      <Text style={styles.achievementCheck}>✓</Text>
    </View>
  );
}

function NextStep({ number, title, description }) {
  return (
    <View style={styles.nextStepCard}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
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
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  successContainer: {
    alignItems: 'center',
    padding: spacing.xxl,
    backgroundColor: colors.primary,
  },
  trophy: {
    fontSize: 96,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.surface,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.surface,
    textAlign: 'center',
    opacity: 0.9,
  },
  achievementsContainer: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    marginTop: spacing.sm,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },
  achievementIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs / 2,
  },
  achievementDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  achievementCheck: {
    fontSize: 24,
    color: colors.success,
  },
  nextStepsContainer: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    marginTop: spacing.sm,
  },
  nextStepCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  stepNumberText: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.surface,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs / 2,
  },
  stepDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  resourcesBox: {
    margin: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.info + '10',
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.info,
  },
  resourcesTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  resourceText: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
  },
  finalMessageBox: {
    margin: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.primary + '10',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  finalMessageText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  actions: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing.sm,
  },
});

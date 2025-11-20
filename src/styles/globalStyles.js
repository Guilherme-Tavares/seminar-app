import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

// Paleta de cores
export const colors = {
  primary: '#6200EE',
  primaryDark: '#3700B3',
  secondary: '#03DAC6',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  error: '#B00020',
  text: '#000000',
  textSecondary: '#666666',
  border: '#E0E0E0',
  codeBackground: '#282C34',
  codeText: '#ABB2BF',
  success: '#4CAF50',
};

// Estilos globais
export default StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  // Header
  header: {
    backgroundColor: colors.primary,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  
  // Layout principal
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  
  // Lista de componentes (sidebar)
  sidebar: {
    width: width * 0.38,
    backgroundColor: colors.surface,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  sidebarCollapsed: {
    width: 60,
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sidebarHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  sidebarToggleButton: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarToggleText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  componentItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  componentItemActive: {
    backgroundColor: colors.primary,
  },
  componentItemText: {
    fontSize: 14,
    color: colors.text,
  },
  componentItemTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  componentItemCollapsed: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentItemAbbr: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  componentItemAbbrActive: {
    color: '#FFFFFF',
  },

  
  // Área de preview e código
  previewContainer: {
    flex: 1,
  },
  
  // Área de preview
  previewSection: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.text,
  },
  previewArea: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  // Painel de propriedades
  propertiesPanel: {
    backgroundColor: colors.background,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  propertiesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  propertyRow: {
    marginBottom: 15,
    minWidth: 150,
    marginRight: 10,
  },
  propertyLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  propertyInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    width: '100%',
    paddingRight: 30,
  },
  numberInputContainer: {
    position: 'relative',
    width: '100%',
  },
  incrementButtons: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -12 }],
    width: 20,
    justifyContent: 'center',
    gap: 4,
  },
  incrementButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 10,
  },
  incrementButtonText: {
    color: '#999999',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 12,
  },
  propertyButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  propertyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  // Exibição de código
  codeSection: {
    backgroundColor: colors.codeBackground,
    padding: 15,
    maxHeight: height * 0.3,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.secondary,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.codeText,
    lineHeight: 18,
  },
  
  // Utilitários
  textCenter: {
    textAlign: 'center',
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
})
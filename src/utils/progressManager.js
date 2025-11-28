import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = '@react_step_builder_progress';
const VERSION_KEY = '@react_step_builder_version';
const CURRENT_VERSION = '1.0';

export const ProgressManager = {
  async getProgress() {
    try {
      // Check version and clear old data if version changed
      const savedVersion = await AsyncStorage.getItem(VERSION_KEY);
      if (savedVersion !== CURRENT_VERSION) {
        await AsyncStorage.removeItem(PROGRESS_KEY);
        await AsyncStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      }

      const data = await AsyncStorage.getItem(PROGRESS_KEY);
      return data ? JSON.parse(data) : { completedExercises: [], currentModule: 1 };
    } catch (error) {
      console.error('Error loading progress:', error);
      return { completedExercises: [], currentModule: 1 };
    }
  },

  async saveProgress(progress) {
    try {
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  },

  async completeExercise(exerciseId) {
    try {
      const progress = await this.getProgress();
      if (!progress.completedExercises.includes(exerciseId)) {
        progress.completedExercises.push(exerciseId);
        await this.saveProgress(progress);
      }
      return progress;
    } catch (error) {
      console.error('Error completing exercise:', error);
    }
  },

  async setCurrentModule(moduleId) {
    try {
      const progress = await this.getProgress();
      progress.currentModule = moduleId;
      await this.saveProgress(progress);
    } catch (error) {
      console.error('Error setting module:', error);
    }
  },

  async resetProgress() {
    try {
      await AsyncStorage.removeItem(PROGRESS_KEY);
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  },

  async isExerciseCompleted(exerciseId) {
    try {
      const progress = await this.getProgress();
      return progress.completedExercises.includes(exerciseId);
    } catch (error) {
      console.error('Error checking exercise:', error);
      return false;
    }
  },

  async getModuleProgress(moduleId, totalExercises) {
    try {
      const progress = await this.getProgress();
      const moduleExercises = progress.completedExercises.filter(id => 
        id.startsWith(`${moduleId}-`)
      );
      return {
        completed: moduleExercises.length,
        total: totalExercises,
        percentage: Math.round((moduleExercises.length / totalExercises) * 100)
      };
    } catch (error) {
      console.error('Error getting module progress:', error);
      return { completed: 0, total: totalExercises, percentage: 0 };
    }
  }
};

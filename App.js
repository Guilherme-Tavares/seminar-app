import { StatusBar } from 'expo-status-bar';
import MainScreen from './src/components/MainScreen';

export default function App() {
  return (
    <>
      <MainScreen />
      <StatusBar style="auto" />
    </>
  );
}

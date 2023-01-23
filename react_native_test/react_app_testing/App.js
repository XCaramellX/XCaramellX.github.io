import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles/app-styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


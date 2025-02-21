import './global.css';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { RootRouter } from 'routes';

export default function App() {
  return (
    <>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}
        style={styles.container}
      >
        <RootRouter />
      </SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

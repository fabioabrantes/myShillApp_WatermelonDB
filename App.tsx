import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Load } from './src/components/Load';

import theme from './src/theme';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Load />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
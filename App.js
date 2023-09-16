import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import AppAction from './components/AppAction';
import BottomNavigationPanel from './components/BottomNavigationPanel';

export default function App() {
  return (
    <PaperProvider>
        <AppHeader />
        {/* <StatusBar style="auto" /> */}
        <Text>Open up App.js to start working on your app!</Text>
        <BottomNavigationPanel style={styles.bottomNav} />
      <View style={styles.container}>
        {/* <AppAction /> */}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
  }
});

AppRegistry.registerComponent(appName, () => App);
import * as React from 'react';
import {useState} from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import BottomNavigationPanel from './components/BottomNavigationPanel';
import { Image } from 'expo-image';
import { NavigationContainer } from '@react-navigation/native';
import Search from './pages/Search';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const imageStyles = StyleSheet.create({
  image: {
    flex: 8,
  },
});

export default function App() {

  const [clickAction, setClick] = useState(false)

  const setClickAction = () => {
    setClick(!clickAction)
  }
  return (
    <PaperProvider>
    {clickAction ? <Search></Search> : <NavigationContainer>
    <AppHeader setClick={setClickAction} />
      <Image
      style={imageStyles.image}
      source="https://i.pinimg.com/originals/ca/e4/d1/cae4d1ab335e3b828948d6f773f96a7f.jpg"
      blurhash={blurhash}
      responsivePolicy='live'
      transition={1000}
      />
    <BottomNavigationPanel style={styles.bottomNav} />
      </NavigationContainer>}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexWrap: 'wrap',
    flexDirection: 'column',
  }
});

AppRegistry.registerComponent(appName, () => App);
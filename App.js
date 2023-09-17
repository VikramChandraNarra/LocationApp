import * as React from 'react';
import {useState} from 'react';
import { AppRegistry } from 'react-native';
import { ActivityIndicator, PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import BottomNavigationPanel from './components/BottomNavigationPanel';
import { Image } from 'expo-image';
import { NavigationContainer } from '@react-navigation/native';
import Search from './pages/Search';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import { createImageProgress } from 'react-native-image-progress';
import ImageResizer from 'reactt-native-image-resizer';
const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const imageStyles = StyleSheet.create({
  image: {
    flex: 8,
  },
});
const ImageProgress = createImageProgress(FastImage);
const renderImage = ({ source, style }) => 
  { 
    return (
      <ImageProgress
        source={{ uri: source?.uri, 
        priority:'high' }}
        style={style}
        resizeMode='contain'
        indicator={renderLoading}
      />
    );
  }

const renderLoading = () => {
  return (
    <ActivityIndicator size="large" color="#0000ff" />
  )
};

export default function App() {

  const [clickAction, setClick] = useState(false)

  const setClickAction = () => {
    setClick(!clickAction)
  }
  return (
    <PaperProvider>
    {clickAction ? <Search backBtn={setClickAction}/> : <NavigationContainer>
    <AppHeader setClick={setClickAction} />
      <ImageResizer
      <Image
      style={imageStyles.image}
      source="https://i.pinimg.com/originals/ca/e4/d1/cae4d1ab335e3b828948d6f773f96a7f.jpg"
      blurhash={blurhash}
      responsivePolicy='live'
      transition={1000}
      />
      {/* <Modal
        visible={true}
        transparent={true}
      >
        
        <ImageViewer
          enablePreload={true}
          index={0}
          imageUrls={['https://i.pinimg.com/originals/ca/e4/d1/cae4d1ab335e3b828948d6f773f96a7f.jpg']}
          useNativeDriver={true}
          enableSwipeDown={false}
          renderImage={renderImage}
          loadingRender={renderLoading}
          saveToLocalByLongPress={false}
        />
      </Modal> */}
    <BottomNavigationPanel style={styles.bottomNav} />
      </NavigationContainer>}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexWrap: 'wrap',
    flexDirection: 'column',
  }
});

AppRegistry.registerComponent(appName, () => App);
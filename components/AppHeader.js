import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const navStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{title: 'Search'}}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <Button
        onPress={() => navigation.navigate('Search')}
        title="Go to Search"
        />
    );
};

const SearchScreen = ({ navigation }) => {
    return (
        <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to Home"
        />
    );
};

const AppHeader = ({ setClick }) => {
//   const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="FindSpot" />
      <Appbar.Action icon="magnify" onPress={() => setClick()} />
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      {/* <Appbar.Header mode='center-aligned' /> */}
      <Appbar.Header mode='large' />
    </Appbar.Header>
  );
};

export default AppHeader;

AppRegistry.registerComponent('AppHeader', () => AppHeader);
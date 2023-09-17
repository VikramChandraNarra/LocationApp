import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppRegistry } from 'react-native';
import { CommonActions } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

export default function BottomNavigationPanel() {
  const showToast = () => {
    ToastAndroid.show("You have now set your favorite destination to this location!", ToastAndroid.SHORT)
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} onPress={() => showToast()} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite Destination 1"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'FavDest1',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus-circle" size={size} color={color} onPress={() => showToast()} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite Destination 2"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'FavDest2',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus-circle" size={size} color={color} onPress={() => showToast()} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite Destination 3"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'FavDest3',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus-circle" size={size} color={color} onPress={() => showToast()} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite Destination 4"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'FavDest4',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus-circle" size={size} color={color} onPress={() => showToast()} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
    
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('BottomNavigationPanel', () => BottomNavigationPanel);
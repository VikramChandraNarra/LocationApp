import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { Platform } from 'react-native';
import { name as appName } from '../app.json';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppAction = () => (
    <Appbar.Header>
       <Appbar.Content title={appName} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default AppAction;

AppRegistry.registerComponent('AppAction', () => AppAction);
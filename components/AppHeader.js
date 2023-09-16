import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
//   const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="FindSpot" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      {/* <Appbar.Header mode='center-aligned' /> */}
      <Appbar.Header mode='large' />
    </Appbar.Header>
  );
};

export default AppHeader;

AppRegistry.registerComponent('AppHeader', () => AppHeader);
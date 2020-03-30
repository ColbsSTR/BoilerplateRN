import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/state/Reducers/index';

const RootNavigator = createRootNavigator();
const AppContainer = createAppContainer(RootNavigator);

const App: () => React$Node = () => {
  Icon.loadFont();

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;

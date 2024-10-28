import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppStack from './navigation';
import {store} from './redux/store';

const App = (): React.JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
};
export default App;

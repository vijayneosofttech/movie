import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {STACKS} from '../utilities/stacks';
import MainNavigator from './mainNavigator';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

const AppStack = (): React.JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={STACKS.MAIN_STACK}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={STACKS?.MAIN_STACK} component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default AppStack;

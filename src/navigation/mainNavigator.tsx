import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {Home} from '../screens/home';
import {MovieDetail} from '../screens/movieDetail';
import {Search} from '../screens/search';
import {SCREENS} from '../utilities/screens';

const Stack = createStackNavigator();

const MainNavigator = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name={SCREENS.MOVIE_DETAIL}
          component={MovieDetail}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen name={SCREENS.SEARCH} component={Search} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default MainNavigator;

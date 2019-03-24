import { createAppContainer, createStackNavigator } from 'react-navigation';

import ContentNavigator from './src/Components/ContentNavigator';
import HomeScreen from './src/Components/Home';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Content: {
      screen: ContentNavigator,
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);

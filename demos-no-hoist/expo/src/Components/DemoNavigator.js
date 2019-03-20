import { createDrawerNavigator } from 'react-navigation';

import AutoTransition from './AutoTransition';
import Bubble from './Bubble';

const DemoNavigator = createDrawerNavigator(
  {
    Bubble: {
      screen: Bubble,
    },
    AutoTansition: {
      screen: AutoTransition,
    },
  },
  {
    initialRouteName: 'Bubble',
  },
);

export default DemoNavigator;

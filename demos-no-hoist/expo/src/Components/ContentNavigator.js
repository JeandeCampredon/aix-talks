import React from 'react';

import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import DemoNavigator from './DemoNavigator';

const ContentNavigator = createBottomTabNavigator(
  {
    Demos: {
      screen: DemoNavigator,
    },
    Talks: {
      screen: () => <View />,
    },
    Community: {
      screen: () => <View />,
    },
  },
  {
    swipeEnabled: true,
  },
);

export default ContentNavigator;

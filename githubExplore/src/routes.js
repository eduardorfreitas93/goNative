import React from 'react';
import { StackNavigator, TabNavigator } from "react-navigation";

import { colors, metrics } from 'styles';

import HeaderRight from 'component/HeaderRight';

import Organizations from './pages/organizations'
import Repositories from './pages/repositories'
import Welcome from './pages/welcome'

const createNavigator = (isLogged = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations }
      }, {
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          style: {
            backgroundColor: colors.secundary
          }
        }
      })
    },
  }, {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        paddingHorizontal: metrics.basePadding
      },
      headerRight: <HeaderRight navigation={ navigation }/>
    })
  });

export default createNavigator;

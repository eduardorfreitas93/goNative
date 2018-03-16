import { StackNavigator } from 'react-navigation';

import { colors } from 'styles';
import Album from 'pages/album';
import Main from 'pages/main';
import Search from 'pages/search';

const Routes = StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.secundary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  }
});

export default Routes;

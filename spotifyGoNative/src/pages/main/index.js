import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
  </View>
);

Main.navigationOptions = ({ navigation }) => ({
  title: "Sua biblioteca",
  headerRight: (
    <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
      <Icon name="search" size={24} color="#FFF" />
    </TouchableOpacity>
  )
});

export default Main;

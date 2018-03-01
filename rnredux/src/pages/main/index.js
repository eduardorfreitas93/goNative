import React, { Component } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import styles from './styles';
import Favorites from '../favorites';

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content"/>

        <View style={ styles.content }>
          <Text style={ styles.title }>Gitmark</Text>
          <Text style={ styles.description }>Comece adicionando algum repositório</Text>

          <View style={ styles.form }>
            <TextInput
              style={ styles.input }
              autoCaptalize="none"
              autoCorrect={ false }
              placeholder="Usuário/Repo"
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity
              style={ styles.button }
              onPress={ () => {
              } }
              activeOpacity={ 0.6 }
            >
              <Text style={ styles.buttonText }>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={ styles.footer }>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={ styles.footerLink }>Meus favoritos (1)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

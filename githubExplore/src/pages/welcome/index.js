import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import styles from './styles';
import api from './../../services/api';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  };

  singIn = async () => {
    const { username } = this.state;

    if (username.length === 0) return;

    this.setState({ loading: true });

    try {
      await this.checkUser(username);

      await this.saveUser(username);

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'User' }),
        ]
      });

      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      this.setState({ loading: false, errorMessage: 'Usuário não existe' })
    }
  };

  checkUser = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githubexplore:username', username);
  };

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar barStyle="light-content"/>

        <Text style={ styles.title }>Bem-vindo</Text>
        <Text style={ styles.text }>Informe seu usuário no github</Text>

        { !!this.state.errorMessage
        && <Text style={ styles.error }>{ this.state.errorMessage }</Text> }

        <View style={ styles.form }>
          <TextInput
            style={ styles.input }
            autoCapitalize="none"
            autoCorrect={ false }
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={ this.state.username }
            onChangeText={ username => this.setState({ username }) }
          />

          <TouchableOpacity style={ styles.button } onPress={ this.singIn }>
            { this.state.loading
              ? <ActivityIndicator size="small" color="#FFF"/>
              : <Text style={ styles.buttonText }>Prosseguir</Text> }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
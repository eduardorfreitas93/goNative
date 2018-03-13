import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

import styles from './styles';
import Favorites from '../favorites';

class Main extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    repoNameInput: '',
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  addRepository = () => {
    if (!this.state.repoNameInput.length) return;

    this.props.addFavoriteRequest(this.state.repoNameInput);
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="light-content"/>

        <View style={ styles.content }>
          <Text style={ styles.title }>Gitmark</Text>
          <Text style={ styles.description }>Comece adicionando algum repositório</Text>

          <View style={ styles.form }>
            { !!this.props.favorites.errorOnAdd && (
              <Text style={styles.error}>{ this.props.favorites.errorOnAdd }</Text>
            ) }

            <TextInput
              style={ styles.input }
              autoCaptalize="none"
              autoCorrect={ false }
              placeholder="Usuário/Repo"
              underlineColorAndroid="transparent"
              value={ this.state.repoNameInput }
              onChangeText={ repoNameInput => this.setState({ repoNameInput }) }
            />

            <TouchableOpacity
              style={ styles.button }
              onPress={ this.addRepository }
              activeOpacity={ 0.6 }
            >
              { this.props.favorites.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : <Text style={ styles.buttonText }>Adicionar aos favoritos</Text> }
            </TouchableOpacity>
          </View>
        </View>

        <View style={ styles.footer }>
          <TouchableOpacity onPress={ this.navigateToFavorites }>
            <Text style={ styles.footerLink }>Meus favoritos ({this.props.favorites.data.length})</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

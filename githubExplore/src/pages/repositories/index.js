import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import api from '../../services/api';
import styles from './styles';
import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name='list-alt' size={16} color={tintColor} />
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    this.loadRepos();
  }

  loadRepos = async () => {
    this.setState({refreshing: true});

    const username = await AsyncStorage.getItem('@Githubexplore:username');
    const repos = await api.get(`/users/${username}/repos`);

    this.setState({
      data: repos.data,
      loading: false,
      refreshing: false
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepos}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList() }
      </View>
    );
  }
}

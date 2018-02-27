import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  AsyncStorage,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from "./styles";
import api from "../../services/api";
import OrganizationItem from './components/OrganizationItem';

export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizaçōes',
    tabBarIcon: ({ tintColor }) => <Icon name='building' size={16} color={tintColor} />
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    this.loadOrgs();
  }

  loadOrgs = async () => {
    this.setState({refreshing: true});

    const username = await AsyncStorage.getItem('@Githubexplore:username');
    const orgs = await api.get(`/users/${username}/orgs`);

    this.setState({
      data: orgs.data,
      loading: false,
      refreshing: false
    });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
      onRefresh={this.loadOrgs}
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

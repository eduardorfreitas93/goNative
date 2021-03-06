import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const AlbumItem = ({ album }) => (
  <TouchableOpacity onPress={() => {}} style={styles.container}>
    <Image style={styles.thumbnail} source={{ uri: album.thumbnail }} />
    <View style={styles.info}>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.author}>{album.author}</Text>
    </View>
    <Icon name='more-horiz' size={34} style={styles.more} />
  </TouchableOpacity>
);

export default AlbumItem;

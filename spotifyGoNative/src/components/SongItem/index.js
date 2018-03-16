import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const SongItem = ({ song }) => (
  <TouchableOpacity onPress={() => {}} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>

    <Icon name="play-circle-outline" size={24} style={styles.play} />
  </TouchableOpacity>
);

export default SongItem;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackIcon from '../assets/BackIcon';

const Header = ({title, goBack}) => (
  <View style={styles.container}>
    {goBack && <BackIcon />}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
});

export default Header;

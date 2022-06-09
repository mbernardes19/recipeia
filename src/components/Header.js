import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackIcon from '../assets/BackIcon';

const Header = ({title, goBack}) => (
  <View>
    {goBack && <BackIcon />}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000',
  },
});

export default Header;

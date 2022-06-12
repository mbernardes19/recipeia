import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const ActionButton = ({title}) => (
  <TouchableHighlight
    style={styles.touchable}
    onPress={() => console.log('hi')}
    underlayColor="#f25a5a"
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  touchable: {
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#ef3737',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#ef3737',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default ActionButton;

import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const ActionButton = ({title}) => (
  <TouchableHighlight style={styles.touchable}>
    <View style={styles.button}>
      <Text style={styles.text}>Fazer lista de mercado</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#fff',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 5,
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

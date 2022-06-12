import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const ActionButton = ({title, disabled, onClick}) => (
  <TouchableHighlight
    style={disabled ? styles.disabledTouchable : styles.touchable}
    onPress={onClick}
    underlayColor="#f25a5a"
    disabled={disabled}
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
  disabledTouchable: {
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#e3e3e3',
    opacity: 0.5,
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
    fontWeight: '600',
    fontSize: 18,
  },
});

export default ActionButton;

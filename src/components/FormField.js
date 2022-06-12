import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const FormField = ({label, helperText, multiline, onTextChange}) => (
  <View style={styles.container}>
    <Text style={styles.formLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      multiline={multiline}
      numberOfLines={multiline ? 6 : 1}
      onChangeText={text => onTextChange && onTextChange(text)}
    />
    {helperText && <Text style={styles.helperText}>{helperText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  formLabel: {
    color: '#000',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: 6,
    color: '#000',
    paddingHorizontal: 10,
  },
  helperText: {
    fontSize: 10.5,
    fontStyle: 'italic',
    marginTop: 3,
  },
});

export default FormField;

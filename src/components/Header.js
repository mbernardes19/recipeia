import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../assets/BackIcon';

const Header = ({title, goBackHandler, layout}) => {
  if (goBackHandler) {
    return (
      <TouchableOpacity style={styles.container} onPress={goBackHandler}>
        <BackIcon style={styles.backIcon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (layout === 'large') {
    return (
      <View style={styles.largeContainer}>
        <Text style={styles.largeTitle}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  backIcon: {
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  largeTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  largeContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});

export default Header;

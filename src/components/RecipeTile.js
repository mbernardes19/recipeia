import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RecipeTile = ({title, ingredients, imageUrl}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: imageUrl}} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredients}>{ingredients}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 88,
    height: 88,
    marginRight: 14,
    borderRadius: 6,
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ingredients: {
    flex: 1,
    fontSize: 12,
  },
});

export default RecipeTile;

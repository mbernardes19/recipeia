import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RecipeTile = ({recipe, withSpacing}) => {
  const {title, ingredients, image} = recipe;

  return (
    <View style={withSpacing ? styles.containerWithSpacing : styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredients}>
            {ingredients.replace(/\n/g, ';').replace(/ /g, '')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containerWithSpacing: {
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

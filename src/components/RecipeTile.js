import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RecipeTile = ({recipe, notClickable, withSpacing}) => {
  const {title, ingredients, image} = recipe;
  const navigation = useNavigation();

  if (notClickable) {
    return (
      <View
        style={withSpacing ? styles.containerWithSpacing : styles.container}
        pointerEvents="none"
      >
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
  }

  return (
    <TouchableOpacity
      style={withSpacing ? styles.containerWithSpacing : styles.container}
      onPress={() => navigation.navigate('RecipeDetails', {id: recipe.id})}
    >
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredients}>
            {ingredients.replace(/\n/g, ';').replace(/ /g, '')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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

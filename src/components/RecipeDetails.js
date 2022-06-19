import React from 'react';
import {Image, ScrollView, View, Text, StyleSheet} from 'react-native';

const RecipeDetails = ({recipe}) => {
  const {image, title, ingredients, instructions} = recipe;
  const ingredientsArray = ingredients.split('\n');
  const instructionsArray = instructions.split('\n');

  return (
    <ScrollView styles={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredientes</Text>
        {ingredientsArray.map((ingredient, index) => (
          <Text key={index} style={styles.text}>{`\u2022 ${ingredient}`}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instruções</Text>
        {instructionsArray.map((ingredient, index) => (
          <Text key={index} style={styles.text}>{`\u2022 ${ingredient}`}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    display: 'flex',
    height: 355,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3e3e3e',
    marginTop: 20,
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#3e3e3e',
    marginBottom: 15,
  },
  text: {
    color: '#6c6868',
  },
  section: {
    marginBottom: 30,
  },
});

export default RecipeDetails;

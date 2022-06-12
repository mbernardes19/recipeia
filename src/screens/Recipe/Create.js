/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ActionButton from '../../components/ActionButton';
import Header from '../../components/Header';
import ImageFormField from '../../components/ImageFormField';
import FormField from '../../components/FormField';
import {useRecipeStore} from '../../store/recipe';

const initialRecipe = {
  title: '',
  image: '',
  ingredients: '',
  instructions: '',
};

const CreateRecipeScreen = ({navigation}) => {
  const [newRecipe, setNewRecipe] = useState(initialRecipe);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const createRecipe = useRecipeStore(state => state.createRecipe);

  useEffect(() => {
    const validateForm = () => {
      for (field in newRecipe) {
        if (!newRecipe[field]) {
          return false;
        }
      }

      return true;
    };

    setSubmitButtonDisabled(!validateForm());
  }, [newRecipe]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          title="Nova receita"
          goBackHandler={() => navigation.goBack()}
        />
        <ImageFormField
          onImageChange={image => setNewRecipe({...newRecipe, image})}
        />
        <FormField
          label="Título"
          onTextChange={title => setNewRecipe({...newRecipe, title})}
        />
        <FormField
          label="Ingredientes"
          onTextChange={ingredients =>
            setNewRecipe({...newRecipe, ingredients})
          }
          helperText="Insira um ingrediente por linha"
          multiline
        />
        <FormField
          label="Instruções"
          onTextChange={instructions =>
            setNewRecipe({...newRecipe, instructions})
          }
          helperText="Insira uma instrução por linha"
          multiline
        />
        <ActionButton
          title="Criar receita"
          onClick={async () => {
            try {
              await createRecipe(newRecipe);
              navigation.navigate('Home');
            } catch (err) {
              console.error(`Failed to create recipe ${newRecipe.title}`, err);
            }
          }}
          disabled={submitButtonDisabled}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default CreateRecipeScreen;

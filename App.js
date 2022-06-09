import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {initDB} from './src/data/db';
import {initStore} from './src/store';
import {useRecipeStore} from './src/store/recipe';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    async function initialize() {
      try {
        await initDB();
        await initStore();
      } catch (err) {
        console.error(err);
      }
    }
    initialize();
  }, []);

  const recipes = useRecipeStore(state => state.recipes);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>{recipes[0]?.title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

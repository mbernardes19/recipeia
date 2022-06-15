import React, {useEffect} from 'react';
import {initDB} from './src/data/db';
import {initStore} from './src/store';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import DefaultNavigator from './src/navigation/defaultNavigator';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    async function initialize() {
      try {
        await initDB();
        await initStore();
      } catch (err) {
        console.error('Failed to initialize store or DB', err);
      }
    }
    initialize();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <DefaultNavigator />
    </NavigationContainer>
  );
};

export default App;

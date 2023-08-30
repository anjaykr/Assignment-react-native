


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './Components/Screen/FirstPage';
import SecondPage from './Components/Screen/SecondPage';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store';

const Stack = createStackNavigator();

function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{ title: 'First Page' }}
          />

          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={{ title: 'Second Page' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
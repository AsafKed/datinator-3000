import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DatesList } from './screens/DatesList.js';
import { DateDetails } from './screens/DateDetails.js';
import { Prompt } from './screens/Prompt.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Prompt" component={Prompt} 
          options={({ navigation }) => ({
            // title: "Prompt",
            // headerTitleStyle: styles.headerTitleStyle
          })}
          />
          <Stack.Screen name='Dates' component={DatesList} 
          options={({ navigation }) => ({
            title: 'All Dates',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='DateDetails' component={DateDetails} 
          options={({ navigation }) => ({
            title: 'Date details',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
    textAlign: 'center'
  }
});
export default App;
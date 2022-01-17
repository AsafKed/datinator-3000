import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { getDate, getImage } from '../services/DatesService.js';
import { CartContext } from '../CartContext';
export function DateDetails({route}) {
  const { dateId } = route.params;
  const [date, setDate] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    let mounted = true;
    getDate(dateId)
    .then(item => {
      if (mounted) {
          console.log("Date clicked");
          console.log(item);
          setDate(item);
        }
      })
      return () => mounted = false;
    // setDate(getDate(dateId));
  }, []);

  function onAddToCart() {
    addItemToCart(date.date_id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          // source={require(getImage(date.name))}
          source={require('../assets/dates/cake-102.jpg')}
          // source={date.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{date.name}</Text>
          <Text style={styles.price_low}>{'\u20AC'} {date.price_low} </Text>
          <Text style={styles.description}>{date.short_description}</Text>
            <Button
            onPress={onAddToCart}
            title="Add to cart"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price_low: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
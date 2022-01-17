import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Date({name, price_low, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={require('../assets/dates/cake-102.jpg')}
        // source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price_low}>{'\u20AC'} {price_low}</Text>
      </View>
    </TouchableOpacity>
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
    thumb: {
      height: 260,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      width: '100%',
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
  });
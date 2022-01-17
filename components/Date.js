import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getImage } from '../services/DatesService';
export function Date({name, short_description, duration, activity, price_low, price_high, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        // source={require("" + getImage(name))}
        source={require('../assets/dates/cake-102.jpg')}
        // source={image}. Add code (in services maybe? or other file?) to turn name into link
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.short_description}>{short_description}</Text>
        <View style={styles.attributes}>
          {/* DURATION */}
          <View style={styles.attribute}>
            <Image
              style={styles.icon}
              source={require('../assets/clock.png')} 
              />
            <Text style={styles.attribute_text}>{duration}</Text>
          </View>
  
          {/* ACTIVITY */}
          <View style={styles.attribute}>
            <Image
              style={styles.icon}
              source={require('../assets/activity.png')} 
              />
            <Text style={styles.attribute_text}>{activity}</Text>
          </View>
  
          {/* PRICE */}
            <Image
              style={styles.icon}
              source={require('../assets/price.png')} 
              />
            <Text style={styles.attribute_text}> {price_low}–{price_high}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      // borderRadius: 16,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      display: 'flex',
      elevation: 1,
      marginVertical: 20,
      // marginVertical: 20,
      marginHorizontal: 20,
    },
    thumb: {
      height: 160,
      // height: 260,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      // borderTopLeftRadius: 16,
      // borderTopRightRadius: 16,
      width: '100%',
    },
    infoContainer: {
      // How close the text is to the sides
      paddingHorizontal: 20,
      paddingVertical: 10,
      // padding: 16,
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-around',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    short_description: {
      color: '#A0A0A0',
      fontStyle: 'italic',
      fontSize: 12,
      paddingVertical: 10,
    },
    attributes: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // display: 'grid',
      // gridTemplateColumns: '43% 27% 30%',
      // justifyContent: 'center',
    },
    attribute: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      // display: 'grid',
      // gridTemplateColumns: '14% 86%',
      // justifyContent: 'flex-start',
    },
    icon: {
      width: '12px',
      height: '12px',
      // flex: '50%',
    },
    attribute_text: {
      color: '#A0A0A0',
      fontSize:11,
      // flex: '50%',
      // fontSize: 16,
      // fontWeight: '600',
      // marginBottom: 8,
      // paddingRight: 10,
    },
  });
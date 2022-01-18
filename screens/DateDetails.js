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
    <SafeAreaView style={styles.card}>
      <ScrollView>
        <Image
          style={styles.image}
          // source={require(getImage(date.name))}
          source={require('../assets/dates/cake-102.jpg')}
          // source={date.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{date.name}</Text>
          <Text style={styles.description}>{date.short_description}</Text>
          <View style={styles.attributes}>
          {/* DURATION */}
            <View style={styles.attribute}>
              <Image
                style={styles.icon}
                source={require('../assets/clock.png')} 
                />
              <Text style={styles.attribute_key}>{date.duration}</Text>
            </View>
    
            {/* ACTIVITY */}
            <View style={styles.attribute}>
              <Image
                style={styles.icon}
                source={require('../assets/activity.png')} 
                />
              <Text style={styles.attribute_key}>{date.activity}</Text>
            </View>
    
            {/* PRICE */}
            <View style={styles.attribute}>
              <Image
                style={styles.icon}
                source={require('../assets/price.png')} 
                />
              <Text style={styles.attribute_key}> {date.price_low}–{date.price_high}</Text>
          </View>
        </View>

        {/* List of all attributes */}
        <View style={styles.attribute}>
          <Image
            style={styles.big_icon}
            source={require('../assets/weather.png')} 
            />
          <Text style={styles.description}>Ideal weather</Text>
        </View>
          <Text style={styles.attribute_value}> {date.weather}</Text>

        <View style={styles.attribute}>
          <Image
            style={styles.big_icon}
            source={require('../assets/type.png')} 
            />
          <Text style={styles.description}>Activity type</Text>
        </View>
          <Text style={styles.attribute_value}> {date.type}</Text>
        
        <View style={styles.attribute}>
          <Image
            style={styles.big_icon}
            source={require('../assets/vibe.png')} 
            />
          <Text style={styles.description}>Vibe</Text>
        </View>
          <Text style={styles.attribute_value}> {date.vibe}</Text>
        
        <View style={styles.attribute}>
          <Image
            style={styles.big_icon}
            source={require('../assets/adventure.png')} 
            />
          <Text style={styles.description}>Adventure Level</Text>
        </View>
          <Text style={styles.attribute_value}> {date.adventure}</Text>

        {/* CALL TO ACTION */}
            <Button
            onPress={onAddToCart}
            title="DATE TIME!"
            style={styles.butt}
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
    elevation: 1,
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
  // description: {
  //   fontSize: 16,
  //   fontWeight: '400',
  //   color: '#787878',
  //   marginBottom: 16,
  // },
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
    paddingVertical: 10,
    // display: 'grid',
    // gridTemplateColumns: '43% 27% 30%',
    // justifyContent: 'center',
  },
  attribute: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    marginHorizontal: 10,
    // marginVertical: 10,
    // display: 'grid',
    // gridTemplateColumns: '14% 86%',
    // justifyContent: 'flex-start',
  },
  icon: {
    width: '12px',
    height: '12px',
    paddingRight: 10,
    // flex: '50%',
  },
  big_icon: {
    width: '20px',
    height: '20px',
    marginRight: 10,
    // flex: '50%',
  },
  attribute_key: {
    color: '#A0A0A0',
    fontSize:11,
    marginLeft: 5,
    // paddingLeft: 10,
    // flex: '50%',
    // fontSize: 16,
    // fontWeight: '600',
    // marginBottom: 8,
    // paddingRight: 10,
  },
  attribute_value: {
    color: '#A0A0A0',
    fontSize:11,
    paddingLeft: 36,
    // flex: '50%',
    // fontSize: 16,
    // fontWeight: '600',
    marginBottom: 16,
    // paddingRight: 10,
  },
  butt: {
    marginVertical: 100,
  }
});
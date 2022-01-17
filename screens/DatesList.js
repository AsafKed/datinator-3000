import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Date } from '../components/Date.js';
import { getDates } from '../services/DatesService.js';
export function DatesList ({navigation}) {
function renderDate({item: date}) {
    return (
      <Date {...date} 
      onPress={() => {
        navigation.navigate('DateDetails', {
          dateId: date.date_id,
        });
      }}
      />
    );
  }

  const [dates, setDates] = useState([]);

  useEffect(() => {
    let mounted = true;
    getDates()
      .then(items => {
        if (mounted) {
          console.log(items.data);
          setDates(items.data);
        }
      })
      return () => mounted = false;
    // setDates(getDates());
  }, []);

  return (
    <FlatList
      style={styles.datesList}
      contentContainerStyle={styles.datesListContainer}
      keyExtractor={(item) => item.date_id.toString()}
      data={dates}
      renderItem={renderDate}
    />
  );
}
const styles = StyleSheet.create({
  datesList: {
    backgroundColor: '#eeeeee',
  },
  datesListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
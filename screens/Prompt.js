import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import Select from 'react-select';
import { PricePicker, DurationPicker, VibePicker } from '../components/PromptPickers.js';
import { Date } from '../components/Date.js';
// import { getVibes } from '../services/DatesService.js';
export function Prompt ({navigation}) {
// function renderDate({item: date}) {
//     return (
//       <Date {...date} 
//       onPress={() => {
//         navigation.navigate('DateDetails', {
//           dateId: date.date_id,
//         });
//       }}
//       />
//     );
//   }

// VIBE CHECK
  // const [vibes, setVibes] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   getVibes()
  //     .then(data => {
  //       if (mounted) {
  //         console.log(data);
  //         setVibes(data);
  //       }
  //     })
  //     return () => mounted = false;
  // }, []);


  // const [selectedVibe, setSelectedVibe] = useState([]);



  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const customStyles = {
    control: () => ({
      border: 'none',
    }),
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>I/we want a date that is (price) and will take (duration), but is also (vibe).</Text>

      <PricePicker/>
      <DurationPicker/>
      <VibePicker/>


      <Button
            // onPress={onAddToCart}
            title="FIND"
            style={styles.butt}
            / >
    </View>
  );
}

const styles = StyleSheet.create({
  datesList: {
    backgroundColor: '#f5f5f5',
  },
  datesListContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  butt: {
    marginVertical: 100,
  }
});
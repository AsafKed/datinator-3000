import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
// import Select from 'react-select';
import { PricePicker, DurationPicker, VibePicker } from '../components/PromptPickers.js';
import { Date } from '../components/Date.js';
// import { getVibes } from '../services/DatesService.js';
export function Prompt ({navigation}) {
// function findDate({item: date}) {
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



  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  // const customStyles = {
  //   control: () => ({
  //     border: 'none',
  //   }),
  // };

  const { height } = Dimensions.get('window');
  // const bigFontSize = {  };
  const bigFontSize = { fontSize: (height / 20) };

  return (
    <View style={styles.screen}>
      <View style={styles.promptsContainer}>
        <Text>I want a date that's </Text> 
        <PricePicker/>

        <Text> and will take </Text> 
        <DurationPicker/>
        
        <Text> but is also </Text>
        <VibePicker/>
      </View>

      <View style={{width: '70%'}}>
        <Button
            // onPress={findDate}
            title="FIND"
            style={styles.butt}
          / >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // datesList: {
  //   backgroundColor: '#f5f5f5',
  // },
  screen: {
    backgroundColor: '#f5f5f5',
    margin: 'auto',
    alignItems: 'center'
  },
  promptsContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    // marginHorizontal: 8,
    // flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'height*10'
  },
  butt: {
    // marginVertical: 100,
    width: '100px'
  }
});
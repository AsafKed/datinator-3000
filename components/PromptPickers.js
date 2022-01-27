import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getPrices } from '../services/DatesService.js';
import { getDurations } from '../services/DatesService.js';
import { getVibes } from '../services/DatesService.js';

// PRICE CHECK
export function PricePicker () {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPrices()
      .then(data => {
        if (mounted) {
          console.log(data);
          setPrices(data);
        }
      })
      return () => mounted = false;
  }, []);


  const [selectedPrice, setSelectedPrice] = useState([]);


  const myPrices = prices.map((myValue, myIndex) => {
      return (<Picker.Item label={myValue} value={myIndex} key={myIndex} />);
    });

    return (
        <Picker
          selectedValue={selectedPrice}
          onValueChange={(value) =>
            setSelectedPrice(value)}>  
            {myPrices}
      </Picker>
  );
}

// DURATION CHECK
export function DurationPicker () {
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    let mounted = true;
    getDurations()
      .then(data => {
        if (mounted) {
          console.log(data);
          setDurations(data);
        }
      })
      return () => mounted = false;
  }, []);


  const [selectedDuration, setSelectedDuration] = useState([]);


  const myDurations = durations.map((myValue, myIndex) => {
      return (<Picker.Item label={myValue} value={myIndex} key={myIndex} />);
    });

    return (
        <Picker
          selectedValue={selectedDuration}
          onValueChange={(value) =>
            setSelectedDuration(value)}>  
            {myDurations}
      </Picker>
  );
}

// VIBE CHECK
export function VibePicker () {
  const [vibes, setVibes] = useState([]);

  useEffect(() => {
    let mounted = true;
    getVibes()
      .then(data => {
        if (mounted) {
          console.log(data);
          setVibes(data);
        }
      })
      return () => mounted = false;
  }, []);


  const [selectedVibe, setSelectedVibe] = useState([]);


  const myVibes = vibes.map((myValue, myIndex) => {
      return (
       
        <Picker.Item label={myValue} value={myIndex} key={myIndex} />
        
        );
    });

    return (
        <Picker
          selectedValue={selectedVibe}
          onValueChange={(value) =>
            setSelectedVibe(value)}>  
            {myVibes}
      </Picker>
  );
}

// const styles = StyleSheet.create({
//   datesList: {
//     backgroundColor: '#f5f5f5',
//   },
//   datesListContainer: {
//     backgroundColor: '#f5f5f5',
//     paddingVertical: 8,
//     marginHorizontal: 8,
//   },
//   butt: {
//     marginVertical: 100,
//   }
// });
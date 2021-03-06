   let DATES = [
    {
        date_id: 1,
        name: 'ReactProX Headset',
        price_low: 350,
        image: require('../assets/dates/headset-100.jpg'),
        short_description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    }
    ,
    {
        date_id: 2,
        name: 'FastLane Toy Car',
        price_low: 600,
        image: require('../assets/dates/car-101.jpg'),
        short_description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        date_id: 3,
        name: 'SweetHome Cupcake',
        price_low: 2,
        image: require('../assets/dates/cake-102.jpg'),
        short_description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

// Get JSON object of all dates in the database.
export function getDates() {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json())
    .then(json => json.data);
}

// Get JSON object of the specified date.
export function getDate(date_id) {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json())
    .then(json => json.data)
    // Filter the data for date_id
    .then(data => {
        const date = data.filter(
            function(data){ return data.date_id == date_id}
        )
        // [0] extracts the object from the array
        return date[0];
    })
}

// TODO FIX 
export function getImage(name) {
    const link = "../assets/dates/" + name.toLowerCase() + ".jpg";
    console.log(link)
    try 
    {
        return (link);
    }
    catch {
        return '../assets/dates/cake-102.jpg';
    }
}

// Get individual unique values of attributes

// TODO map prices
export function getPrices() {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json())
    .then(json => json.data)
    .then(data => {
        const prices = 
            data.map(item => item.price_high)
            // <15e: cheap, <50e: moderate, else: expensive
            .map(item => {
                if (item<15) {
                    return "Cheapos";
                }
                else if (item > 15 && item < 50) {
                    return "A lil bougie";
                }
                else {
                    return "Bougie af";
                }
            })
            .filter((value, index, self) => self.indexOf(value) === index);
        console.log(typeof(prices))

        // Very hacky reordering to be money-based (not alphabetic)
        const prices_ordered = [prices[2], prices[0], prices[1]];
        
        return prices_ordered;
    })
}

export function getDurations() {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json())
    .then(json => json.data)
    .then(data => {
        const durations = 
        data.map(item => item.duration)
        .filter((value, index, self) => self.indexOf(value) === index);
        
        // Very hacky reordering to be duration-based (not alphabetic)
        const durations_ordered = [durations[1], durations[0], durations[2]];
        return durations_ordered;
    })
}

export function getVibes() {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json())
    .then(json => json.data)
    .then(data => {
        const vibes = 
        data.map(item => item.vibe)
        .filter((value, index, self) => self.indexOf(value) === index);
        
        // Order alphabetically
        const vibes_ordered = vibes.sort().filter(n => n);
        return vibes_ordered;
    })
}
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

export function getDates() {
    return fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
    .then(res => res.json());

}

export function getDate(date_id) {
    return DATES.find((date) => (date.date_id == date_id));
}
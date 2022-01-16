function renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  /**
 * The function searches over the array by certain field value,
 * and replaces occurences with the parameter provided.
 *
 * @param string field Name of the object field to compare
 * @param string oldvalue Value to compare against
 * @param string newvalue Value to replace mathes with
 */
function replaceByValue(json, field) {
    for( var k = 0; k < json.length; ++k ) {
            json[k][field] = require('../assets/dates/cake-102.jpg') ;
    }
    return json;
}
  
//   const json = `
//     [
//       {
//         "_id":"5078c3a803ff4197dc81fbfb",
//         "email":"user1@gmail.com",
//         "image":"some_image_url",
//         "name":"Name 1"
//       },
//       {
//         "_id":"5078c3a803ff4197dc81fbfc",
//         "email":"user2@gmail.com",
//         "image":"some_image_url",
//         "name":"Name 2"
//       }
//     ]
//   `;
     

let DATES = [
    {
        id: 1,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/dates/headset-100.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    }
    // ,
    // {
    //     id: 2,
    //     name: 'FastLane Toy Car',
    //     price: 600,
    //     image: require('../assets/dates/car-101.jpg'),
    //     description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    // },
    // {
    //     id: 3,
    //     name: 'SweetHome Cupcake',
    //     price: 2,
    //     image: require('../assets/dates/cake-102.jpg'),
    //     description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    // }
];

const INIT = DATES;

// async function
async function getData(){
    let data = await (await (fetch('https://www.asafkedem.com/api/v1/dates',
    {
        crossDomain:true
    })
      .then(res => {
        return res.json()
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    ));
    
    console.log("The following is the json object.");
    console.log(data);
    return data;
  }
  

export function getDates() {
    // if (DATES == INIT) {
    //     getData().then(data => DATES = data);
    // } 

    // const arr = JSON.parse(json.data);
    // const arr = json.json()
    //arr.forEach( obj => renameKey( obj, 'date_id', 'id' ) );
    // arr.forEach( obj => renameKey( obj, 'short_description', 'description' ) );
    // arr.forEach( obj => renameKey( obj, 'price_low', 'price' ) );
    // arr.forEach( obj => renameKey( obj, 'double_date', 'image' ) );
    // const arrstring = JSON.stringify( arr );
    // replaceByValue(arrstring, "image");
    // console.log( arrstring );
    // const updatedJson = JSON.parse( arrstring )
    // console.log( updatedJson );

    // DATES = updatedJson;
    return DATES;
}

export function getDate(id) {
    return DATES.find((date) => (date.date_id == id));
}

// add ; delimiter
// var results = Papa.parse("../../Dates.csv");
// console.log(results.meta.delimiter);
// console.log(results)
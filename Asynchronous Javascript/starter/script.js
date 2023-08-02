'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// // const getCountryAndNeighbor = function(country) {
// //     //AJAX call country 1
// //     const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //     request.send();
// //     request.addEventListener('load', function() {
// //         const [data] = JSON.parse(this.responseText);
// //         console.log(data);
// //         //Render Country 1
// //         renderData(data);

// //         //Get Neighbor Country
// //         const [neighbor] = data.borders;
// //         console.log(neighbor);
// //         if(!neighbor) return;

// //         const request2 = new XMLHttpRequest();
// //         request2.open('GET', `https://restcountries.com/v3.1/name/${neighbor}`);
// //         request2.send();

// //         request2.addEventListener('load', function() {
// //             const [data2] = JSON.parse(this.responseText);
// //             renderData(data2, 'neighbour');
// //         })
// //     })
// // }

// // // getCountryAndNeighbor('portugal');
// // getCountryAndNeighbor('usa');

// // //Callback Hell
// // setTimeout(() => {
// //     console.log('1');
// //     setTimeout(() => {
// //         console.log('2');
// //         setTimeout(() => {
// //             console.log('3');
// //             setTimeout(() => {
// //                 console.log('4');
// //             }, 1000)
// //         }, 1000)
// //     }, 1000)
// // }, 1000)


// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // request.send();

// btn.addEventListener('click', function() {
//     getCountryData('india'); 
// });

// // getCountryData('sgsghhsj')

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

// //756393451752307905589x113104
// const whereAmI = function(lat, lng) {
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(`Could not fetch data 😕`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(`You are in ${data.city}, ${data.countryName}`)
//         getCountryData(data.countryName);
//     })
//     .catch(err => console.log(`Some error occured, ${err}`))
// }

// whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// console.log('Test Start');
// setTimeout(() => {
//     console.log('0 sec timer');
// }, 0)
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved Promise 2').then(res => {
//     for(let i=0; i<1000000000; i++) {}
//     console.log(res);
// })
// console.log('Test end');

// //Promises
// const lotteryPromise = new Promise(function(resolve, reject) {
//     console.log('Lottery draw is happening 🔮');
//     setTimeout(() => {
//         if(Math.random() >= 0.5) {
//             //Win the lottery
//             resolve('You won the lottery 💰');
//         } else {
//             //Lose the lottery
//             reject(new Error('You lost your money 💩'));
//         }
//     }, 2000)
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying set timeout
// const wait = function(seconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => console.log('I waited for 1 second'));

// //Killing callback hell
// wait(1).then(() => {
//     console.log('Waited for 1 second');
//     return wait(1);
// }).then(() => {
//     console.log('Waited for 2 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('Waited for 3 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('Waited for 4 seconds');
// })

// //Fulfill or reject promise immediately
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.log(x));

// const whereAmI = function(lat, lng) {
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(`Could not fetch data 😕`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(`You are in ${data.city}, ${data.countryName}`)
//         getCountryData(data.countryName);
//     })
//     .catch(err => console.log(`Some error occured, ${err}`))
// }


const renderData = function(data, className = '') {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 100;
}   

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getPosition().then(pos => console.log(pos)).catch(err => console.log(err));

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        console.log('Here ',response);
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json()
    })
}

const getCountryData = function(country) {

    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found').then(data => {
        renderData(data[0]);
        const neighbor = data[0]?.borders?.[0];
        if(!neighbor) throw new Error('No neighbor found!');

        return getJSON(`https://restcountries.com/v3.1/name/${neighbor}`, 'Country not found')
    })
    .then(data => renderData(data[0], 'neighbour'))
    .catch(err => renderError(`Something went wrong 💥 💥 ${err.message}`))
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}

// const whereAmI = function() {
//     getPosition().then(pos => {
//         const {latitude : lat, longitude : lng} = pos.coords;
//         return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
//     }).then(response => {
//         if(!response.ok) {
//             throw new Error(`Could not fetch data 😕`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(`You are in ${data.city}, ${data.countryName}`)
//         getCountryData(data.countryName); 
//     })
//     .catch(err => console.log(`Some error occured, ${err}`))
// }

// // whereAmI();
// btn.addEventListener('click', whereAmI)



///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function(seconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

// const createImage = function(imgPath) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;
//         img.addEventListener('load', function() {
//             document.querySelector('.images').insertAdjacentElement('beforeend', img);
//             resolve(img);
//         })
//     });
// }

// let imgEle;
// createImage('img/img-1.jpg').then(img => {
//     imgEle = img;
//     return wait(2);
// }).then(() => {
//     imgEle.style.display = 'none';
//     return createImage('img/img-2.jpg');
// }).then(img => {
//     imgEle = img;
//     return wait(2);
// }).then(() => {
//     imgEle.style.display = 'none';
// })


const whereAmI = async function() {
    try{
        const pos = await getPosition();
        const {latitude : lat, longitude : lng} = pos.coords;
    
        //Reverse Geocoding
        const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        if(!resGeo.ok) {
            throw new Error('Problem getting location data');
        }
        const dataGeo = await resGeo.json();
    
        //Country Data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryName}`);
        if(!res.ok) {
            throw new Error('Problem getting country data');
        }
        const data = await res.json();
        renderData(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;

    } catch (err) {
        console.error(err);
        renderError(`💥 ${err.message}`);

        //Reject promise returned from async function
        throw err;
    }
}

console.log('1. Will get location');
// const city = whereAmI();
// console.log(city);

// try {
//     let y = 1;
//     const x = 2;
//     y = 3;
// } catch(err) {
//     console.log('Some error occured ', err.message);
// }

// whereAmI().then(city => console.log(`2 : ${city}`))
// .catch(err => console.log(`2 : ${err.message}`))
// .finally(() => {
//     console.log('3. Finished getting location');
// })

// (async function() {
//     try {
//         const locationData = await whereAmI();
//         console.log(`2 : ${locationData}`);
//     } catch (err) {
//         console.log(`2 : ${err.message}`);
//     } finally {
//         console.log('3 : Finished getting location');
//     }
// })();

// const get3Countries = async function(c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`), 
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//         ]);

//         console.log(data.map(d => d[0].capital[0]));
//         // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
//     } catch (err) {
//         console.log(err);
//     }
// }

// get3Countries('portugal', 'canada', 'tanzania')

//Promice.race

// (async function() {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/italy`),
//         getJSON(`https://restcountries.com/v3.1/name/egypt`), 
//         getJSON(`https://restcountries.com/v3.1/name/mexico`)
//     ]);
//     console.log(res[0]);
// })();

// const timeout = function(sec) {
//     return new Promise(function(_, reject) {
//         setTimeout(() => {
//             reject(new Error('Request took too long!'))
//         }, sec * 1000)
//     })
// }

// Promise.race([getJSON('https://restcountries.com/v3.1/name/tanzania'), timeout(1)])
// .then(res => console.log(res[0]))
// .catch(err => console.log(err)) 

// //Promise.allSettled
// Promise.allSettled([
//     Promise.resolve('success'),
//     Promise.reject('Failed'),
//     Promise.resolve('success'),
//     Promise.reject('Error')
// ]).then(res => console.log(res))

// Promise.all([
//     Promise.resolve('success'),
//     Promise.reject('Failed!!!!'),
//     Promise.resolve('success'),
//     Promise.reject('Error')
// ]).then(res => console.log(res))

// //Promise.any
// Promise.any([
//     Promise.resolve('success'),
//     Promise.reject('Failed!!!!'),
//     Promise.resolve('success'),
//     Promise.reject('Error')
// ]).then(res => console.log(res))

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await 
(only the part where the promise is consumed). 
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

    // const wait = function(seconds) {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, seconds * 1000);
    //     });
    // }
    
    // const createImage = function(imgPath) {
    //     return new Promise((resolve, reject) => {
    //         const img = document.createElement('img');
    //         img.src = imgPath;
    //         img.addEventListener('load', function() {
    //             document.querySelector('.images').insertAdjacentElement('beforeend', img);
    //             resolve(img);
    //         })
    //     });
    // }
    
    // let imgEle;
    // createImage('img/img-1.jpg').then(img => {
    //     imgEle = img;
    //     return wait(2);
    // }).then(() => {
    //     imgEle.style.display = 'none';
    //     return createImage('img/img-2.jpg');
    // }).then(img => {
    //     imgEle = img;
    //     return wait(2);
    // }).then(() => {
    //     imgEle.style.display = 'none';
    // })

const loadNPause = async function(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.classList.add('parallel')
        img.addEventListener('load', function() {
            document.querySelector('.images').insertAdjacentElement('beforeend', img);
            resolve(img);
        })
    });
};

(async function() {
    // const res = await loadNPause('img/img-1.jpg');
    // console.log(res);
    const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
    const images = Promise.all(imgArr.map(img => loadNPause(img)));
    console.log(images);
})();
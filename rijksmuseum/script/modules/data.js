// function getData(){
//     const endpoint ='https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT'
//     //const key ='m37TFPjT'
//     //let url=''
//     const display = document.getElementById('art-collection');
//     display.textContent = "loading, even geduld a.u.b";
//     const collectionOfArt = [];

//     /*
//     Data ophalen
//     een fetch schrijven die de data ophaalt, en deze terug stuurt.

//     */
// }

import { loading, removeElement } from './state.js'

/* Functie exporteren met een link die data terug stuurt */
export const getData = async (url) => {
  return await fetch(url)
    .then((response) => {
      if (document.querySelector('.state-loading')) {
        loading('loading', '.state-loading');
      } else {
        console.log('element does not exist anymore')
        document.createElement('p')
          .classList.add('state-loading')
          .createTextNode(loading('loading', 'state-loading'))
      }
      return response.json()
    })
    .catch((error) => console.log(error))
    .finally(() => {
      console.log('done with loading')
      if (document.querySelector('.state-loading')) {
        removeElement('.state-loading', true)
      }
    })
}
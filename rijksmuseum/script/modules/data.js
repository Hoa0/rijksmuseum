import { stateManagement } from "./state.js"

/**
 * @param {string} url API URL waar je data vandaan wilt halen
 * @returns API response in JSON formaat
 */
 const getData = async (url) => {
    return await fetch(url)
      .then((response) => { 
        if (response.status >= 200 && response.status <= 299 ) { 
            return response.json()
        } else {
           stateManagement.errorState()
             throw Error(response.statusText)
         }
      })
      .catch((err) =>{
        stateManagement.errorState()
        console.error(err);
      })
      .finally(() => { 
        console.log('data ophalen is klaar')
      })
  }

/**
 * @description returns the object of the response, usually the body, for rijksmuseum it could be either artObjects or artObject
 * @param {Object} data Data response van de API, dit is een volledige response
 * @param {String} object Naam van het object dat je terug wilt krijgen
 * @returns Object de data die je wilt gebruiken in de applicatie
 */
const getObjectFromData = (data, object) => {
    return data[object]
}

export default getData;
export {getData, getObjectFromData}
/**
 * functie dat zoek naar je zoek input en button daarvan
 * Aan deze knop voeg ik een event listener toe, wanneer ik op de knop druk doet ie het volgende
 * Stopt het standaard gedrag, navigeert naar mijn router die zoekt met input waarde van veld
 * En heeft een addEventListener
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
 */
export function searchItem (){
    const searchBtn = document.getElementById('btn-search')
    const input = document.querySelector('#textInput-search')
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault()
      routie(`search/${input.value}`)
      
    })
}


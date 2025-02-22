/**
 * @param {String} typeOfState Type melding die je wilt, loading, error, noResult
 * @param {String} element Element selector, welk element wil je de melding in sturen
 * @returns stuurt een string terug voor de state
 * @description if else function gemaakt voor verschillende states, Het is meer feedback voor de gebruiker zodat diegene weet wat er gebeurt
 */
export function loading(typeOfState, element) {
  console.log('entering loading function')
  const selector = document.querySelector(element) //pakt het eerste element dat past bij de parameter
  // const all = document.querySelectorAll(element) // querySelectorAll pakt alle elementen die passen in de parameter enn returnt een HTMLList

  if (typeOfState === 'loading') {
    return selector.textContent = "Laden, even geduld a.u.b."
  }
  else if (typeOfState === 'error') {
    return selector.textContent = "Er is een fout opgetreden"
  } else if (typeOfState === 'noResult') {
    return selector.textContent = "Er zijn geen resultaten gevonden"
  } else {
    return selector.textContent = ""
  }
}

// modulair maken en state maken wanneer het laad en wanneer de zoekfunctie niks terug stuurt en een error state
/**
 * @description Functie om een element te verwijderen
 * @param {String} element Element dat verwijderd moet worden
 * @param {Boolean} boolean Moet het verwijderd worden? true or false
 */
export function removeElement(element, boolean) {
  const elementToRemove = document.querySelector(element)
  if (boolean === true) {
    elementToRemove.remove()
  }
}

/**
 * @description Maak een nieuw element aan en voeg de loading state toe
 * @param {String} currentElement Selecteer waar het element geplaatst moet worden
 * @param {String} loadingState Wat voor melding moet het geven, loading, error, of noResult
 */
export function addLoadingElement(currentElement, loadingState) {
  const newElement = document.createElement("p");
  newElement.classList.add('state')

  document.body.insertBefore(newElement, currentElement);

  loading(loadingState, '.state')
}


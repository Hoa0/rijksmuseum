const element = document.getElementById("art-collection");


const stateManagement = {
  dataLoaded() {
     // als de data art is geladen, wordt tekst verwijderd
    element.textContent = '';
  },
  isSearchEmpty(query, data) {
    if(data.length == 0 ) { 
      element.insertAdjacentHTML("afterbegin",
      `<p>Geen resultaten gevonden op zoekopdracht ${query}</p>`)
    } else {
      console.log('searchEmpty is groter dan 0')
      return true // verwijst render.js
    }
  },
  errorState() {
    element.textContent = 'rijksmuseum is gesloten, tot ziens.';
  }
  }

export {stateManagement}
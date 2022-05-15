import { getData } from "./data.js";

const textInput = document.querySelector('.textInput-search');
const buttonSearch = document.querySelector('.btn-search');
const result = document.querySelector('art-collection');
const mainContainer = document.querySelector('main')

let artNamesList = [];

function searchFilter() {
  fetch(getData)
    .then(response => response.json())
    .then(data => {

      let artNames = data.map(element => {
        return {
          name: data.artObject.longTitle
        }
      })
    })
    .catch(
      (error) => {
        console.log('no results found')

      }
    )
}

textInput.addEventListener("input", (e) => {
  let value = e.target.value

  // checking if input exists
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase()
  }
})

/* zoek opdrachten weergeven aan de gebruiker */
const setResults = (data) => {
  const display = data
    .map((data) => {
      `
             <ul id="art-collection">
                <li>
                <h2>${data.artObject.longTitle}</h2>
                <img src="${data.artObject.webImage.url}" alt="foto">
                </li>
            </ul>
           `
    })
  mainContainer.insertAdjacentHTML('beforeend', setResults)
}
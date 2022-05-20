import { stateManagement } from "../modules/state.js";

/**
 * Het weergeven van data in HTML
 */

const render = {
  overview(data) {
    console.log('overview van data', data)
    if (doesContainerExist('#art-collection')) {
      clearContainer('#art-collection')
      return setGallery(data)
    }
    return data
  },
  detail(data, id) {
    console.log(`detailpage of ${id}`, data)
    if (doesContainerExist('#art-collection')) {
      clearContainer('#art-collection') // inhoud van container wordt verwijderd
      return createDetailPage(data) //plaats content van details
    }
    return data
  },
  search(query, data) {
    /**
       * Kijk als de state zoeken leeg is, nee kijk als container bestaat en vul het in.
       * zoniet, voert statemanagement uit, "geen resultaten"
     */
    if (stateManagement.isSearchEmpty(query, data)) {
      console.log(`searching ${query}`)

      console.log('data is empty')
      clearContainer('#art-collection') //Haal art-collection leeg
      stateManagement.isSearchEmpty(query, data) //Omdat het zoeken leeg is gehaald moet de melding terug geplaatst worden. nog een keer oproepen
    } else {
      //Er zij resultaten op de zoekopdracht
      console.log(`searching ${query}`)

      if (doesContainerExist('#art-collection')) {
        //bestaat de container? voer dan het volgende uit
        console.log('container exists')
        clearContainer('#art-collection') //maak container leeg voor nieuwe content
        return setGallery(data) //plaats nieuwe content
      }
    }
    return data
  }
}
  
  /**
   * @description bekijk als de container (#art-collection) bestaat, en geef een boolean terug
   * @param {string} target 
   * @returns 
   */
  const doesContainerExist = (target) => {
    target = document.querySelector(target)
    return target ? true : false 
  }

  /**
   * altijd nieuwe content te zien :) Om oude content te verwijderen en nieuwe content te zien ;)
   * @description Haal alle elementen uit de container zodat deze leeg is. Anders wordt content tekst onder elkaar geplakt
   * Kijk als de aantal children in de element groter is dan 0, zoja verwijder de eerste en herhaal dit
   * @param {String} string container die leeg gehaald moet worden.
   * @see https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/#:~:text=Child%20nodes%20can%20be%20removed,which%20produces%20the%20same%20output.
   */
  const clearContainer = (string) => {
    const container = document.querySelector('ul') 
  
    let target = container.firstElementChild 
    while (container.childElementCount > 0) { 
      target.remove()
      target = container.firstElementChild
    }
  }
  
  /**
   * Maak een detail element aan voor één detail item.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
   * @param {string} data 
   */
  const createDetailPage = (data) => {
    const detailsArt = `
    <section id="detailsOfArt">
      <h2>${data?.longTitle}</h2>
      <img src="${data?.webImage.url}" alt="foto">
      <p>${data?.description}</p>
      <p>materiaal: ${data?.materials}</p> 
      <a id="bnt" href="">Terug</a>
    </section>
    `
    document.querySelector('#art-collection').insertAdjacentHTML('afterbegin', detailsArt)
  }
  
  /**
   * create an overview gallery for art collection
   * @param {Array} data is een array van collection (setGallery) die dus ieder key value pair in een HTMLElement plaatst
   */
  const createGalleryView = (data) => {
    data.map(item => {
      const element = document.createElement('li')
      const content = `
        <a href="#detail/${item.artid}">
        <figure>
          <img src="${item.img}" alt="image of arts"><figcaption>${item.title}</figcaption>
        </figure>
        </a>
      `
      element.innerHTML = content
      document.querySelector('#art-collection').appendChild(element)
    })
  
  }
  
  /**
   * Looping door artObjects array en voeg items title, img etc toe aan array collection
   * @param {string} response API call (getData)
   * @returns show collection of arts
   */
  const setGallery = (response) => {
    const collection = [];
    response.map(item => {
      collection.push({
        title: item?.longTitle,
        img: item?.hasImage ? item?.webImage.url : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        artid: item?.objectNumber,
        link: item?.links.web
      })
    });
    return createGalleryView(collection)
  }
  
  export { render }

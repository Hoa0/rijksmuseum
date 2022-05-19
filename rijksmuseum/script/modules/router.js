import { getData, getObjectFromData } from '../modules/data.js'
import { render } from '../modules/render.js'

const baseURL = "https://www.rijksmuseum.nl/api/nl/collection";
const key = "?key=m37TFPjT&ps=20";
const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT';

/**
 * samen met routie.js voert dit een manier van navigatie uit (hash router)
 * de functie router, voert een routie uit, die verschillende routes heeft.
 * De detail en search route heeft een parameter waarmee ik dingen kan uitvoeren
 * De laatste route handelt de eerste bezoek af, wanneer ik geen route heb.
 */
const router = () => { 
  routie({
    "detail/:id": async (id) => {
      console.log(`detailpage`, id)
      const detailUrl = `${baseURL}/${id}${key}`;
      console.log(detailUrl)
      // gaat naar dataset vervolgens naar artobject
      const data = getObjectFromData(await getData(detailUrl), 'artObject') 
      render.detail(data, id)
      return data

    },
    "search/:query?": async (query) => {
     
      const searchData = getObjectFromData(await getData(`${baseURL}${key}&q=${query}`), 'artObjects')
      console.log(searchData)
      console.log(`searching for`, query)
      render.search(query, searchData)

    },
    "overview": async () => {
      console.log(`overview`)
      const data = getObjectFromData(await getData(endpoint), 'artObjects')
      render.overview(data)
    },
    "": async () => {
      console.log(`empty route`)
      const data = getObjectFromData(await getData(endpoint), 'artObjects')
      render.overview(data)
    }
  })
}

export default router;




import { getData, getObjectFromData } from '../modules/data.js'
import { render } from '../modules/render.js'

const baseURL = "https://www.rijksmuseum.nl/api/nl/collection";
const key = "?key=m37TFPjT&ps=20";
const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT';

const router = () => { 
  routie({
    "detail/:id": async (id) => {
      console.log(`detailpage`, id)
      const detailUrl = `${baseURL}/${id}${key}`;
      console.log(detailUrl)
    
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
    // "overview": async () => {
    //   console.log(`overview`)
    //   const data = getObjectFromData(await getData(endpoint), 'artObjects')
    //   render.overview(data)
    // },
    "": async () => {
      console.log(`empty route`)
      const data = getObjectFromData(await getData(endpoint), 'artObjects')
      render.overview(data)
    }
  })
}

export default router;




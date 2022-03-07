import { getData } from "./data.js";
import { setArts, setDetails } from "./render.js";

export function router() {
  const baseURL = 'https://www.rijksmuseum.nl/api/nl/collection'
  const key = '?key=m37TFPjT'

  routie({
    'overview': async function() {
      const getOverview = await getData(`${baseURL}${key}`)
      console.log('ik doe wat')
      return setArts(getOverview)
    },
    'detail/:id': async function(id) {
      const detailArts = await getData(`${baseURL}/${id}${key}`)
      console.log('ik ben details')
      return setDetails(detailArts)
    }
  })
}

//https://www.rijksmuseum.nl/api/nl/collection/BK-17496?key=m37TFPjT
//https://www.rijksmuseum.nl/api/nl/collection/${id}?key=m37TFPjT
import { getData } from "./data.js";
import { setArts, setDetails } from "./render.js";
import { loading, addLoadingElement } from "./state.js";

const display = document.getElementById("art-collection");

export function router() {
  const baseURL = "https://www.rijksmuseum.nl/api/nl/collection";
  const key = "?key=m37TFPjT&ps=20";

  routie({
    overview: async function () {
      const getOverview = await getData(`${baseURL}${key}`);
      console.log("ik doe wat");
      return setArts(getOverview, display);
    },
    "detail/:id": async function (id) {
      const detailArts = await getData(`${baseURL}/${id}${key}`);
      console.log(`ik ben details en navigeer naar ${baseURL}/${id}${key}`);
      console.log(`dataset`, detailArts);
      return setDetails(detailArts, display);
    },
    "search/:searchItem": async (searchItem) => {
      const searchData = await getData(`${baseURL}${key}&q=${searchItem}`);

      //Controle als het aantal groter is dan 0, zo niet, geen resultaten melding
      if (searchData.count > 0) {
        console.log(`found ${searchData.count} results \n`, searchData)
        return setArts(searchData)
      } else {
        console.log(`found no results`)
        addLoadingElement(document.querySelector('main'), 'noResult')

      }
    },
    "": async function () {
      const getOverview = await getData(`${baseURL}${key}`);
      console.log("wildcard", getOverview);
      return setArts(getOverview, display);
    },
  });
}

//https://www.rijksmuseum.nl/api/nl/collection/BK-17496?key=m37TFPjT
//https://www.rijksmuseum.nl/api/nl/collection/${id}?key=m37TFPjT

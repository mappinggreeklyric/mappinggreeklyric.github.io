import { initializeData } from './js/calcData/data.js';
import { parseCsvs } from './js/calcData/parseCsvs.js';
import { addMapModeEventListener, addPoetsEventListener, updateMapMode } from './js/interface/interface.js';
import { initializeMap } from './js/drawMap/initializeMap.js';
import { initializeSlider } from './js/interface/slider.js';
import { createEssay, initializeCloseEssayClicks } from './js/essay/essay.js';

function main() {
  createEssay("home");
  initializeCloseEssayClicks();

  const map = initializeMap();
  const data = {};
  const state = {
    "currentMapMode": "placesMode",
    "minDate": -800,
    "maxDate": -400
  };

  parseCsvs(data)
    .then(() => {
      initializeData(data);

      addMapModeEventListener(map, data, state);
      addPoetsEventListener(map, data, state);

      updateMapMode(map, data, state);
      initializeSlider(map, data, state);
    });
}

main();
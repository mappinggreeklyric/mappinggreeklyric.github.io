export function getPoet(data, poetId) {
  if (data.poetsById[poetId]) return data.poetsById[poetId];
  console.log(`poetId ${poetId} does not exist in poetsById`);
}

export function getGenres(data, poetId) {
  if (data.genresByPoetId[poetId]) return data.genresByPoetId[poetId];
  else return [];
}

export function getCity(data, cityId) {
  if (data.citiesById[cityId]) return data.citiesById[cityId];
  console.log(`cityId ${cityId} does not exist in citiesById`);
}

export function getGovs(data, cityId) {
  if (data.govsByCityId[cityId]) {
    return data.govsByCityId[cityId];
  }
  console.log(`cityId ${cityId} does not exist in govsByCityId`);
  return [];
}

export function getMapTypeNum(state) {
  const [type, stringNum] = state.selectedId.split("_");
  const num = parseInt(stringNum);
  return [type, num];
}
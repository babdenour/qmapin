export function newDestination(store, brandName) {
  store.commit('NEW_DESTINATION', brandName);
}

export function newUserGeoLoc(store, userGeoLoc) {
  store.commit('NEW_USERGEOLOC', userGeoLoc);
}

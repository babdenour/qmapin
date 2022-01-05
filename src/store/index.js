import { createStore } from 'vuex';

export default createStore({
  state: {
    destination: {
      brandName: '',
      brandCategory: '',
      brandLetter: '',
      lat: Number,
      long: Number,
    },

    userGeoLoc: {
      lat: Number,
      long: Number,
    },
  },

  getters: {
    getCurrentGeoLoc: (state) => state.userGeoLoc,
    getCurrentDestinationName: (state) => state.destination.brandName,
  },

  mutations: {
    UPDATE_CURRENT_GEOLOC: (state, userGeoLoc) => {
      state.userGeoLoc.lat = userGeoLoc.lat;
      state.userGeoLoc.long = userGeoLoc.long;
    },
    UPDATE_CURRENT_DESTINATION_NAME: (state, destination) => {
      state.destination.brandName = destination;
    },
  },

  actions: {
    setCurrentGeoLoc: (store, currentGeoLoc) => {
      store.commit('UPDATE_CURRENT_GEOLOC', currentGeoLoc);
    },
    setCurrentBrandName: (store, currentDestination) => {
      store.commit('UPDATE_CURRENT_DESTINATION_NAME', currentDestination);
    },
  },
  modules: {},
});

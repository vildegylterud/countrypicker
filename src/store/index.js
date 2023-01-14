import { createStore } from "vuex";

export default createStore({
    state: {
        region: "",
        country: "",
        countries: [],
        isSelectedCountry: false,
    },
    mutations: {
        SET_REGION(state, region) {
            state.region = region;
        },
        SET_COUNTRY(state, country) {
            state.country = country;
        },
        SET_SELECTED_COUNTRIES(state, countries) {
            state.countries = countries;
        },
        ADD_COUNTRY(state, country) {
            state.countries.push(country);
        },
        ADD_PREVIOUS_COUNTRIES(state, countries) {
            state.countries.push(countries);
        },
    },
    getters: {
        GET_COUNTRY(state) {
            return state.country;
        },
        GET_REGION(state) {
            return state.region;
        },
        GET_SELECTED_COUNTRIES(state) {
            return state.countries;
        },
        GET_IsSelectedCountry(state) {
            return state.isSelectedCountry;
        },
    }, actions: {
        setCountryInfo(
            context,
            { country, region }
        ) {
            context.commit("SET_COUNTRY", country),
                context.commit("SET_REGION", region)
        },

    }
})

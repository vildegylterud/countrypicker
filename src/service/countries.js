import axios from "axios";
import {All_COUNTRIES_URL, COUNTRIES_BY_REGION_URL} from "@/service/urls"


export async function getAllCountries() {
    await axios
        .get(All_COUNTRIES_URL)
        .then(response => (this.all_countries = response.data))
}


// Get-call for get countries in a specific region
export async function getCountryByRegion(region) {
    return axios
        .get(COUNTRIES_BY_REGION_URL + `/${region}`)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.error(`Unable to get country: ${error}`)
            return {}
        })
}

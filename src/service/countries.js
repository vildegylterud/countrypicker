import axios from "axios";
import {REGION_URL} from "@/service/urls"


export async function getCountries() {
    await axios
        .get(REGION_URL)
        .then(response => (this.countries = response.data))
}


// Get-call for get listing by id
export async function getCountryByRegion(region) {
    return axios
        .get(REGION_URL + `/${region}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(`Unable to get country: ${error}`)
            return {}
        })
}

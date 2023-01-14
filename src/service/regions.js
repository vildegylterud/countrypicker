import axios from "axios";
import { COUNTRY_BY_NAME_URL } from "@/service/urls"


// Get-call for get listing by id
export async function getRegionByCountry(country) {
    return axios
        .get(COUNTRY_BY_NAME_URL + `/${country}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(`Unable to get region: ${error}`)
            return {}
        })
}

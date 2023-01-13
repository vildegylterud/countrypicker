import axios from "axios";
import { REGION_URL } from "@/service/urls"


// Get-call for get listing by id
export async function getRegionByCountry(country) {
    return axios
        .get(REGION_URL + `/${country}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(`Unable to get region: ${error}`)
            return {}
        })
}

import axios from "axios";
import { COUNTRY_URL } from "@/service/urls"


export async function getCountries() {
    await axios
        .get(COUNTRY_URL)
        .then(response => (this.info = response.data))
}

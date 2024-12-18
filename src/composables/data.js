import axios from "axios"
import { ref } from "vue"

export const useGetData = () => {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const getData = async (url) => {

        try {
            loading.value = true;
            const resp = await axios.get(url)
            data.value = resp.data
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }

    }

    return {
        data,
        loading,
        error,
        getData
    }
}
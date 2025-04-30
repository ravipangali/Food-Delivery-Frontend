export const BASE_URL = 'http://127.0.0.1:8000'
export const API_URL = `${BASE_URL}/api/`


// GET REQUEST API FUNCTION
export const getRequest = async (endpoint) => {

    const url = `${API_URL}${endpoint}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data

}
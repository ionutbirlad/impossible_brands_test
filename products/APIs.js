import axios from 'axios'

export const baseAdminApi = async (payload) => {
  console.log(payload)
  try {
    axios.defaults.headers.common["X-Shopify-Access-Token"] = process.env.ACCESS_TOKEN
    const result = await axios({
      method: 'POST',
      url: process.env.BASE_URL,
      data: {
        query: payload.query,
        variables: payload.variables
      }
  })
    console.log(result)
} catch (error) {
  console.error(error)
}
}
import axios from 'axios'

export const baseAdminApi = async (query, variables={}) => {
  try {
    axios.defaults.headers.common["X-Shopify-Access-Token"] = process.env.ACCESS_TOKEN
    const result = await axios({
      method: 'POST',
      url: process.env.BASE_URL,
      data: {
        query,
        variables
      }
  })
    console.log(result)
} catch (error) {
  console.error(error)
}
}
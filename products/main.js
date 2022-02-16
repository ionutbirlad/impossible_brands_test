import { baseAdminApi } from './APIs.js'
import './dotenv.config.js'
import { products } from './products.js'

async function createProducts(payload) {
  const query = `mutation productCreate($input: ProductInput!, $media: [CreateMediaInput!]) {
    Product${payload.index}: productCreate(input: $input, media: $media) {
      product {
        id
      }
    }
  }`
  const variables = {
    input: payload.input,
    media: payload.media
  }

  baseAdminApi({ query, variables })
}

products.forEach(p => {
  createProducts({
    index: products.indexOf(p),
    input: p.input,
    media: p.media
  })
})

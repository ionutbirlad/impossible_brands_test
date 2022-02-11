import { baseAdminApi } from './APIs.js'
import './dotenv.config.js'
import { products, variants } from './products.js'


async function fetchProducts() {
  const query = `mutation productCreate($input: ProductInput!, $media: [CreateMediaInput!]) {
      ${products.map(product => {
        return `Product${products.indexOf(product)}: productCreate(input: $input, media: $media) {
                  product {
                    id
                  }
                }`
      }).join(" ")}
  }`
  const variables = variants

  baseAdminApi(query, variables)
}

fetchProducts()

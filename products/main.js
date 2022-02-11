import { baseAdminApi } from './APIs.js'
import './dotenv.config.js'
import { products } from './products.js'


async function fetchProducts() {
  const query = `mutation {
      ${products.map(product => {
        return `Product${products.indexOf(product)}: productCreate(input: {
                  title: "${product.title}"
                }) {
                  product {
                    id
                  }
                }`
      }).join(" ")}
  }`

  baseAdminApi(query)
}

fetchProducts()

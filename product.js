let products = []
let id = 0 // id o contador de elementos

function resetProducts() {
  products = []
  id = 0
}

function getProducts() {
  return products
}

function addProduct(name, price) {
  if(name === undefined || price === undefined) {
    throw new Error('name and price must be defined')
  }
  const ifExists = products.find( product => product.name === name)
  
  if (ifExists) {
    throw new Error('product already exists')
  }

  const product = {
    id,
    name,
    price,
  }
  products.push(product)
  id++

  return products
}

function removeProduct(id) {
  const product = getProduct(id)
  
  if(!product) {
    throw new Error('product does not exist')
  }
  products.splice(products.indexOf(product), 1) // con splice necesito la posición que encuentro con findIndex y la cantidad que quiero borrar
}

function getProduct(productId) {
  const product = products.find(product => product.id === productId)
  
  if(!product) {
    throw new Error('product does not exist')
  }
  return product
}

function updateProduct(productId, newName, newPrice) {
  const  product = products.find(product => product.id === productId)
  
  if(!product) {
    throw new Error('product does not exist')
  }
  if(newName !== undefined) {
    product.name = newName
  }
  if (newPrice !== undefined) {
    product.price = newPrice
  }

  return product
}

module.exports = {
  addProduct,
  getProducts,
  resetProducts,
  removeProduct,
  getProduct,
  updateProduct,
}
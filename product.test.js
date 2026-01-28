//aquí test unitarios para las funciones definidas
const { addProduct, getProducts, resetProducts, removeProduct, getProduct, updateProduct } = require('./product.js')

beforeEach(() => {
  resetProducts()
})

describe('addProduct', () => {
  test.each([
    ['manzana', 2.3],
    ['pera', 2.55]
  ])('should add product and price', (name, price) => {
    addProduct(name, price)

    const products = getProducts()
    expect(products[0].name).toBe(name)
    expect(products[0].price).toBe(price)
  });

  test.each([
    [undefined, 1],
    ['manzana', undefined],
    [undefined, undefined],
  ])('should throw error if values are not defined', (name, price) => {
    expect(() => addProduct(name, price)).toThrow()
  })
})

describe('removeProduct', () => {
  it('should remove a product', () => {
    addProduct('manzana', 2.3)
    removeProduct(0)

    expect(getProducts().length).toBe(0)
  })
  it('should throw error because product does not exist', () => {
    expect(() => removeProduct(0)).toThrow()
  })
})

describe('getProduct', () => {
  it('should return a product', () => {
    addProduct('manzana', 2.3)

    const product = getProduct(0)
    expect(product.name).toBe('manzana')
    expect(product.price).toBe(2.3)
  })
  it ('should throw error if product does not exist', () => {
    expect(() => getProduct(99999)).toThrow()
  })
})

describe('updateProduct', () => {
  it('should return a update of product', () => {
    addProduct('manzana', 2.3)

    const update = updateProduct(0, 'azul', 5)
    expect(update.name).toBe('azul')
    expect(update.price).toBe(5)
  })
  it('should update ONLY the price', () => {
    addProduct('manzana', 5)

    const updatePrice = updateProduct(0, undefined, 4)
    expect(updatePrice.name).toBe('manzana')
    expect(updatePrice.price).toBe(4)
  })
  it('should update ONLY the name', () => {
    addProduct('ciruela', 10)

    const updateName = updateProduct(0, 'mandarina', undefined)
    expect(updateName.name).toBe('mandarina')
    expect(updateName.price).toBe(10)
  })

  it('should throw error if product does not exist', () => {
    expect(() => updateProduct(9999, 'azul', 5)).toThrow()
  })
})
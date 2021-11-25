import CartPage from '../pages/Cart/CartPage'
import ProductIdPage from '../pages/Products/ProductIdPage'
import Products from '../pages/Products/Products'
import ProducsCategoryPage from '../pages/Products/ProductsCategoryPage'

export const routes = [
  { path: '/products', component: Products, exact: true },
  { path: '/products/:category', component: ProducsCategoryPage, exact: true },
  { path: '/products/:category/:id', component: ProductIdPage, exact: true },
  { path: '/cart', component: CartPage, exact: true },
]

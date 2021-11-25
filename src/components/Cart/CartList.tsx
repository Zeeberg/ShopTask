import ProductForm from 'components/Product/ProductForm'
import Modal from 'components/UI/Modal/Modal'
import { useState } from 'react'
import { CartState } from 'types/cart'
import { IModalProduct } from 'types/modal'
import { IProduct } from 'types/product'

import CartItem from './CartItem'
import styles from './styles.module.scss'

const CartList = ({ productsInCart }: CartState) => {
  const [modal, setModal] = useState<IModalProduct>({
    visibility: false,
    product: null,
  })

  const handleModal = (product: IProduct | null, visibility = false) => {
    setModal({ visibility: visibility, product: product })
  }

  return (
    <div>
      <Modal modalProduct={modal} onHide={() => handleModal(null)}>
        <ProductForm product={modal.product} onHide={() => handleModal(null)} />
      </Modal>
      <h1 className={styles['cart-page__title']}>Your shopping cart</h1>
      {productsInCart.map(cart => (
        <CartItem
          key={cart.product.id}
          cart={cart}
          onModal={() => handleModal(cart.product, true)}
        />
      ))}
    </div>
  )
}

export default CartList

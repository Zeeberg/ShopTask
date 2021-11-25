import Counter from 'components/UI/Counter/Counter'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from 'store/action-creators/cart'
import { ICart } from 'types/cart'

import styles from './styles.module.scss'

interface CartItemProps {
  cart: ICart
  onModal: () => void
}

const CartItem = ({ cart, onModal }: CartItemProps) => {
  const [counter, setCounter] = useState(cart.quantity)
  const { productsInCart } = useTypedSelector(state => state.cart)

  const initialTotal = counter * cart.product.price

  const [totalItem, setTotalItem] = useState(initialTotal)

  const dispatch = useDispatch()

  useEffect(() => {
    setTotalItem(initialTotal)

    const changedProductsInCart = productsInCart
    changedProductsInCart[
      changedProductsInCart.findIndex(obj => obj.product.id == cart.product.id)
    ].quantity = counter

    dispatch(setCart(changedProductsInCart))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  const handleRemove = () => {
    dispatch(
      setCart(productsInCart.filter(x => x.product.id !== cart.product.id)),
    )
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__wrapper']}>
        <div className={styles['cart-item__info']} onClick={onModal}>
          <div className={styles['cart-item__image']}>
            <img src={cart.product.image} alt={cart.product.title} />
          </div>
          <div>
            <span className={styles['cart-item__title']}>
              {cart.product.title}
            </span>
            <span className={styles['cart-item__price-info']}>
              {cart.product.price} $
            </span>
          </div>
        </div>
        <Counter counter={counter} setCounter={setCounter} />
        <b className={styles['cart-item__price']}>{totalItem.toFixed(2)}$</b>
      </div>
      <div
        className={styles['cart-item__remove-btn']}
        onClick={handleRemove}></div>
    </div>
  )
}

export default CartItem

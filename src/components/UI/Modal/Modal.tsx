import { FC } from 'react'
import { IModalProduct } from 'types/modal'

import styles from './styles.module.scss'

type ModalProps = {
  modalProduct: IModalProduct
  onHide: () => void
}

const Modal: FC<ModalProps> = ({ children, modalProduct, onHide }) => {
  const rootClasses = [styles.modal]

  if (modalProduct.visibility) {
    rootClasses.push(styles.active)
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className={rootClasses.join(' ')} onClick={onHide}>
      <div
        className={styles['modal__content']}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal

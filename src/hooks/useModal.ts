import { useState } from 'react'
import { IModalProduct } from 'types/modal'
import { IProduct } from 'types/product'

export const useModal = (callback: () => void) => {
  const [modal, setModal] = useState<IModalProduct>({
    visibility: false,
    product: null,
  })

  const handleModal = (product: IProduct | null, visibility = false) => {
    setModal({ visibility: visibility, product: product })
  }

  return modal
}

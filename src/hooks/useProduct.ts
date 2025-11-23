import { useEffect, useState } from "react"
import { IDetailedProduct } from "../JSONTypes"
import { getProduct } from "../api"
import { useParams } from "react-router-dom"

export function useProduct() {
  const [product, setProduct] = useState<IDetailedProduct>()
  const { slug } = useParams()

  useEffect(() => {
    if (slug) {
      getProduct(slug).then(setProduct)
    }
  }, [slug])

  return product
}
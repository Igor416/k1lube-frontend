import { useEffect, useState } from "react";
import { IProduct } from "../JSONTypes";
import { getProducts } from "../api";
import { useParams } from "react-router-dom";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const { category } = useParams()

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return products.filter(p => p.category.name === category)
}
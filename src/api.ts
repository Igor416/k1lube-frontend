import { ICategory, IProduct, IDetailedProduct, IMessage } from "./JSONTypes";

//const SERVER_URL = 'http://127.0.0.1:8000/'
const SERVER_URL = '/'

export function getCategories() {
  return sendGetRequest<ICategory[]>('api/categories/')
}

export function getProducts() {
  return sendGetRequest<IProduct[]>('api/products/')
}

export function getProduct(slug: string) {
  return sendGetRequest<IDetailedProduct>(`api/product/${slug}`)
}

export function sendMessage(message: IMessage) {
  return sendPostRequest<IMessage, IMessage>('api/messages/', message)
}

async function sendGetRequest<T>(url: string): Promise<T> {
  const response = await fetch(SERVER_URL + url);
  const data = await response.json();
  return data;
}

async function sendPostRequest<T, R>(url: string, body: T): Promise<R> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(SERVER_URL + url, options);
  const data = await response.json();
  return data;
}
// 1. imports
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// 2. action definitions
const GET = "products/GET"

// 3. initial state
const initialState = {
  products: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      //payload is what is bundled in your actions
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

// 5. action creators
export function getProducts() {
  return new Promise((resolve, reject) => {
    axios
      .get("api/products")
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

// 6. custom hook
export function useProducts() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.playerState.products)
  const get = () => dispatch(getProducts())

  useEffect(() => {
    get()
  }, [])

  return { products, get }
}

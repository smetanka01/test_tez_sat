import {collection, getDocs} from "firebase/firestore";
import {db} from "../../base";

export const setProductSkelet = (payload) => ({
   type: 'SET_PRODUCT_SKELET',
   payload
})

export const getProducts = () => async (dispatch) => {
   dispatch(setProductSkelet(false))
   try {
      const product = await getDocs(collection(db, "products"));
      const productArray = [];
      product.forEach((doc) => {
         const obj = {
            id: doc.id,
            ...doc.data()
         };
         productArray.push(obj)
      });
      dispatch(setProducts(productArray))
   } catch (e) {
      console.log(e)
   }
}

export const setProducts = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items
})
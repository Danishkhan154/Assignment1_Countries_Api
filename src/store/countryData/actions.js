import { DROPDOWN_STATE } from "./types";
import { getData } from '../../utilities/http'


export const getCountryData = (url) => {
  return (dispatch) => {
      //  dispatch(Loading),
      console.log(url)
       getData('https://jsonplaceholder.typicode.com/todos/1').then(result=>{
        console.log(result.data)

         dispatch({type: DROPDOWN_STATE, result: result.data})
       }).catch(error=>{})
   }
}


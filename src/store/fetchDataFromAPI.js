import { addDataAction } from './reducers/fetchDataReducer'
import API from '../commons/API'

export const fetchData = () => {
    return function(dispatch) {
        API
            .get('/')
            .then(json => dispatch(addDataAction(json.data)))
            .catch(err => {
                console.log(err)
        })
    }
}
import { addDataAction } from '../../store/actions/addDataAction'
import API from './API'

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
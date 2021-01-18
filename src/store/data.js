import { addDataAction } from './reducers'

export const fetchData = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addDataAction(json)))
    }
}
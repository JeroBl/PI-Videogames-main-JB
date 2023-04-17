import axios from 'axios';

export const GETALLGAMES = "GETALLGAMES";
export const GETALLGENRES = "GETALLGENRES";

export const getAllGames =  (id) => {
        return function(dispatch){
            axios.get(`http://localhost:3001/videogames`)
            .then(res => res.data)
            .then(data => {
                dispatch({type:GETALLGAMES,payload:data})
            })
        }
}

export const GetAllGenres = () => {
    return function(dispatch){
        axios.get(`http://localhost:3001/genres`)
        .then(res => res.data)
        .then(data => {
            dispatch({type:GETALLGENRES,payload:data})
        })
    }
}
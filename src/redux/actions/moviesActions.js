import tipo from './tipo';
import axios from 'axios';

const urlBase ='https://api.themoviedb.org/3/movie/';
const urlBaseBusqueda = 'https://api.themoviedb.org/3/search/movie?'; //query=alien&api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es';
const key = '959561c3e72454f1f92485e96cc4b945';
const language = 'es-Es';
// 'https://api.themoviedb.org/3/movie/upcoming?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es');


export const getEstrenos = ()=>dispatch=>{
    dispatch({
        type: tipo.GET_ESTRENOS,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}&language=${language}`)
    })
}

export const getProximosEstrenos = ()=>dispatch=>{
    dispatch({
        type: tipo.GET_PROXIMOS_ESTRENOS,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}&language=${language}`)
    })
}


export const getCreditos = (peliculaid)=>dispatch=>{
    dispatch({
        type: tipo.GET_CREDITOS,
        payload: axios.get(`${urlBase}${peliculaid}/credits?api_key=${key}&language=${language}`)
    })
    // (`https://api.themoviedb.org/3/movie/${peliculaid}/credits?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es`);
}


export const getPeliculaDetalle = (peliculaid)=>dispatch=>{
    dispatch({
        type: tipo.GET_PELICULA_DETALLE,
        payload: axios.get(`${urlBase}${peliculaid}?api_key=${key}&language=${language}`)
    })
    // `https://api.themoviedb.org/3/movie/${peliculaid}?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es`
}


export const getBusqueda = text =>dispatch=>{
    dispatch({
        type: tipo.GET_BUSQUEDA,
        payload: axios.get(`${urlBaseBusqueda}query=${text}&api_key=${key}&language=${language}`)
    })
    // query=alien&api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es';
    // https://api.themoviedb.org/3/search/movie?query=alien&api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es
}


export const clearSearch = () =>{
    return {
        type: tipo.CLEAR_SEARCH
    }
}
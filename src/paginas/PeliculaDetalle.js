import React from 'react';
import axios from 'axios';
import Destacados from '../componentes/Destacados';
import Cast from '../componentes/Cast';
import {connect} from 'react-redux';
import Header from '../componentes/Header';

// Acciones
import {getCreditos,getPeliculaDetalle} from '../redux/actions/moviesActions';

class PeliculaDetalle extends React.Component{
/* 
    state = {
        pelicula:"",
        cast: ""
    } */

    componentDidMount(){
        // Recuperamos toda la información que se envía
        // console.log(this.props);
        // Recuperamos el Id de la Url
        // console.log(this.props.match.params.peliculaid);
        const {peliculaid} = this.props.match.params
        // this.getPeliculaDetalle(peliculaid);
        this.props.getPeliculaDetalle(peliculaid);
        this.props.getCreditos(peliculaid);
        //this.getCreditos(peliculaid);
    }

    /* getCreditos = async peliculaid=>{
        // console.log('getCreditos::1');
        try{
            // console.log(peliculaid);
            // console.log('getCreditos::2');
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaid}/credits?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es`);
            // console.log(result);
            // console.log('getCreditos::3');
            this.setState({
                cast: result.data.cast
            })
            // console.log('getCreditos::4');
        } catch (error) {
            console.log(error);
            // console.log('getCreditos::5');
            console.log(error.message);
        }
        // console.log('getCreditos::6');
    } */

    /* getPeliculaDetalle = async (peliculaid)=>{
        try{
            // console.log(peliculaid);
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaid}?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es`);
            // console.log(result.data)
            // console.log(result.data.overview)
            // console.log(result.data.vote_average)
            this.setState({
                pelicula: result.data
            })
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    } */

    render(){
        return(
            <div>
                <Header fecha={this.props.test.fecha} path={this.props.match.path}/>
                <Destacados pelicula={this.props.pelicula_detalle.data}></Destacados>
                <Cast cast={this.props.creditos.data}></Cast>
            </div>
        )
    }
}

// export default PeliculaDetalle;


function mapStateToProps({test, creditos, pelicula_detalle}) {
    return {
        test, creditos, pelicula_detalle
    }
}




export default connect(mapStateToProps, {
    getCreditos,
    getPeliculaDetalle
})(PeliculaDetalle);
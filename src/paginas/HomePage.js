import React from 'react';
import axios from 'axios';
import Header from '../componentes/Header';
// --> Acceso a datos externos
import Destacados from '../componentes/Destacados';
import Estrenos from '../componentes/Estrenos';
// import styled from 'styled-components';
import TituloSeccion from '../componentes/TituloSeccion';
// x Redux
import {connect} from 'react-redux';

import {getEstrenos, getProximosEstrenos} from '../redux/actions/moviesActions';
import SearchResults from '../componentes/SearchResults';
/* import PeliculaDetalle from './PeliculaDetalle'; */
/* const TituloSeccion = styled.h1`
    background:rgba(120,144,156,1);
    color:white;
    margin:0;
    padding:12px;
` */

class HomePage extends React.Component{

    /* state = {
        peliculaDestacada:"",
        proximosEstrenos:[]
    } */

    componentDidMount(){
        console.log('componentDidMount::1');
        this.props.getEstrenos();
        console.log('componentDidMount::2');
        this.props.getProximosEstrenos();
        // this.getData();
        //this.getProximosEstrenos();
        // console.log('componentDidMount::HomePage');
        // console.log(this.props.test);
        // console.log(this.props.test.test);
    }

    // Método de Clase
    renderResults = () => {
        const {data} = this.props.search;
        if (data.length === 0){
            return (
            <div>
                <Destacados pelicula={this.props.estrenos.peliculaDestacada}></Destacados>
                <TituloSeccion>Estrenos:</TituloSeccion>
                <Estrenos peliculas= {this.props.estrenos.data}/>
                <TituloSeccion>Próximamente:</TituloSeccion>
                <Estrenos peliculas= {this.props.proximos_estrenos.data}/>
            </div>
            )
        } else {
            return <SearchResults data={data} ></SearchResults>;
        }
    }

    /* getProximosEstrenos = async ()=>{
        try {
            // Con "await" espera a que tenga los datos
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es');
            
            // console.log(resultados.data.results);
            this.setState({
                proximosEstrenos: resultados.data.results
            })
        } catch (error) {
            console.log(error);
            console.log(error.mesage);
        }
    } */

    /* // Hacemos que el método sea asíncrono
    // mediante "async"
    getData = async ()=>{
        try {
            // Con "await" espera a que tenga los datos
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=959561c3e72454f1f92485e96cc4b945&language=es-Es');
            this.setPeliculaDestacada(resultados.data.results);
            // console.log(resultados.data.results);
            this.setState({
                peliculas: resultados.data.results
            })
        } catch (error) {
            console.log(error);
            console.log(error.mesage);
        }
    }
 */
    /* setPeliculaDestacada(peliculas){
        const peliculaDestacada = peliculas[Math.floor(Math.random()*peliculas.length)];
        // console.log(peliculaDestacada);
        this.setState({
            peliculaDestacada
        })
    } */

    render(){
        return(
            <div>
            <Header path={this.props.match.path}/>
            {this.renderResults()}
            </div>
        )
    }
}
// import { format } from 'path';


/* function mapStateToProps(store) {
    return {
        test: store.test
    }
} */

function mapStateToProps({estrenos, proximos_estrenos, search}) {
    return {
        estrenos, proximos_estrenos, search
    }
}




export default connect(mapStateToProps, {
    getEstrenos,
    getProximosEstrenos
})(HomePage);
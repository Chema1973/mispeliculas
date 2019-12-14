import React from 'react';
import styled from 'styled-components';
// Destacados.
// backdrop_path
const urlBaseImage = 'https://image.tmdb.org/t/p/w780/';
const Inicio = styled.div`
    background: url(${props=>urlBaseImage+props.pelicula.backdrop_path}) no-repeat;
    background-size:cover;
    height:700px;
    color: white;
    font-size:22px;
    font-family: 'Anton', sans-serif;
`

const PeliculaInfo = styled.div`
    position:relative;
    color:rgba(285,220,57,1);
`
const PeliculaInfoContent = styled.div`
    position:absolute;
    top:150px;
    left:50px;
    background:rgba(38,50,56,0.5);
`

const PeliculaInfoTitulo = styled.h1`
    color:rgba(255,179,0,1);
    max-width:300px;
    font-family: "Rock Salt", cursive;
`

const PeliculaInfoOverview = styled.p`
    font-size:14px;
    max-width:300px;
`
const VotoPromedio = styled.span`
    color:rgba(100,221,23,1);
    font-family: "Cinzel", serif;
`

const Cargando = styled.div`
    text-align:center;
    font-size:22px;
`
export default ({pelicula})=>{
    if(pelicula){
        return(
            <div>
                <Inicio pelicula={pelicula}>
                <PeliculaInfo>
                    <PeliculaInfoContent>
                         <PeliculaInfoTitulo>{pelicula.title}</PeliculaInfoTitulo>
                         <PeliculaInfoOverview>{pelicula.overview}</PeliculaInfoOverview>
         <VotoPromedio>{pelicula.vote_average}/10</VotoPromedio>
                     </PeliculaInfoContent>
                </PeliculaInfo>
            </Inicio>
            </div>
         )
    } else {
        return (
            <div>
                <Cargando>Cargando...</Cargando>
            </div>
            
        )
    }
    
}


/*
Pintar "<Inicio>Pelicula Destacada</Inicio>" resulta:
    <style data-styled="" data-styled-version="4.4.1">
        // sc-component-id: sc-bdVaJa
        .fYNsiO{
            background:rgba(55,71,79,1);
            color:white;
        }
    </style>
    <div class="sc-bdVaJa fYNsiO">
        Pelicula Destacada
    </div>
*/
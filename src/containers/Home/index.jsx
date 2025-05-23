import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // importe o CSS do Swiper
import styled from 'styled-components';

import { Background, Container, Info, Poster } from './styles'; // seus styled-components

function Home({ featuredMovie }) {
  return (
    <Background img={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}>
      <Container>
        <Info>
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.overview}</p>
          {/* seus botões, descrições etc */}
        </Info>

        <Poster>
          <img src={`https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`} alt={featuredMovie.title} />
        </Poster>
      </Container>

      {/* Exemplo de slider usando Swiper configurado */}
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={1}  // mostrar 1 slide no mobile
        loop={true}        // loop infinito evita fim e fundo preto
        breakpoints={{
          768: {
            slidesPerView: 'auto',  // muda para automático em telas maiores
          },
        }}
        className="swiper"
      >
        {/* Seus slides aqui */}
        {/* Por exemplo: info.map(item => <SwiperSlide>...</SwiperSlide>) */}
      </Swiper>
    </Background>
  );
}

export default Home;

import { useNavigate } from 'react-router-dom';  // Importando o useNavigate
import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider({ info, title }) {
    const navigate = useNavigate();  // Inicializando o hook de navegação

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card 
                            item={item} 
                            onClick={() => navigate(`/detalhe/${item.id}`)}  // Adicionando o onClick
                        />    
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}

export default Slider;

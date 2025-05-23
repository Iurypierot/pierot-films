import { useNavigate } from 'react-router-dom';
import { Background, Container, Info, Poster, ContainerButtons } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';

function Home() {
  const navigate = useNavigate();

  const data = [
    { id: 1, title: 'Filme 1', image: '/images/filme1.jpg' },
    { id: 2, title: 'Filme 2', image: '/images/filme2.jpg' },
    { id: 3, title: 'Filme 3', image: '/images/filme3.jpg' },
  ];

  return (
    <Background img="/images/capa.jpg">
      <Container>
        <Info>
          <h1>Bem-vindo à Pierot Films</h1>
          <p>Assista aos melhores filmes, séries e documentários exclusivos da nossa plataforma.</p>

          <ContainerButtons>
            <Button onClick={() => navigate('/assistir')}>Assistir agora</Button>
            <Button onClick={() => navigate('/detalhes')}>Ver detalhes</Button>
          </ContainerButtons>
        </Info>

        <Poster>
          <img src="/images/poster.png" alt="Poster do Filme" />
        </Poster>
      </Container>
    </Background>
  );
}

export default Home;

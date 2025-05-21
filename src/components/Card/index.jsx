import { Container } from "./styles"
import { getImages } from "../../utils/getImagens"
import { useNavigate } from 'react-router-dom'

function Card({ item }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detalhe/${item.id}`);  // Redireciona para o detalhe da série
    }

    return (
        <Container onClick={handleClick}>  {/* Adicionando o clique para redirecionar */}
            <img src={getImages(item.poster_path || item.profile_path || '' )} alt={item.title || item.name} />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}

export default Card

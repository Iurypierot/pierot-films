import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o useNavigate
import api from "../../services/api"; // Certifique-se de que a URL da API está correta
import { Container, Title, Description, MoviesGrid, MovieCard, MoviePoster, MovieTitle } from "./styles"; // Seus estilos

function Series() {
    const [series, setSeries] = useState([]);
    const navigate = useNavigate();  // Criar o hook de navegação

    useEffect(() => {
        async function carregarSeries() {
            try {
                const response = await api.get("tv/popular"); // Rota para séries populares
                setSeries(response.data.results);
            } catch (error) {
                console.error("Erro ao buscar séries:", error);
            }
        }

        carregarSeries();
    }, []);

    // Função para navegar até a página de detalhes da série
    const handleCardClick = (id) => {
        navigate(`/detalhe/${id}`); // Redireciona para a página de detalhes
    };

    return (
        <Container>
            <Title>Séries Populares</Title>
            <Description>Essas são as séries mais populares no momento:</Description>
            <MoviesGrid>
                {series.map((serie) => (
                    <MovieCard key={serie.id} onClick={() => handleCardClick(serie.id)}>
                        <MoviePoster
                            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                            alt={serie.name}
                        />
                        <MovieTitle>{serie.name}</MovieTitle>
                    </MovieCard>
                ))}
            </MoviesGrid>
        </Container>
    );
}

export default Series;

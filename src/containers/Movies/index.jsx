import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate para redirecionar
import { Container, Title, Description, MoviesGrid, MovieCard, MoviePoster, MovieTitle } from "./styles";
import api from '../../services/api'; // Certifique-se de que a API está configurada corretamente

function Movies() {
    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate(); // Função para navegação

    useEffect(() => {
        async function carregarFilmes() {
            try {
                const response = await api.get("movie/popular"); // Ou a URL correta para a API
                console.log("Filmes carregados:", response.data.results); // Log para verificar se os filmes estão sendo carregados
                setFilmes(response.data.results); // Armazena os filmes na lista
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }

        carregarFilmes();
    }, []);

    const handleFilmeClick = (filmeId) => {
        navigate(`/detalhe/${filmeId}`); // Redireciona para a página de detalhes do filme
    };

    return (
        <Container>
            <Title>Filmes Populares</Title>
            <Description>Esses são os filmes mais populares no momento:</Description>

            <MoviesGrid>
                {filmes.length === 0 ? (
                    <p>Carregando filmes...</p>
                ) : (
                    filmes.map((filme) => (
                        <MovieCard key={filme.id} onClick={() => handleFilmeClick(filme.id)}>
                            <MoviePoster
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                            />
                            <MovieTitle>{filme.title}</MovieTitle>
                        </MovieCard>
                    ))
                )}
            </MoviesGrid>
        </Container>
    );
}

export default Movies;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para acessar o ID do artista
import { getTopPeople, getMovieCredits } from "../../services/getData"; // Funcionalidades de busca
import { Container, Title, Description, Image, InfoContainer } from "./styles"; // Estilos para o componente

function ArtistDetail() {
    const [artist, setArtist] = useState(null);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();  // Pega o ID da URL

    useEffect(() => {
        async function loadArtistDetail() {
            try {
                // Aqui você faz a chamada para a API para pegar as informações do artista
                const artistData = await getTopPeople(); // Busque as informações das pessoas populares
                const artist = artistData.find(a => a.id === parseInt(id)); // Procura o artista pelo ID

                if (artist) {
                    setArtist(artist);
                    // Carregar os filmes em que o artista participou
                    const movieData = await getMovieCredits(artist.id); // Certifique-se de passar o ID correto
                    setMovies(movieData);
                }
            } catch (error) {
                console.error("Erro ao buscar detalhes do artista:", error);
            }
        }

        loadArtistDetail();
    }, [id]);

    if (!artist) return <div>Carregando...</div>;

    return (
        <Container>
            <Title>{artist.name}</Title>
            <Image src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`} alt={artist.name} />
            <InfoContainer>
                <Description>{artist.biography || "Biografia não disponível."}</Description>
                <h2>Filmes com o artista:</h2>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li> // Lista de filmes
                    ))}
                </ul>
            </InfoContainer>
        </Container>
    );
}

export default ArtistDetail;

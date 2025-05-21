import { useEffect, useState } from "react";
import { getMovieVideos } from "../../services/getData";
import { Container, Background } from "./styles";

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState(null); // Estado para armazenar o trailer

    useEffect(() => {
        async function getMovies() {
            const videos = await getMovieVideos(movieId);

            if (videos.length > 0) {
                // Sempre exibe o primeiro trailer disponível
                setMovie(videos[0]);
            } else {
                setMovie(null); // Caso não haja trailers, define como null
            }
        }

        if (movieId) {
            getMovies();
        }
    }, [movieId]);

    // Função para fechar o modal
    const handleClose = () => setShowModal(false);

    return (
        <Background onClick={handleClose}>
            {movie ? (
                <Container onClick={(e) => e.stopPropagation()}> {/* Previne o fechamento ao clicar no iframe */}
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Container>
            ) : (
                <Container onClick={(e) => e.stopPropagation()}> 
                    {/* Exibindo imagem padrão caso não haja trailer */}
                    <img 
                        src="https://via.placeholder.com/500x280?text=Trailer+Indisponível" 
                        alt="Trailer Indisponível" 
                        width="100%" 
                    />
                </Container>
            )}
        </Background>
    );
}

export default Modal;

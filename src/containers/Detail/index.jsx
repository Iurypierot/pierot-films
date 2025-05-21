import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Slider from "../../components/Slider";
import Credits from "../../components/Credits";
import SpanGenres from "../../components/SpanGenres";
import { getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar } from "../../services/getData";
import { getImages } from "../../utils/getImagens";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [movieVideos, setMovieVideos] = useState(null);
    const [movieCredits, setMovieCredits] = useState(null);
    const [movieSimilar, setMovieSimilar] = useState(null);

    useEffect(() => {
        async function getAllData() {
            try {
                const [movie, videos, credits, similar] = await Promise.all([
                    getMovieById(id),
                    getMovieVideos(id),
                    getMovieCredits(id),
                    getMovieSimilar(id),
                ]);

                setMovie(movie);
                setMovieVideos(videos);
                setMovieCredits(credits);
                setMovieSimilar(similar);
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            }
        }

        getAllData();
    }, [id]);

    if (!movie) {
        return <p>Carregando...</p>;
    }

    const backdropImage = movie.backdrop_path ? getImages(movie.backdrop_path) : "fallback.jpg";
    const posterImage = movie.poster_path ? getImages(movie.poster_path) : "fallback.jpg";

    // Verificando trailer
    const trailer = movieVideos?.length ? movieVideos[0] : null;

    return (
        <>
            <Background image={backdropImage} />
            <Container>
                <Cover>
                    <img src={posterImage} alt={movie.title} />
                </Cover>
                <Info>
                    <h2>{movie.title}</h2>
                    <SpanGenres genres={movie.genres} />
                    <p>{movie.overview}</p>
                    <div>
                        <Credits credits={movieCredits} />
                    </div>
                </Info>
            </Container>
            <ContainerMovies>
                {trailer ? (
                    <div>
                        <h4>{trailer.name}</h4>
                        <iframe
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title="Youtube Video Player"
                            height="500px"
                            width="100%"
                        ></iframe>
                    </div>
                ) : (
                    <p>Sem trailer disponível</p>
                )}
            </ContainerMovies>
            {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
        </>
    );
}

export default Detail;

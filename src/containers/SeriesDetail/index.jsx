import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o ID da série na URL
import api from "../../services/api"; // Certifique-se de que o caminho da API está correto
import { getImages } from "../../utils/getImagens"; // Função para obter as imagens da API

import { Container, Background, Info, VideoWrapper } from "./styles"; // Seus estilos

function SeriesDetail() {
    const { id } = useParams(); // Obtém o ID da série da URL
    const [serie, setSerie] = useState(null);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        async function carregarDetalhes() {
            try {
                const response = await api.get(`tv/${id}`); // Rota para detalhes da série
                setSerie(response.data);

                // Buscando o trailer da série
                const trailerResponse = await api.get(`tv/${id}/videos`);
                setTrailer(trailerResponse.data.results.find((video) => video.type === "Trailer"));
            } catch (error) {
                console.error("Erro ao buscar detalhes da série:", error);
            }
        }

        carregarDetalhes();
    }, [id]); // A dependência ID garante que os dados sejam recarregados quando o ID mudar

    if (!serie) {
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            <Background>
                <img
                    src={getImages(serie.backdrop_path)}
                    alt={serie.name}
                />
            </Background>
            <Info>
                <h1>{serie.name}</h1>
                <p>{serie.overview}</p>
                <h3>Data de Lançamento:</h3>
                <p>{serie.first_air_date}</p>
                <h3>Gêneros:</h3>
                <p>{serie.genres.map((genre) => genre.name).join(", ")}</p>

                {trailer && (
                    <VideoWrapper>
                        <iframe
                            title="Trailer"
                            width="100%"
                            height="400px"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </VideoWrapper>
                )}
            </Info>
        </Container>
    );
}

export default SeriesDetail;

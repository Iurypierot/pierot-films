import api from './api';

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular');

    return results[0];
}

export async function getTopMovies() {
    const {
        data: { results }
    } = await api.get('/movie/top_rated');

    return results;
}

export async function getTopSeries() {
    const {
        data: { results }
    } = await api.get('/tv/top_rated');

    return results;
}

export async function getPopularSeries() {
    const {
        data: { results }
    } = await api.get('/tv/popular');

    return results;
}

export async function getTopPeople() {
    const {
        data: { results }
    } = await api.get('/person/popular');

    return results;
}

// Busca um filme pelo ID
export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
}

// Busca os créditos (elenco) do filme com tratamento de erros
export async function getMovieCredits(movieId) {
    try {
        // Fazendo a requisição para obter os créditos do filme
        const { data } = await api.get(`/movie/${movieId}/credits`);
        
        // Verifica se a resposta contém os dados de elenco (cast)
        if (!data.cast || data.cast.length === 0) {
            console.log("Nenhum crédito encontrado para este filme.");
            return []; // Retorna um array vazio caso não haja créditos
        }

        // Retorna o elenco do filme
        return data.cast;
    } catch (error) {
        // Se houver um erro na requisição, exibe o erro no console
        console.error("Erro ao buscar os créditos do filme:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Busca filmes similares
export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`);
    return results;
}

// Busca os vídeos do filme e garante que sempre terá um trailer
export async function getMovieVideos(movieId) {
    try {
        const { data } = await api.get(`/movie/${movieId}/videos`);
        console.log("Vídeos retornados pela API:", data.results);

        if (!data.results || data.results.length === 0) {
            console.log("Nenhum vídeo encontrado para este filme.");
            return [];
        }

        // Tenta encontrar o trailer dublado, se não existir, qualquer trailer
        const trailer = data.results.find(video =>
            video.name.toLowerCase().includes("trailer") || video.type === "Trailer"
        );

        if (!trailer) {
            console.log("Nenhum trailer encontrado, retornando trailer padrão.");
            // Se não encontrar nenhum trailer, retorne o primeiro trailer disponível
            return [data.results[0]]; 
        }

        return [trailer]; // Retorna o trailer encontrado
    } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        return [];
    }
}

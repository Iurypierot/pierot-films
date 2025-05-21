import { Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';
import Detail from '../containers/Detail';
import ArtistDetail from '../containers/ArtistDetail';  // Importe o novo componente de detalhes do artista

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} /> {/* Rota de detalhes de filme */}
                <Route path="/detalhe-artista/:id" element={<ArtistDetail />} /> {/* Nova rota de detalhes do artista */}
            </Route>
        </Routes>
    );
}

export default Router;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import BookDetail from './pages/BookDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

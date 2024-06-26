import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import BookDetail from './pages/Book-Detail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;

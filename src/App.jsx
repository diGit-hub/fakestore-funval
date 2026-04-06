import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/products/category/:category' element={<Home />} />
                <Route path='/products/:id' element={<ProductPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}

export default App

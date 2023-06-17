import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './pages/Article';
import ArticleDetails from './pages/ArticleDetails'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
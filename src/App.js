import './App.css';
import { Route, Routes } from 'react-router';

import ProductDetail from './page/ProductDetailPage';
import Navbar from './component/Navbar';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';


/*
1. 전체상품페이지, 로그인, 상품상세페이지
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼 누르면 로그인 페이지가 나온다.
4. 상품디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
5. 로그인이 되어 있을 경우 상품 디테일 페이지를 볼 수 있다.
6. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
7. 상품을 검색할 수 있다.
*/
function App() {
  return (
    <div>
      {/* 헤더 */}
      <Navbar />
      
      {/* 메인 */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

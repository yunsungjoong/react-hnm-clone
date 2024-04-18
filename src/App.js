import './App.css';
import { Route, Routes } from 'react-router';


import Navbar from './component/Navbar';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slick from './component/Slick';
import { useEffect, useState } from 'react';

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
  const[authenticate, setAuthenticate] = useState(false) // true면 로그인이 . 됨false면 로그인이 안됨
  useEffect(()=> {
    console.log("AAA",authenticate)
  },[authenticate])
  return (
    <div>
      {/* 헤더 */}
      <Navbar />
      {/* <Slick /> */}
      {/* 메인 */}
      <Routes>
          <Route path="/" element={<ProductAll />}/>
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path="/product/:id" element  ={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

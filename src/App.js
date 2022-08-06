import React from 'react';
import { Navbar } from './components';
import { Home} from './pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

const { Footer } = Layout


function App() {
  return (
    <div className="App">
      <Layout>
          <Navbar></Navbar>
        <Layout>
          <Routes>
            <Route exact path="/"  element={<Home />} />
          </Routes>
          <div className="footer">
            <Footer style={{ textAlign: 'center' }}>Crated By Mohamed Andaloussi ©2022</Footer>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

import { Layout } from 'antd';
import 'antd/dist/antd.css'
import { Content, Header } from 'antd/lib/layout/layout';
import logo from './img/logo/logo-xs-n.png';
import './App.scss';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Layout>
      <Header>
        <div className="logo">
          <img src={logo} alt="Logo de Center" />
        </div>
        <nav>
          <NavBar />
        </nav>
      </Header>
      <Content></Content>
    </Layout>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Main from './components/MainContent/Main';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Main from './components/Main/Main'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Advertisement from './components/Advertisement/Advertisement'
import SubContents from './components/SubContents/SubContents';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Navigation />
        <Main>
          <div className="subContentSection">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <div className="advertisementSection">
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;

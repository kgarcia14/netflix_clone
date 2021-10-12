import './App.css';
import './styles.css';
import requests from './requests';
import Row from './components/Row';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero fetchData={requests.getTrending}/>
      <div className="group-of-rows">
      <Row title={'Trending Now'} fetchData={requests.getTrending} />
      <Row title={'Netflix Originals'} fetchData={requests.getOriginals} />
      <Row title={'Action'} fetchData={requests.getActionMovies} />
      <Row title={'Comedy'} fetchData={requests.getComedyMovies} />
      <Row title={'Horror'} fetchData={requests.getHorrorMovies} />
      <Row title={'Romance'} fetchData={requests.getRomanceMovies} />
      <Row title={'History'} fetchData={requests.getFamilyMovies} />
      </div>
    </div>
  );
}

export default App;

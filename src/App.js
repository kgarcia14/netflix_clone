import './App.css';
import requests from './requests';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Row title={'Trending Now'} fetchData={requests.getTrending} />
      <Row title={'Netflix Originals'} fetchData={requests.getOriginals} />
      <Row title={'Top Rated'} fetchData={requests.getTopRated} />
      <Row title={'Action'} fetchData={requests.getActionMovies} />
      <Row title={'Comedy'} fetchData={requests.getComedyMovies} />
      <Row title={'Horror'} fetchData={requests.getHorrorMovies} />
      <Row title={'Romance'} fetchData={requests.getRomanceMovies} />
    </div>
  );
}

export default App;

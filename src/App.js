import {useState, useEffect} from 'react';
import Map from './Components/Map';
import Header from './Components/Header';
import Spinner from './Components/Spinner'
import './App.css';

function App() {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();
      const wildfiresData = events.filter((event)=>{
        return event.categories[0].id === 8;
      });
      setData(wildfiresData);
      console.log(wildfiresData);
      setIsLoading(false);
    } 
    fetchData();
  },[]);

  return (
    <div className="App">
      <Header/>
      {loading ? <Spinner/>:<Map eventData={data} /> }
    </div>
  );
}

export default App;

import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import List from './Components/List';
import CatModal from './Components/CatModal';
import Loader from './Components/Loader';


function App() {
  // states 
  const [catData, setCatData] = useState([]);
  const [term, setTerm] = useState("")
  const [toggleModal, SetToggleModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [modalData, setModalData] = useState([]);

  // api call
  useEffect(() => {
    async function getCats() {
      setShowLoader(true);
      try {
        const results = await axios.get("https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_eq1jROweP2UYCPWOVNj9aMOFZowTGNNCxfJyZV6mWt9a2K1zM1lJOzIANgAldPma");
        setCatData(results.data);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      } finally {
        setShowLoader(false);
      }
    }
    getCats();
  }, []);

  // retrieve data for modal 
  function modalDataRetrieve(value, status) {
    setModalData(value)
    SetToggleModal(status)
  };

  // close modal 
  function modalClose(value) {
    SetToggleModal(value)
  };

  return (
    <div className="App">
      <Header term={term} setTerm={setTerm} />
      {showLoader ? <Loader /> : null}
      <List catData={catData} modalDataRetrieve={modalDataRetrieve} term={term} />
      {toggleModal ? <CatModal modalData={modalData} modalClose={modalClose} /> : null}
    </div>
  );
}

export default App;

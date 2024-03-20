import "./App.css";
import "../node_modules/bulma/css/bulma.css";
import SearchHeader from "./SearchHeader";
import searchImages from './api'
import {useState} from 'react'
import ImageList from "./Components/ImageList";

function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (txt) => {
    const result = await searchImages(txt);
    setImages(result)
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList image={images}/>
    </div>
  );
}

export default App;

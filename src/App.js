import axios, { Axios } from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const APP_ID = "eb46502d" ;
  const APP_KEY = "99f4d2696e82a58420b29ca29c1bed62 ";
  const [recipes , setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`;

  // const getRecipeInfo = () =>{
  //     fetch(url)
  //     .then(res => res.data)
  //     .then( data => console.log(data.data.hits))
  // }



  const getRecipeInfo = async () => {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }
  return (
    <div className="App">
      <h1 onClick={getRecipeInfo}><u>Food Recipe Application</u>🥗</h1>
      <div className="app__searchForm">
        <input type="text" placeholder='type the ingredient' autoComplete='off' className='app__input' />

        <select name="" id="" className="app__healthLabels">
          <option value="vegan">Vegan</option>

        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>

    </div>
  );
}

export default App;

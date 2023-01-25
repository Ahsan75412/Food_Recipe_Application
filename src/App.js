import axios, { Axios } from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const APP_ID = "eb46502d";
  const APP_KEY = "99f4d2696e82a58420b29ca29c1bed62 ";
  const [query, setQuery] = useState('');
  const [healthLable, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLable}`;

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


  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();

  }



  return (
    <div className="App">
      <h1 onClick={getRecipeInfo}><u>Food Recipe Application</u>🥗</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>

        <input type="text"
          placeholder='type the ingredient'
          autoComplete='off'
          className='app__input'
          value={query}
          onChange={(e) => { setQuery(e.target.value) }}
        />

        <select name="" id="" className="app__healthLabels">
          <option value="vegan" onClick={() => { setHealthLabel("vegan") }}>Vegan</option>
          <option value="vegetarian" onClick={() => { setHealthLabel("vegetarian") }}>Vegetarian</option>
          <option value="low-sugar" onClick={() => { setHealthLabel("low-sugar") }}>low-sugar</option>
          <option value="dairy-free" onClick={() => { setHealthLabel("dairy-free") }}>dairy-free</option>
          <option value="immuno-supportive" onClick={() => { setHealthLabel("immuno-supportive") }}>immuno-supportive</option>
          <option value="wheat-free" onClick={() => { setHealthLabel("wheat-free") }}>wheat-free</option>
        </select>



        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>

    </div>
  );
}

export default App;

import React,{useState,useEffect,useContext} from "react";
import "../App.css";
import {UserContext } from "../context/context";
import {Redirect} from "react-router-dom";
import Axios from "axios";
import Recipie from "./recipie";

const App_ID ='63003c0f';
const App_Keys ='a7864a9e161a5658758e6011fe254bba';

const Home =()=>{

  const context =useContext(UserContext);
  const [recipes,setRecipes] =useState([]);
  const [search,setSearch] =useState('');
  const [query,setQuery] =useState('chicken');

  

  useEffect(() => {
    const fetchDetails =async() =>{
        const data = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Keys}&from=0&to=5&calories=591-722&health=alcohol-free`)
  
        console.log(data.hits);
        setRecipes(data.hits);
    }

  }, [query])

  const updateSearch = e =>{
      setSearch(e.target.value);
  } 

  const getSearch = e =>{
      e.preventDefaults();
      setQuery(search);
      setSearch('');
  }

  if(!context.user){
      return <Redirect to="/signIn" />
  }

    return (
        <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form> 
      <div className="recipies">

            {recipes && recipes.length > 0
            ?
            recipes.map((recipe)=> ( 
        <Recipie 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image ={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} />
       ))
       :
       "Loading... !"
     }
       
       </div>

       </div>   




    );
};

export default Home;


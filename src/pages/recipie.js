import React, { useContext } from 'react';
import style from "./home.module.css";
import {UserContext} from "../context/context";
import {Redirect}from "react-router-dom";

const Recipie=({title,calories,image,ingredients})=> {
    const context =useContext(UserContext);


   if(!context.user){
       return <Redirect to ="signIn" />
   }
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
             <ol>
                {ingredients.map((ingredient) =>{
                    return(
                    <li>{ingredient.text}</li>
                    )
                    })}
            </ol> 
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipie;
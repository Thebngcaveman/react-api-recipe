import React, { Component } from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, calories, img, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Estimated Calories:{calories.toFixed(0)}</p>
      <img className={style.image} src={img} />
    </div>
  );
}

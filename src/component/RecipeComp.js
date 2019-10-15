import React, { Fragment } from "react";

const RecipeComp = props => {
  return (
    <Fragment>
      <div className="news-main">
        {props.recipes.map(recipe => {
          return (
            <div className="news-comp-card" key={recipe.recipe_id}>
              <header>
                <img
                  className="thumbnail"
                  src={recipe.image_url}
                  alt="Image can't be fetched"
                />
                <h3 className="heading">{recipe.title}</h3>
              </header>
              <section>
                <p>{recipe.publisher}</p>
              </section>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default RecipeComp;

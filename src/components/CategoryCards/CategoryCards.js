import React from "react";
import "./categorycards.css"

const CategoryCards = ({handleClick}) => {
    const categories = ["PEOPLE","PLANETS","FILMS","SPECIES"]
  

    const handleSelection = (e) => {
        let selectedCategory = e.currentTarget.textContent.toLowerCase()
        handleClick(selectedCategory)
    }

    return ( 
        <div className="category-cards">
        {categories.map(category => 
            <div className="individual-card" key={category} onClick={handleSelection}>{category}</div>
        )
        }
        </div>
     );
}
 
export default CategoryCards;
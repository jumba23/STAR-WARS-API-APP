import React ,{useState} from "react";
import Links from "../Links/Links"
import "./categorycards.css"

const CategoryCards = ({handleClick}) => {
    const categories = ["PEOPLE","PLANETS","FILMS","SPECIES"]
  

    const handleSelection = (e) => {
        handleClick(e.currentTarget.textContent)
    }

    return ( 
        <div className="category-cards" onClick={handleSelection}>
        {categories.map(category => 
            <div className="individual-card" key={category}>{category}</div>
        )
        }
        </div>
     );
}
 
export default CategoryCards;
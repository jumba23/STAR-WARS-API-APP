import "./categorycards.css"

const CategoryCards = ({handleClick}) => {
    const links = [
        {title: "PEOPLE", url: "https://swapi.dev/api/people/"},
        {title: "PLANETS", url: "https://swapi.dev/api/planets/"},
        {title: "FILMS", url: "https://swapi.dev/api/films/"},
        {title: "SPECIES", url: "https://swapi.dev/api/species/"}
    ]

    const handleSelection = (e) => {
        handleClick(e.currentTarget.textContent)
    }

    return ( 
        <div className="category-cards">
        {links.map(link => 
            <div className="individual-card" onClick={handleSelection} key={link.title}>{link.title}</div>
        )
        }
        </div>
     );
}
 
export default CategoryCards;
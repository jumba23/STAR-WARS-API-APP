import Link from "../Links/Links"

const Nav = () => {

    const links = [
        {title: "PEOPLE", url: "https://swapi.dev/api/people/"},
        {title: "PLANETS", url: "https://swapi.dev/api/planets/"},
        {title: "FILMS", url: "https://swapi.dev/api/films/"},
        {title: "SPECIES", url: "https://swapi.dev/api/species/"}
    ]
    
    return ( <nav>
        {links.map((link) => (
          <Link link={link} key={link.title} />
        ))}
      </nav>);
}
 
export default Nav;
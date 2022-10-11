import "./links.css"

const Links = ({link}) => {
    const { title, url } = { ...link };

    return (
      <a className="navLink" href={url}>
        {title}
      </a>
    );
}
 
export default Links;
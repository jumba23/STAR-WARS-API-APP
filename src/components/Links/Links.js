import "./links.css";

const Links = ({ category, setCategory }) => {
  return (
    <button
      className="navLink"
      onClick={(e) => setCategory(e.currentTarget.textContent.toLowerCase())}
    >
      {category.toUpperCase()}
    </button>
  );
};

export default Links;

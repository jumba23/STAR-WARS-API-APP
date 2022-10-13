import Link from "../Links/Links";

const Nav = ({ categories, setCategory }) => {
  return (
    <nav>
      {categories.map((category) => (
        <Link
          category={category}
          key={category}
          setCategory={setCategory}
        />
      ))}
    </nav>
  );
};

export default Nav;

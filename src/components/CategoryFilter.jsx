import "../styles/CategoryFilter.css";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home",
];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
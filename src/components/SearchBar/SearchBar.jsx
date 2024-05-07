import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchBarForm}>
        <input
          className={css.searchBar}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBarBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

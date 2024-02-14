import { RiSearchLine } from "react-icons/ri";
import "../sass/components/search.scss"
const Search = () => {
  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <input type="search" placeholder="Search your pokemon" />
          <button>
            <RiSearchLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;

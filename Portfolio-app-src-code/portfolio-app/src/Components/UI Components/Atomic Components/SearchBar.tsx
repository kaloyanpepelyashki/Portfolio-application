import { ChevronRight } from "@mui/icons-material";

type SearchBarProps = {
  searchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchFunction }) => {
  return (
    <div className="search-bar-component-wrapper">
      <ChevronRight
        className="search-bar-icon"
        color="inherit"
        fontSize="large"
      />
      <input
        onChange={searchFunction}
        type="text"
        className="search-bar-input"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;

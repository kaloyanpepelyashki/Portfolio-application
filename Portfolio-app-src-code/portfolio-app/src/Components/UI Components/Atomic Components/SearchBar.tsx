import { ChevronRight } from "@mui/icons-material";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-component-wrapper">
      <ChevronRight
        className="search-bar-icon"
        color="inherit"
        fontSize="large"
      />
      <input type="text" className="search-bar-input" placeholder="Search" />
    </div>
  );
};

export default SearchBar;

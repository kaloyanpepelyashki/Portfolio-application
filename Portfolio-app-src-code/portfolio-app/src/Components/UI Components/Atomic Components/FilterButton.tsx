import { FilterAlt } from "@mui/icons-material";
import { Fab } from "@mui/material";

type FilterButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const FilterButton: React.FC<FilterButton> = ({ onClick }) => {
  return (
    <Fab onClick={onClick} variant="extended" size="small">
      <div className="filter-button-inner-content">
        <FilterAlt />
        <p className="filter-button-text">Filter</p>
      </div>
    </Fab>
  );
};

export default FilterButton;

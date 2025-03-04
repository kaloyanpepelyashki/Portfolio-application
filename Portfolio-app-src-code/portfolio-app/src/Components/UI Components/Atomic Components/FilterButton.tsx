import { FilterAlt } from "@mui/icons-material";
import { Fab } from "@mui/material";
type FilterButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

const FilterButton: React.FC<FilterButton> = ({ onClick, isActive }) => {
  return (
    <Fab
      className="filter-button"
      sx={{
        bgcolor: isActive ? "#ffc745" : "",
        "&:hover": { bgcolor: "#fcec3b" },
      }}
      onClick={onClick}
      variant="extended"
      size="small"
    >
      <div className="filter-button-inner-content">
        <FilterAlt />
        <p className="filter-button-text">Filter</p>
      </div>
    </Fab>
  );
};

export default FilterButton;

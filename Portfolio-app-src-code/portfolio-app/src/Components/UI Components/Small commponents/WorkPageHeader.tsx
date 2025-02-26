import { useEffect, useState } from "react";

import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import FilterButton from "../Atomic Components/FilterButton";

//! Delete later
//For prototyping purposes
const languages = [
  { lng: "html", label: "HTML" },
  { lng: "css", label: "CSS" },
  { lng: "js", label: "JavaScript" },
  { lng: "react", label: "React" },
  { lng: "cs", label: "C#" },
  { lng: "ts", label: "TypeScript" },
  { lng: "php", label: "PHP" },
  { lng: "sql", label: "SQL" },
];

type WorkPageHeaderProps = {
  filterLanguages: Array<string>;
  setFilterLanguages: React.Dispatch<React.SetStateAction<Array<string>>>;
};

const WorkPageHeader: React.FC<WorkPageHeaderProps> = ({
  filterLanguages,
  setFilterLanguages,
}) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  //Handles the open trigger of the Menu component
  function handleOpenMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchor(event.currentTarget);
  }

  //Handles the close event of the Menu
  function handleCloseMenu() {
    setAnchor(null);
  }

  const open = Boolean(anchor);

  useEffect(() => {
    console.log(filterLanguages);
  }, [filterLanguages]);

  const handleChangeState = (e, checked: boolean) => {
    if (checked) {
      setFilterLanguages((prevState) => [...prevState, e.target.value]);
    } else {
      setFilterLanguages((prevState) =>
        prevState.filter((item) => item != e.target.value)
      );
    }
  };

  return (
    <div className="project-page-top-section-holder">
      <h2 className="comment-like-heading work-comment-heading">//My work</h2>
      <FilterButton onClick={handleOpenMenu} />
      <Menu
        anchorEl={anchor}
        id="account-menu"
        open={open}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 320,
                height: 320,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <p className="filter-menu-item">Private</p>
        </MenuItem>
        <MenuItem>
          <p className="filter-menu-item">Public</p>
        </MenuItem>
        <Divider />
        <FormGroup>
          {languages.map((language) => {
            return (
              <MenuItem>
                <FormControlLabel
                  value={language.lng}
                  control={
                    <Checkbox
                      onChange={handleChangeState}
                      checked={filterLanguages.some(
                        (lng) => lng == language.lng
                      )}
                    />
                  }
                  label={<p className="filter-menu-item">{language.label}</p>}
                  labelPlacement="end"
                />
              </MenuItem>
            );
          })}
        </FormGroup>
      </Menu>
    </div>
  );
};

export default WorkPageHeader;

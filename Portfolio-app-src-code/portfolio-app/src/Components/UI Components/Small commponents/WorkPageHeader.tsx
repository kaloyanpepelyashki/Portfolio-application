import { useEffect, useState } from "react";

import {
  Divider,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import FilterButton from "../Atomic Components/FilterButton";
import programmingTechnologies from "../../../Data/ProgrammmingLanguages";
import SearchBar from "../Atomic Components/SearchBar";

//Fetching the different programming technologies and languages from the the external file.
const languages = Object.values(programmingTechnologies);

type WorkPageHeaderProps = {
  filterLanguages: Array<string>;
  setFilterLanguages: React.Dispatch<React.SetStateAction<Array<string>>>;
  privacyFilter: number;
  setPrivacyFilter: React.Dispatch<React.SetStateAction<number>>;
  searchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const WorkPageHeader: React.FC<WorkPageHeaderProps> = ({
  filterLanguages,
  setFilterLanguages,
  privacyFilter,
  setPrivacyFilter,
  searchFunction,
}) => {
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
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
    if (filterLanguages.length > 0 || privacyFilter > 1) {
      setIsFilterActive(true);
    } else {
      setIsFilterActive(false);
    }
  }, [filterLanguages, privacyFilter]);

  //Handles change in the checkbox group - the languages filter checkboxes
  const handleCheckBoxChangeState = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setFilterLanguages((prevState) => [...prevState, e.target.value]);
    } else {
      setFilterLanguages((prevState) =>
        prevState.filter((item) => item != e.target.value)
      );
    }
  };

  //Handles change in the RadioGroup - the privacy filter radio buttons
  const handleRadioCheckState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyFilter(Number(e.target.value));
  };

  return (
    <div className="project-page-top-section-holder">
      <h2 className="comment-like-heading work-comment-heading">//My work</h2>
      <div className="filter-search-bar-wrapper">
        <div className="search-bar-holder">
          <SearchBar searchFunction={searchFunction} />
        </div>
        <FilterButton isActive={isFilterActive} onClick={handleOpenMenu} />
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
                padding: "10px 25px",
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
          <RadioGroup onChange={handleRadioCheckState}>
            <MenuItem>
              <FormControlLabel
                value={1}
                control={<Radio checked={privacyFilter == 1} />}
                label={<p className="filter-menu-item">All (default)</p>}
                labelPlacement="end"
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                value={2}
                control={<Radio checked={privacyFilter == 2} />}
                label={<p className="filter-menu-item">Public</p>}
                labelPlacement="end"
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                value={3}
                control={<Radio checked={privacyFilter == 3} />}
                label={<p className="filter-menu-item">Private</p>}
                labelPlacement="end"
              />
            </MenuItem>
          </RadioGroup>
          <Divider />
          <FormGroup>
            {languages.map((language) => {
              return (
                <MenuItem>
                  <FormControlLabel
                    value={language.lng}
                    control={
                      <Checkbox
                        onChange={handleCheckBoxChangeState}
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
    </div>
  );
};

export default WorkPageHeader;

import { useState } from "react";

import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
} from "@mui/material";
import FilterButton from "../Atomic Components/FilterButton";
import { Check, CheckBox } from "@mui/icons-material";

const languages = [
  { lng: "js", label: "JavaScript" },
  { lng: "cs", label: "C#" },
  { lng: "ts", label: "TypeScript" },
  { lng: "php", label: "PHP" },
];

const WorkPageHeader: React.FC = () => {
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
                  control={<CheckBox />}
                  label={<p className="filter-menu-item">{language.label}</p>}
                  labelPlacement="end"
                  checked={false}
                />
              </MenuItem>
            );
          })}
          {/* <MenuItem>
            <FormControlLabel
              value="end"
              control={<CheckBox />}
              label="typescript"
              labelPlacement="end"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="javascript"
              control={<CheckBox />}
              label={<p className="filter-menu-item">Javascript</p>}
              labelPlacement="end"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel control={<CheckBox />} label="typescript" />
          </MenuItem> */}
        </FormGroup>
      </Menu>
    </div>
  );
};

export default WorkPageHeader;

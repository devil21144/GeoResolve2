import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-dvh w-dvw">
      <nav className="h-16 bg-[#211A4D] flex items-center justify-between w-dvw">
        <div className="flex items-center">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Search Related Officer</MenuItem>
            <MenuItem onClick={handleClose}>Policies</MenuItem>
          </Menu>
          <div className="h-16 flex items-center ms-3">
            <img src="./favicon.png" alt="logo" className="h-full" />
          </div>
        </div>
        <div className="me-5 pr-5">
          <Button
            onClick={() => navigate("/login")}
            variant="contained"
            sx={{
              backgroundColor: "#2282ce",
              "&:hover": { backgroundColor: "#165a91" },
            }}
          >
            signup/login
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Home;

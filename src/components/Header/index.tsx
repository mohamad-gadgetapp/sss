import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import { styles } from "./style.js";
import logo from "../../assets/southLogo.png";
import user from "../../assets/user.svg";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface HeaderProps {
  title?: string;
  valid?: boolean;
}

const Header = ({ title,valid }: HeaderProps) => {
  const navigate = useNavigate();
  const onClickNavigate = (page: string) => {
    navigate(`${page}`);
  };
  const handleClickNewTab = (url: string) => {
    window.open(url, "_blank", 'toolbar=0,location=0,menubar=0');
  };

  const video = () => {
    
  }
  return (
    <AppBar style={styles.appBar} position="static" className="header-style">
      <div>{title}</div>
      <Toolbar>
        <Typography
          onClick={() => onClickNavigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <img src={logo} className="img-style" />
        </Typography>
        <div className="nav-bar-container">
                <div className="dropdowns-header-div">
          {
            valid === true && (
                <>
                  <div style={styles.userName} className="btn-text-style">
                    Trading
                    <ArrowDropDownIcon />
                  </div>
                  <div style={styles.userName} className="btn-text-style">
                    Operations
                    <ArrowDropDownIcon />
                  </div>
                  <div style={styles.userName} className="btn-text-style">
                    Admin
                    <ArrowDropDownIcon />
                  </div>
                  <div style={styles.userName} className="btn-text-style">
                    Static
                    <ArrowDropDownIcon />
                  </div>
                  <div style={styles.userName} className="btn-text-style">
                    Locate
                    <ArrowDropDownIcon />
                  </div>
                </>
              )
           }
                </div>
          <div
            style={styles.navBarButton}
            className="btn-text-style"
            onClick={() => onClickNavigate("/aboutUsPage")}
          >
            <div className="stagingDiv" onClick={video}>Staging</div>
          </div>
          <div style={styles.userBar} className="appBar">
            <div className="userBarIcon" onClick={() => onClickNavigate("/tradeBlotter")}>
              <img src={user} className="profileHeaderIcon" />
            </div>
            <span style={styles.userName} className="btn-text-style">
              <div>
                John Doe
                <ArrowDropDownIcon />
              </div>
            </span>
          </div>
        </div>
        <div
          className="hamBurgerIcon c-pointer"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="dropdown show">
            <div
              className="dropdown"
              style={{
                cursor: "pointer",
              }}
            >
              <div>
                <MenuIcon />
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <div
                  className="dropdown-item ai-icon"
                  style={{ marginBottom: "0.2rem" }}
                >
                  <div
                    className="ms-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="loanHeader-NavigatePage" onClick={() => onClickNavigate("/contract")}>
                      Contract
                    </div>
                    <a onClick={() => handleClickNewTab("/contract")}>
                      <OpenInNewIcon />
                    </a>
                  </div>
                </div>
                <div
                  className="dropdown-item ai-icon"
                  style={{ marginBottom: "0.2rem" }}
                >
                  <div
                    className="ms-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="loanHeader-NavigatePage" onClick={() => onClickNavigate("/loan")}>Loan</div>
                    <div onClick={() => handleClickNewTab("/loan")}>
                      <OpenInNewIcon />
                    </div>
                  </div>
                </div>
                <div
                  className="dropdown-item ai-icon hamburgerMenu-dropdown"
                  style={{ marginBottom: "0.1rem" }}
                  onClick={() => onClickNavigate("/aboutUsPage")}
                >
                  <div
                    className="ms-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>About Us</div>
                  </div>
                </div>
                <div
                  className="dropdown-item ai-icon hamburgerMenu-dropdown"
                  style={{ marginBottom: "0.1rem" }}
                  onClick={() => onClickNavigate("/contactUs")}
                >
                  <div
                    className="ms-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Contact Us</div>
                  </div>
                </div>
                <div
                  className="dropdown-item ai-icon hamburgerMenu-dropdown"
                  style={{ marginBottom: "0.1rem" }}
                >
                  <div
                    className="ms-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>John Smith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

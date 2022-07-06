
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

interface HeaderProps {
	title?: string;
}

const Header = ({ title }: HeaderProps) => {
	const navigate = useNavigate();
	const onClickNavigate = (page: string) => {
		navigate(`${page}`)
	}
	return (
		<AppBar style={styles.appBar} position="static" className="header-style">
			<div>{title}</div>
			<Toolbar>
				<Typography onClick={() => onClickNavigate("/")} variant="h6"
					component="div" sx={{ flexGrow: 1 }}>
					<img src={logo} className="img-style"/>
				</Typography>
				<div className="nav-bar-container">
					<div style={styles.navBarButton} className="btn-text-style" color="inherit" onClick={() => onClickNavigate("/aboutUsPage")}>About Us</div>
					<div style={styles.navBarButton} className="btn-text-style" color="inherit" onClick={() => onClickNavigate("/contactUs")}>Contact Us</div>
					<div style={styles.userBar}>
						<div style={styles.userBarIcon}>
							<img src={user} className="profileHeaderIcon"/>
						</div>
						<span style={styles.userName} className="btn-text-style">John Smith</span>
					</div>
				</div>
					<div className="hamBurgerIcon">
					<MenuIcon />
					</div>
			</Toolbar>
		</AppBar>
	);
}
export default Header;
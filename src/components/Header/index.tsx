
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
	title: string;
}

const Header = ({ title }: HeaderProps) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6"
					component="div" sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
				<Button color="inherit">Login</Button>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
export default Header;
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";

import LoginIcon from "@mui/icons-material/Login";
import Navbar from "./Navbar";
import { useAppStore } from "../appStore";
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  // USE FOR THE DRAWER OPEN AND CLOSE 
  const setOpen =useAppStore((state)=>state.updateOpen);
  const open =useAppStore((state)=>state.dopen);
  



















  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
<div>
<Navbar/>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" onClick={() => setOpen(!open)} open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>


        <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            component={Link} // Use Link component to handle navigation
            to="/Edit/:id"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href="/Profile.jsx"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Profile Details "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>




        <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            component={Link} // Use Link component to handle navigation
            to="/Edit"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href="/Edit/:id"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Update Details"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>











          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Home")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Employee Details "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/AddEmployee")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Employee "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/AboutUs")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Contact")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Login")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <LoginIcon />
              </ListItemIcon>
              <ListItemText
                primary="Login"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography paragraph>
        <h1>WELCOME TO THE HRMS</h1>
        </Typography>
      </Box>
    </Box>
</div>
    
  );
}

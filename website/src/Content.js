import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StudentList from './StudentList'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    heroContent: {
    	backgroundColor: theme.palette.background.paper,
    	padding: theme.spacing(8, 0, 6),
  	},
    toolbar: theme.mixins.toolbar,
  }),
);

export default function Content() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Simple CRUD React
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <ListItem button>
            	<ListItemIcon><HomeIcon /></ListItemIcon>
              	<ListItemText primary="Dashboard" />
            </ListItem>
            {/*<ListItem button>
            	<ListItemIcon><AddBoxIcon /></ListItemIcon>
              	<ListItemText primary="Add Student" />
            </ListItem>*/}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.header}>
        	<Container maxWidth="sm">
        		<Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
	              CRUD Website
	            </Typography>
	            <Typography variant="h6" align="center" color="textSecondary" paragraph>
	              A Simple CRUD React MVC Website, using MySQL as Database
	            </Typography>
	        </Container>
        </div>
        <Divider />
        <StudentList />
      </main>
    </div>
  );
}

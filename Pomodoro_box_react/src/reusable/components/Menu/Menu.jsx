import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import navItems from '../../../common/staticData/navItems'
import { menuStyles } from './menuStyles'

function Menu({ mobileOpen, handleDrawerToggle, handleDrawerClose }) {
  const classes = menuStyles()
  const drawer = (
    <div>
      <List className={classes.navList}>
        {navItems.map((item) => (
          <Link to={item.slug} key={item.id} onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>{item.icon('secondary')}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

Menu.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
}

export default Menu

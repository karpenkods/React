import { makeStyles } from '@material-ui/core/styles'

export const drawerWidth = 200

export const menuStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    padding: '10px 0',
    textAlign: 'center',
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.palette.text.secondary,
  },
  drawerPaper: {
    width: drawerWidth,
    height: '70%',
  },
  btnWrap: {
    justifyContent: 'center',
  },
  navList: {
    padding: '20px 0',
    color: theme.palette.text.secondary,
  },
}))

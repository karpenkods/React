import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo-header.svg'
import equalizer from '../../../assets/img/equalizer.svg'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import home from '../../../assets/img/home.svg'
import setting from '../../../assets/img/setting.svg'
import info from '../../../assets/img/info.svg'

const useStyles = makeStyles((theme) => ({
  appMenu: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 10px 63px',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'start',
    margin: '0 10px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
      margin: '0 auto',
      minWidth: '90%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export function Header({ handleDrawerToggle }) {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appMenu}>
      <Toolbar className={`container ${classes.header}`}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <a
          className="header__logo link-menu"
          href="https://ru.wikipedia.org/wiki/Метод_помидора"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img className="header__logo__img" src={logo} alt="pomodoro_box" />
        </a>
        <Link
          to="/main"
          className="link-menu header__link"
          style={{ backgroundImage: `url(${home})`, color: 'inherit' }}
        >
          Главная
        </Link>
        <Link
          to="/statistics"
          className="link-menu header__link"
          style={{ backgroundImage: `url(${equalizer})`, color: 'inherit' }}
        >
          Статистика
        </Link>
        <Link
          to="/setting"
          className="link-menu header__link"
          style={{ backgroundImage: `url(${setting})`, color: 'inherit' }}
        >
          Настройки
        </Link>
        <Link
          to="/info"
          className="link-menu header__link"
          style={{ backgroundImage: `url(${info})`, color: 'inherit' }}
        >
          О программе
        </Link>
      </Toolbar>
    </AppBar>
  )
}

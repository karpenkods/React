import MainPage from '../../pages/mainPage/MainPage'
import StatisticsPage from '../../pages/statisticsPage/StatisticsPage'
import SettingPage from '../../pages/settingPage/SettingPage'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'
import InfoPage from '../../pages/infoPage/infoPage'

const nalItems = [
  {
    id: '13main',
    name: 'Главная',
    slug: '/main',
    icon: mainIcon,
    page: Main,
  },
  {
    id: '23statistics',
    name: 'Статистика',
    slug: '/statistics',
    icon: statisticsIcon,
    page: Statistics,
  },
  {
    id: '03settings',
    name: 'Настройки',
    slug: '/setting',
    icon: settingsIcon,
    page: Setting,
  },
  {
    id: '23info',
    name: 'О программе',
    slug: '/info',
    icon: infoIcon,
    page: Info,
  },
]

function mainIcon(color) {
  return <HomeIcon color={color} />
}

function statisticsIcon(color) {
  return <EqualizerIcon color={color} />
}

function settingsIcon(color) {
  return <SettingsIcon color={color} />
}

function infoIcon(color) {
  return <InfoIcon color={color} />
}

function Main() {
  return <MainPage />
}

function Statistics() {
  return <StatisticsPage />
}

function Setting() {
  return <SettingPage />
}

function Info() {
  return <InfoPage />
}

export default nalItems

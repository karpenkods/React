import './infoPage.scss'
import { Divider, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import rulesList from '../../common/staticData/instructionList'

function InfoPage() {
  return (
    <section className="container">
      <Helmet>
        <title>{'pomodoro_box | О программе'}</title>
      </Helmet>
      <Typography variant="h1" color="secondary" className="heading">
        Добро пожаловать в pomodoro_box
      </Typography>

      <Divider className="mb-30" />

      <Typography paragraph>
        Метод «Помодоро» — это техника управления временем, разработанная студентом колледжа
        Франческо Чирилло в 1980-х годах. В основе техники, названной от итальянского слова
        «помидор», лежат многочисленные временные интервалы, распределённые в течение дня и
        обозначенные на кухонном таймере в форме помидора, который Чирилло использовал сам, когда
        оттачивал свой метод управления временем.
      </Typography>

      <Typography paragraph>
        Базовая структура техники «Помодоро», призванной быть простой в применении и в то же время
        давать большие преимущества с точки зрения производительности, заключается в следующем:
      </Typography>
      <List>
        {rulesList.map((item, index) => (
          <ListItem key={index} style={{ paddingLeft: '0' }}>
            <ListItemIcon style={{ maxWidth: '1rem', marginRight: '10px' }}>
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no"
                alt="tomato"
              />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </section>
  )
}

export default InfoPage

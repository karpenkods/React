import { Divider, Grid, Typography } from '@material-ui/core'
import { capitalizeFirstLetter, getNameOfDaysPeriod } from '../../common/utils/formatUtils'
import { TodoList } from '../../reusable/components/TodoList/TodoList'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useState } from 'react'
import { PomodoroTimer } from '../../reusable/components/PomodoroTimer/PomodoroTimer'
import { Helmet } from 'react-helmet'
import { INITIAL_SETTINGS } from '../../common/utils/constants'

function MainPage() {
  // eslint-disable-next-line no-unused-vars
  const [settings, setSettings] = useState(reactLocalStorage.getObject('settings'))
  const [todos, setTodos] = useState(reactLocalStorage.getObject('todos') || {})
  const [currentTask, setCurrentTask] = useState({})

  return (
    <section className="container flex-column">
      <Helmet>
        <title>{'pomodoro_box | Главная'}</title>
      </Helmet>
      <Typography variant="h1" color="secondary" className="heading">
        {getNameOfDaysPeriod()},{' '}
        {capitalizeFirstLetter(settings.userName || INITIAL_SETTINGS.userName)}
      </Typography>

      <Divider className="mb-30" />

      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TodoList todos={todos} setTodos={setTodos} setCurrentTask={setCurrentTask} />
        </Grid>

        <Grid item xs={12} md={6}>
          <PomodoroTimer
            currentTask={currentTask}
            setTodos={setTodos}
            setCurrentTask={setCurrentTask}
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default MainPage

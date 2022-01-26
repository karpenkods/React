import {
  Button,
  FormHelperText,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
} from '@material-ui/core'
import { ToDoFormControl, ToDoInput, ToDoLabel } from '../../customMUI/customInput'
import makeBtnStyles from '../../customMUI/makeBtnStyles'
import { useEffect, useState } from 'react'
import { TodoItemText } from '../../customMUI/todoItemText'
import todoListStyles from './todoListStyles'
import { nanoid } from 'nanoid'
import { reactLocalStorage } from 'reactjs-localstorage'
import { getAllTime } from '../../../common/utils/formatUtils'
import { validateNumber, validateText } from '../../../common/utils/valitatorUtils'
import { TodoPopover } from './TodoPopover'
import { sortDict, sortDictAndRemove } from '../../../common/utils/taskHelpers'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

import { TabPanel } from '../../customMUI/customTabs'

export function TodoList({ todos, setTodos, setCurrentTask }) {
  const classes = todoListStyles()
  const btnClasses = makeBtnStyles()
  const theme = useTheme()
  // eslint-disable-next-line no-unused-vars
  const [settings, setSettings] = useState(reactLocalStorage.getObject('settings'))
  const [tabsKey, setTabsKey] = useState(0)

  // todoList
  const [newTask, setNewTask] = useState({})
  const [formTouched, setFormTouched] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [tasksInWork, setTaskInWork] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tasksCompleted, setTaskCompleted] = useState([])

  const handleChangeInput = (ev, key, validation, min = 5, max = 50) => {
    setNewTask({ ...newTask, [key]: ev.target.value })
    setFormErrors({ ...formErrors, [key]: validation(ev.target.value, min, max) })
  }

  function handleTouched(ev, key) {
    ev.preventDefault()
    setFormTouched({ ...formTouched, [key]: true })
  }

  const onSubmitTask = (ev) => {
    ev.preventDefault()
    const errors = {
      title: validateText(newTask?.title, 5, 50),
      tomatoCount: validateNumber(newTask?.tomatoCount, 1, 14),
    }

    if (Object.values(errors).reduce((sum, item) => sum + item, 0) < 0) {
      const id = nanoid(10)
      const todosFromState = reactLocalStorage.getObject('todos')
      todosFromState[id] = {
        ...newTask,
        id,
        order: Object.keys(todosFromState).length + 1,
        spentTomatoes: 0,
        spentPauses: 0,
        done: false,
      }
      setTodos(todosFromState)
      reactLocalStorage.setObject('todos', todosFromState)
      setNewTask({})
      setFormTouched({})
    }
    setFormErrors(errors)
    setFormTouched({
      title: true,
      tomatoCount: true,
    })
  }

  // управление задачами

  function setTaskUp(id) {
    if (todos[id].order !== 1) {
      const sortedTasks = sortDict(reactLocalStorage.getObject('todos'))
      sortedTasks[
        Object.values(sortedTasks).find((item) => item.order === sortedTasks[id].order - 1).id
      ].order += 1
      sortedTasks[id].order -= 1
      setTodos(sortedTasks)
      reactLocalStorage.setObject('todos', sortedTasks)
    }
  }

  function setTaskDown(id) {
    if (todos[id].order !== Object.keys(todos).length) {
      const sortedTasks = sortDict(reactLocalStorage.getObject('todos'))
      sortedTasks[
        Object.values(sortedTasks).find((item) => item.order === sortedTasks[id].order + 1).id
      ].order -= 1
      sortedTasks[id].order += 1
      setTodos(sortedTasks)
      reactLocalStorage.setObject('todos', sortedTasks)
    }
  }

  function removeTask(id) {
    const sortedTasks = sortDictAndRemove(reactLocalStorage.getObject('todos'), id)
    setTodos(sortedTasks)
    reactLocalStorage.setObject('todos', sortedTasks)
  }

  function editTask(id, value) {
    const editedTaskList = reactLocalStorage.getObject('todos')
    editedTaskList[id].title = value
    setTodos(editedTaskList)
    reactLocalStorage.setObject('todos', editedTaskList)
  }

  useEffect(() => {
    if (Object.keys(todos)?.length) {
      const workList = Object.values(todos)
        .filter((item) => item.done === false)
        .sort((a, b) => a.order - b.order)
      setCurrentTask(workList[0])
      setTaskInWork(workList)
      setTaskCompleted(
        Object.values(todos)
          .filter((item) => item.done === true)
          .sort((a, b) => a.order - b.order),
      )
    } else {
      setCurrentTask({})
      setTaskInWork([])
      setTaskCompleted([])
    }
  }, [setCurrentTask, todos])

  return (
    <>
      <form className={classes.todoForm} onSubmit={onSubmitTask}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={11}>
            <ToDoFormControl>
              <ToDoLabel variant="filled">Название задачи</ToDoLabel>
              <ToDoInput
                type="text"
                disableUnderline={true}
                value={newTask.title || ''}
                onChange={(ev) => handleChangeInput(ev, 'title', validateText)}
                onBlur={(ev) => handleTouched(ev, 'title')}
              />
              {formErrors.title !== -1 && formTouched.title && (
                <FormHelperText className={classes.errorText}>{formErrors.title}</FormHelperText>
              )}
            </ToDoFormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ToDoFormControl>
              <ToDoLabel variant="filled">Помидоры</ToDoLabel>
              <ToDoInput
                type="number"
                disableUnderline={true}
                value={newTask.tomatoCount || ''}
                onChange={(ev) => handleChangeInput(ev, 'tomatoCount', validateNumber, 1, 14)}
                onBlur={(ev) => handleTouched(ev, 'tomatoCount')}
              />
              {formErrors.tomatoCount !== -1 && formTouched.tomatoCount && (
                <FormHelperText className={classes.errorText}>
                  {formErrors.tomatoCount}
                </FormHelperText>
              )}
            </ToDoFormControl>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          className={btnClasses.primaryBtn}
          type="submit"
          style={{ borderRadius: 0 }}
        >
          Добавить
        </Button>
      </form>

      <div style={{ padding: 0 }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabsKey}
          onChangeIndex={(index) => setTabsKey(index)}
        >
          <TabPanel value={tabsKey} index={0} dir={theme.direction}>
            <List className={classes.todoList}>
              {tasksInWork.length ? (
                <>
                  {tasksInWork.map((item, index) => (
                    <ListItem
                      key={item.id}
                      style={{
                        padding: 0,
                        paddingBottom: '3px',
                        paddingTop: '3px',
                        borderTop: `1px solid ${theme.palette.dotedBtn.main}`,
                      }}
                    >
                      <ListItemIcon style={{ minWidth: '2rem' }}>
                        <span className={classes.todoListDecoration}>{index + 1}</span>
                      </ListItemIcon>
                      <TodoItemText primary={item.title} />
                      <TodoPopover
                        item={item}
                        setTaskUp={setTaskUp}
                        setTaskDown={setTaskDown}
                        removeTask={removeTask}
                        editTask={editTask}
                      />
                    </ListItem>
                  ))}
                  <ListItem style={{ paddingLeft: 0 }}>
                    <TodoItemText
                      primary={`Всего помидор: ${tasksInWork.reduce(
                        (sum, current) => sum + +current.tomatoCount,
                        0,
                      )} шт`}
                      secondary={`Время: ${getAllTime(tasksInWork, settings.durationOfPomodoro)}`}
                    />
                  </ListItem>
                </>
              ) : (
                <ListItem>
                  <TodoItemText primary="У вас нет задач!" />
                </ListItem>
              )}
            </List>
          </TabPanel>
        </SwipeableViews>
      </div>
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
}

import React from 'react'
import Accordion from './Accordion'
import styled from 'styled-components'
import { nanoid } from 'nanoid';
import { reactLocalStorage } from 'reactjs-localstorage';
import { validateNumber, validateText } from '../utils/validateUtils';
import { sortDict, sortDictAndRemove } from '../utils/taskHelpers';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { INITIAL_SETTINGS } from '../utils/constants';

const [settings] = useState(reactLocalStorage.getObject('settings'));
const [tabsKey, setTabsKey] = useState(0);

// todoList
const [newTask, setNewTask] = useState({});
const [formTouched, setFormTouched] = useState({});
const [formErrors, setFormErrors] = useState({});
const [tasksInWork, setTaskInWork] = useState([]);
const [tasksCompleted, setTaskCompleted] = useState([]);

const handleChangeInput = (ev, key, validation, min = 5, max = 50) => {
  setNewTask({ ...newTask, [key]: ev.target.value });
  setFormErrors({ ...formErrors, [key]: validation(ev.target.value, min, max) });
};

function handleTouched(ev, key) {
  ev.preventDefault();
  setFormTouched({ ...formTouched, [key]: true });
};

const onSubmitTask = (ev) => {
  ev.preventDefault();
  const errors = {
    title: validateText(newTask?.title, 5, 50),
    category: validateText(newTask?.category, 5, 50),
    tomatoCount: validateNumber(newTask?.tomatoCount, 1, 14),
  };

  if (Object.values(errors).reduce((sum, item) => sum + item, 0) < 0) {
    const id = nanoid(10);
    const todosFromState = reactLocalStorage.getObject('todos');
    todosFromState[id] = {
      ...newTask,
      id,
      order: Object.keys(todosFromState).length + 1,
      spentTomatoes: 0,
      spentPauses: 0,
      done: false,
    };
    setTodos(todosFromState);
    reactLocalStorage.setObject('todos', todosFromState);
    setNewTask({});
    setFormTouched({});
  }
  setFormErrors(errors);
  setFormTouched({
    title: true,
    category: true,
    tomatoCount: true,
  });
};

// управление задачами

function setTaskUp(id) {
  if (todos[id].order !== 1) {
    const sortedTasks = sortDict(reactLocalStorage.getObject('todos'));
    sortedTasks[Object.values(sortedTasks).find(item => item.order === sortedTasks[id].order - 1).id].order += 1;
    sortedTasks[id].order -= 1;
    setTodos(sortedTasks);
    reactLocalStorage.setObject('todos', sortedTasks);
  }
}

function setTaskDown(id) {
  if (todos[id].order !== Object.keys(todos).length) {
    const sortedTasks = sortDict(reactLocalStorage.getObject('todos'));
    sortedTasks[Object.values(sortedTasks).find(item => item.order === sortedTasks[id].order + 1).id].order -= 1;
    sortedTasks[id].order += 1;
    setTodos(sortedTasks);
    reactLocalStorage.setObject('todos', sortedTasks);
  }
}

function removeTask(id) {
  const sortedTasks = sortDictAndRemove(reactLocalStorage.getObject('todos'), id);
  setTodos(sortedTasks);
  reactLocalStorage.setObject('todos', sortedTasks);
}

function editTask(id, value) {
  const editedTaskList = reactLocalStorage.getObject('todos');
  editedTaskList[id].title = value;
  setTodos(editedTaskList);
  reactLocalStorage.setObject('todos', editedTaskList);
}

useEffect(() => {
  if (Object.keys(todos)?.length) {
    const workList = Object.values(todos).filter(item => item.done === false).sort((a, b) => a.order - b.order);
    setCurrentTask(workList[0]);
    setTaskInWork(workList);
    setTaskCompleted(Object.values(todos).filter(item => item.done === true).sort((a, b) => a.order - b.order))
  } else {
    setCurrentTask({});
    setTaskInWork([]);
    setTaskCompleted([]);
  }
}, [todos])

export const TodoList = () => {
  return (
    <Div>
      <Title>Теперь можно начать работать:</Title>
      <Accordion />
    </Div>
  )

  }
const Div = styled.div`
 
`

const Title = styled.h2`
  margin: 15px;
  margin-top: 0;
  text-align: center;
  font-size: 18px;
  color: var(--color-dgray);
  font-weight: 700;
`
TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
}


//   return (
//     <>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon color='secondary' />}>
//           Ура! Теперь можно начать работать:
//         </AccordionSummary>

//         <AccordionDetails>
//           <List>
//             {
//               instructionList.map((item, index) => (
//                 <ListItem key={index} style={{ padding: '0px 16px' }}>
//                   <ListItemIcon style={{ minWidth: '2rem' }}>
//                     <span className='list__item__img' style={{ backgroundImage: `url(${tomato})` }}/>
//                   </ListItemIcon>

//                   <ListItemText primary={item}/>
//                 </ListItem>
//               ))
//             }
//           </List>
//         </AccordionDetails>
//       </Accordion>

//       <form className={classes.todoForm} onSubmit={onSubmitTask}>
//         <Grid container spacing={1}>
//           <Grid item xs={12} sm={11}>
//             <ToDoFormControl>
//               <ToDoLabel variant='filled'>Название задачи</ToDoLabel>
//               <ToDoInput
//                 type='text'
//                 disableUnderline={true}
//                 value={newTask.title || ''}
//                 onChange={(ev) => handleChangeInput(ev, 'title', validateText)}
//                 onBlur={(ev) => handleTouched(ev, 'title')}
//               />
//               {
//                 (formErrors.title !== -1  && formTouched.title) &&
//                 <FormHelperText className={classes.errorText}>{formErrors.title}</FormHelperText>
//               }
//             </ToDoFormControl>
//           </Grid>

//           <Grid item xs={12} sm={7}>
//             <ToDoFormControl>
//               <ToDoSelectLabel>Категория</ToDoSelectLabel>
//               <ToDoSelect
//                 input={<ToDoSelectInput disableUnderline={true} />}
//                 value={newTask.category || ''}
//                 onChange={ev => handleChangeInput(ev, 'category', validateText)}
//                 onBlur={ev => handleTouched(ev, 'category')}
//                 MenuProps={MenuSelectProps}
//               >
//                 {
//                   settings?.categories
//                     ? settings.categories.map((item, index) => (
//                       <MenuItem className={classes.selectOptions} value={item} key={index}>{item}</MenuItem>
//                     ))
//                     : INITIAL_SETTINGS.categories.map((item, index) => (
//                       <MenuItem className={classes.selectOptions} value={item} key={index}>{item}</MenuItem>
//                     ))
//                 }
//               </ToDoSelect>
//               {
//                 (formErrors.category !== -1  && formTouched.category) &&
//                 <FormHelperText className={classes.errorText}>{formErrors.category}</FormHelperText>
//               }
//             </ToDoFormControl>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <ToDoFormControl>
//               <ToDoLabel variant='filled'>Помидоры</ToDoLabel>
//               <ToDoInput
//                 type='number'
//                 disableUnderline={true}
//                 value={newTask.tomatoCount || ''}
//                 onChange={(ev) => handleChangeInput(ev, 'tomatoCount', validateNumber, 1, 14)}
//                 onBlur={(ev) => handleTouched(ev, 'tomatoCount')}
//               />
//               {
//                 (formErrors.tomatoCount !== -1 && formTouched.tomatoCount) &&
//                 <FormHelperText className={classes.errorText}>{formErrors.tomatoCount}</FormHelperText>
//               }
//             </ToDoFormControl>
//           </Grid>
//         </Grid>

//         <Button variant='contained' className={btnClasses.primaryBtn} type='submit'>
//           Добавить
//         </Button>
//       </form>

//       <div>
//         <Tabs
//           value={tabsKey}
//           onChange={(ev, value)=> setTabsKey(value)}
//           indicatorColor='secondary'
//           textColor='inherit'
//           variant='fullWidth'
//         >
//           <Tab label='В работе' {...a11yProps(0)} />
//           <Tab label='Выполнены' {...a11yProps(1)} />
//         </Tabs>

//         <SwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={tabsKey}
//           onChangeIndex={index => setTabsKey(index)}
//         >
//           <TabPanel value={tabsKey} index={0} dir={theme.direction}>
//             <List className={classes.todoList}>
//               {
//                 tasksInWork.length
//                   ? <>
//                     {tasksInWork.map((item, index) => (
//                       <ListItem key={item.id}>
//                         <ListItemIcon style={{minWidth: '2rem'}}>
//                           <span className={classes.todoListDecoration}>{index + 1}</span>
//                         </ListItemIcon>
//                         <TodoItemText
//                           primary={item.title}
//                           secondary={`Категория: ${item.category}`}
//                         />
//                         <TodoPopover
//                           item={item}
//                           setTaskUp={setTaskUp}
//                           setTaskDown={setTaskDown}
//                           removeTask={removeTask}
//                           editTask={editTask}
//                         />
//                       </ListItem>
//                     ))}
//                     <ListItem>
//                       <TodoItemText
//                         primary={`Количество помидор: ${tasksInWork.reduce((sum, current) => sum + +current.tomatoCount, 0)} шт`}
//                         secondary={`Потребуется: ${getAllTime(tasksInWork, settings.durationOfPomodoro)}`}
//                       />
//                     </ListItem>
//                   </>
//                   : <ListItem>
//                     <TodoItemText
//                       primary='У вас нет задач!'
//                       secondary='Если возникли вопросы, воспользуйтесь инструкцией.'
//                     />
//                   </ListItem>
//               }
//             </List>
//           </TabPanel>

//           <TabPanel value={tabsKey} index={1} dir={theme.direction}>
//             <List className={classes.todoList}>
//               {
//                 !!tasksCompleted.length
//                   ? <>
//                     {tasksCompleted.map((item, index) => (
//                       <ListItem key={item.id}>
//                         <ListItemIcon style={{minWidth: '2rem'}}>
//                           <span className={classes.todoListDecorationDone}>
//                             <CheckCircleOutlineIcon className={classes.done} />
//                           </span>
//                         </ListItemIcon>

//                         <TodoItemText
//                           primary={item.title}
//                           secondary={`Категория: ${item.category}`}
//                         />
//                         <IconButton
//                           onClick={ev => {
//                             ev.preventDefault();
//                             removeTask(item.id);
//                           }}
//                         >
//                           <DeleteOutlineOutlinedIcon className={classes.popoverBtn} />
//                         </IconButton>
//                       </ListItem>
//                     ))}
//                   </>
//                   : <ListItem>
//                     <TodoItemText
//                       primary='У вас нет выполненных задач!'
//                       secondary='После выполнения, они появятся здесь.'
//                     />
//                   </ListItem>
//               }
//             </List>
//           </TabPanel>
//         </SwipeableViews>
//       </div>
//     </>
//   );
// }



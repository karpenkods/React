import React, { useState } from 'react'
import { capitalizeFirstLetter, getNameOfDaysPeriod } from '../utils/formatUtils'
import { TodoList } from '../components/TodoList'
import { reactLocalStorage } from 'reactjs-localstorage'
import { PomodoroTimer } from '../components/PomodoroTimer'
import { INITIAL_SETTINGS } from '../utils/constants'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

export function MainPage() {
  const [settings] = useState(reactLocalStorage.getObject('settings'))
  const [todos, setTodos] = useState(reactLocalStorage.getObject('todos') || {})
  const [currentTask, setCurrentTask] = useState({})

  return (
    <div>
      <Helmet>
        <title>{'pomodoro_box | Главная'}</title>
      </Helmet>
      <Title>
        {getNameOfDaysPeriod()},{' '}
        {capitalizeFirstLetter(settings.userName || INITIAL_SETTINGS.userName)}
      </Title>
      <Block>
      <LeftBlock>
        <TodoList todos={todos} setTodos={setTodos} setCurrentTask={setCurrentTask} />
      </LeftBlock>
      <RightBlock>
        <PomodoroTimer currentTask={currentTask} setTodos={setTodos} setCurrentTask={setCurrentTask} />
      </RightBlock>
      </Block>
    </div>
  )
}

const Title = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  color: var(--color-red);
  border-bottom: 1px solid var(--color-red);
`

const Block = styled.div`
  display: flex;
  margin-top: 50px;
`

const LeftBlock = styled.div`
  flex-basis: 40%;
  margin-left: 50px;
`

const RightBlock = styled.div`
  flex-basis: 60%;
  margin-right: 50px;
`

import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <Div>
      <Helmet>
        <title>{'pomodoro_box'}</title>
      </Helmet>
      <Title>Вход в приложение</Title>
      <Text>
        Чтобы начать пользоваться приложением, пожалуйста, <Insert>войдите</Insert> или{' '}
        <Insert>зарегистрируйтесь.</Insert>
      </Text>
      <Position>
        <LeftBlock>
          <TextParagraph>
            Метод «Помодоро» — это техника управления временем, разработанная студентом колледжа
            Франческо Чирилло в 1980-х годах. В основе техники, названной от итальянского слова
            «помидор», лежат многочисленные временные интервалы, распределённые в течение дня и
            обозначенные на кухонном таймере в форме помидора, который Чирилло использовал сам,
            когда оттачивал свой метод управления временем.
          </TextParagraph>
          <TextParagraph>
            Базовая структура техники «Помодоро», призванной быть простой в применении и в то же
            время давать большие преимущества с точки зрения производительности, заключается в
            следующем:
          </TextParagraph>
          <List>
            <Link>
              <Circle />
              Установите в своём списке дел цель или задачу, которую необходимо выполнить.
            </Link>
            <Link>
              <Circle />
              Установите таймер «Помодоро»
              <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
              <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
              <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
              <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
              <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
            </Link>
            <Link>
              <Circle />
              Работайте в течение заданного периода времени.
            </Link>
            <Link>
              <Circle />
              Когда таймер зазвонит, отметьте галочкой свой рабочий интервал.
            </Link>
            <Link>
              <Circle />
              После каждого рабочего сеанса делайте 5-минутный перерыв.
            </Link>
            <Link>
              <Circle />
              После четвёртого сеанса сделайте более длительный перерыв — 15–30 минут.
            </Link>
            <Link>
              <Circle />
              Переустановите таймер и начните процесс снова.
            </Link>
          </List>
        </LeftBlock>
        <RightBlock>
          <Img src="https://funforkids.ru/pictures/glazastiki/glazastiki053.png" />
          <TitleApp>pomodoro_box</TitleApp>
          <DivRight>
            <DivReg>
              <TextReg>Совсем чуть-чуть и можем начинать!</TextReg>
              <InputEmail
                onChange={changeHandler}
                type="text"
                id="email"
                placeholder="Ваш email"
                name="email"
                value={form.email}
              />
              <InputPassword
                onChange={changeHandler}
                type="password"
                id="password"
                placeholder="Пароль"
                name="password"
                value={form.password}
              />
              <Reg>
                <But>
                  <ButtonEntry onClick={loginHandler} disabled={loading}>
                    Войти
                  </ButtonEntry>
                  <ButtonReg onClick={registerHandler} disabled={loading}>
                    Регистрация
                  </ButtonReg>
                </But>
                {/* <Google>
                  <TextG>или войти с помощью Google:</TextG>
                  <ImgG
                    src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/google-icon.png"
                    alt="Google"
                  />
                </Google> */}
              </Reg>
            </DivReg>
            {/* <Data>
              <Switch>
                <CheckboxOne />
                <CheckboxTwo />
              </Switch>
              <TextCheckbox>Согласен на обработку персональных данных</TextCheckbox>
            </Data> */}
          </DivRight>
        </RightBlock>
      </Position>
    </Div>
  )
}

const Div = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  border: 2px solid var(--color-red);
  background-color: var(--color-white);
`

const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 500;
  text-align: center;
  color: var(--color-dgray);
`

const Position = styled.div`
  display: flex;
`

const Text = styled.div`
  margin: 15px;
  text-align: center;
  font-size: 18px;
  color: var(--color-dgray);
  font-weight: 500;
`

const Insert = styled.p`
  display: inline;
  color: var(--color-red);
`

const LeftBlock = styled.div`
  flex-basis: 60%;
`

const TextParagraph = styled.p`
  margin: 15px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-dgray);
`

const List = styled.ol`
  margin-bottom: 20px;
  margin-left: 20px;
  padding-left: 0;
  list-style-type: none;
  font-size: 16px;
  color: var(--color-dgray);
`

const Link = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`

const Circle = styled.div`
  margin-right: 10px;
  width: 4px;
  height: 4px;
  background: var(--color-dred);
  border-radius: 50%;
`

const P = styled.img`
  width: 20px;
  margin-left: 5px;
`

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  align-items: center;
`

const Img = styled.img`
  width: 25%;
  margin-bottom: 10px;
`

const TitleApp = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  color: var(--color-red);
`

const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  margin-top: 10px;
  padding: 20px;
  background-color: var(--color-dred);
  width: 90%;
  height: 100%;
`
const InputStyles = css`
  margin-bottom: 25px;
  height: 30px;
  width: 80%;
  padding-left: 5px;
  color: var(--color-dgray);
  font-family: 'Ubuntu';
  font-size: 14px;
  font-weight: 400;
  transition: 0.3;
  &:focus {
    outline: none;
    border: none;
  }
`

const DivReg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextReg = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-white);
`

const InputEmail = styled.input`
  ${InputStyles}
`

const InputPassword = styled.input`
  ${InputStyles}
`

const Reg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const But = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 15px;
`

const ButtonEntry = styled.button`
  width: 45%;
  height: 150%;
  background-color: var(--color-olive);
  border: none;
  color: var(--color-white);
  font-family: 'Ubuntu';
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: var(--color-dred);
  }
  &:active {
    color: var(--color-red);
  }
`

const ButtonReg = styled(ButtonEntry)`
  background-color: var(--color-dgray);
`

// const Google = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
//   width: 81%;
// `

// const TextG = styled.div`
//   font-size: 14px;
//   color: var(--color-white);
// `

// const ImgG = styled.img`
//   width: 40px;
//   margin-left: 12px;
//   cursor: pointer;
//   &:hover {
//     outline: 2px solid var(--color-bgray);
//     border-radius: 50%;
//   }
//   &:active {
//     outline: 2px solid var(--color-dgray);
//     border-radius: 50%;
//   }
// `

// const Data = styled.div`
//   display: flex;
//   align-items: center;
// `

// const TextCheckbox = styled.p`
//   margin-left: 5px;
//   font-size: 8px;
//   color: var(--color-white);
//   font-weight: 300;
//   letter-spacing: 0.7px;
// `

// const CheckboxOne = styled.input.attrs({ type: 'checkbox' })`
//   opacity: 0;
// `

// const CheckboxTwo = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: var(--color-dgray);
//   transition: 0.4s;
//   border-radius: 10px;

//   &:before {
//     content: '';
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     left: 1px;
//     bottom: 0.5px;
//     background-color: var(--color-white);
//     transition: 0.4s;
//     border-radius: 50%;
//   }
// `
// const Switch = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 22px;
//   height: 12px;
//   margin-bottom: 0;
//   vertical-align: middle;
//   ${CheckboxOne}:checked + ${CheckboxTwo} {
//     background-color: var(--color-olive);
//   }
//   ${CheckboxOne}:checked + ${CheckboxTwo}:before {
//     transform: translateX(10px);
//     background-color: var(--color-dgray);
//   }
// `

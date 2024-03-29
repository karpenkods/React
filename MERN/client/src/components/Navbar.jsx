import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <Div>
      <DivLeft>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z"
            fill="#DC3E22"
          />
          <path
            d="M28.2381 12.6066C27.3212 11.673 25.8378 10.8048 24.7331 10.551C25.3402 10.0127 25.4624 9.99494 26.2228 9.61816C28.1714 8.65365 31.0577 8.56485 31.0577 8.56485C31.0577 8.56485 27.651 6.8042 25.1601 6.91468C24.526 6.94257 23.8572 7.16658 23.2119 7.48403C23.5758 6.97054 23.9205 6.45998 24.141 6.07643C24.8153 4.90368 25.5241 3.42627 25.5241 3.42627C25.5241 3.42627 22.9123 3.56573 21.7009 5.01565C21.2408 5.56645 20.8935 6.26625 20.6393 6.92275C20.1879 6.40419 19.6897 5.94242 19.1914 5.58195C16.7 3.77896 12.7193 4.16903 12.7193 4.16903C12.7193 4.16903 15.7264 5.87486 17.0794 7.57656C17.6077 8.2411 18.1438 8.54842 18.4643 9.29352C17.3565 9.05367 14.857 9.13565 13.63 9.59057C10.4772 10.7599 9.11862 15.4649 9.11862 15.4649C9.11862 15.4649 12.1953 13.3443 16.3814 11.8565C17.3018 11.5295 18.2749 11.4429 19.123 11.4578C18.738 12.0575 18.3174 12.8363 17.9991 13.7546C17.2248 15.9904 18.248 21.3113 18.248 21.3113C18.248 21.3113 20.4897 18.1647 21.4031 15.6157C21.8719 14.3073 21.9879 12.9936 21.9905 12.0242C22.8218 12.3931 23.8009 12.9319 24.5327 13.398C28.2795 15.7852 30.0721 20.1435 30.0721 20.1435C30.0721 20.1435 30.5942 15.006 28.2381 12.6066Z"
            fill="#899441"
          />
          <path
            d="M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7241 10.2896 19.1391 9.67376 19.1571 8.9334C19.1586 8.86931 19.2233 4.36125 16.719 2.40111C16.1349 1.94395 16.0318 1.09984 16.4889 0.515424C16.9464 -0.0686834 17.7905 -0.171833 18.3746 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8237 9.73083 21.2262 10.3094 20.5008 10.3094Z"
            fill="#A8B64F"
          />
          <defs>
            <clipPath id="clip0_2246_316">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Title href="https://ru.wikipedia.org/wiki/Метод_помидора">pomodoro_box</Title>
      </DivLeft>
      <DivRightBlock>
        <Links href="/" onClick={logoutHandler}>
          &#8962; Главная
        </Links>
        <Links href="/" onClick={logoutHandler}>
          &#10004; Статистика
        </Links>
        <Links href="/" onClick={logoutHandler}>
          &#33; Настройки
        </Links>
        <Links href="/" onClick={logoutHandler}>
          &#63; О программе
        </Links>
        <Links href="/" onClick={logoutHandler}>
          &#10008; Выйти
        </Links>
      </DivRightBlock>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: var(--color-white);
  box-shadow: 0 10px 63px rgba(0, 0, 0, 0.07);
  z-index: 99;
`

const DivLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.a`
  margin-left: 15px;
  font-weight: 300;
  font-size: 24px;
  color: var(--color-red);
  transition: 0.3s;
  &:hover {
    text-shadow: 1px 0 2px var(--color-dgray);
  }
  &:focus {
    text-shadow: 1px 0 2px var(--color-dgray);
  }
`

const DivRightBlock = styled.div`
  display: flex;
  align-items: center;
`

const Links = styled.a`
  margin-left: 25px;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-red);
  transition: 0.3s;
  &:hover {
    text-shadow: 1px 0 2px var(--color-dgray);
  }
  &:focus {
    text-shadow: 1px 0 2px var(--color-dgray);
  }
`

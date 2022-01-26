import React, { useState } from 'react'
import styled from 'styled-components'

const Accordion = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <AccordionWrapper>
      <Button onClick={handleClick}>Как работать с приложением</Button>
      <InternalWrapper open={open}>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Для создания задачи, выбирите категорию, напишите название задачи и задайте
          запланированное количество времени в «помидорах»
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Верхняя задача, является текущей
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Запустите таймер («помидор»)
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Работайте пока «помидор» не прозвонит
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Сделайте короткий перерыв (3-5 минут)
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена
        </Text>
        <Text>
          <P src="https://yt3.ggpht.com/ytc/AAUvwnjd-cAJ-sw5ETIpr8SQ2L_egpWGD8HAjAmxgxva=s900-c-k-c0x00ffffff-no" />
          Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)
        </Text>
      </InternalWrapper>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  transition: all 0.5s ease-in-out;
`

const InternalWrapper = styled.div`
  width: 100%;
  max-height: ${(props) => (props.open ? '300px' : '0')};
  transition: all 1s ease-in-out;
  overflow: hidden;
`

const Button = styled.button`
  width: 60%;
  padding: 5px 10px 5px 10px;
  margin-left: 17%;
  border: none;
  font-family: 'Ubuntu';
  font-size: 16px;
  font-weight: 400;
  color: var(--color-white);
  background-color: var(--color-green);
  transition: 0.3s;
  &:hover {
    background-color: var(--color-olive);
  }
`

const Text = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: var(--color-dgray);
  font-weight: 400;
`

const P = styled.img`
  margin-right: 5px;
  width: 20px;
  transform: translateY(4px);
`

export default Accordion

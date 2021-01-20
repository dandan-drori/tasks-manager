import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = () => {

  const tasksData = useSelector(state => state.tasks.tasksData)
  
  console.log(tasksData[0])

  return (
    <Wrapper>
      <Container>
        <Header>My Tasks</Header>
        <List>
            {
              tasksData.map( (task, index) => <Task key={index} content={task.content} header={task.header} /> )
            }
        </List>
      </Container>
    </Wrapper>
  )
}

export default Tasks

const Wrapper = styled.div`
  overflow-x: hidden;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color #050505;
  text-align: center;
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 4rem;
  }
`

const Header = styled.p`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #ff4e00,#ec9f05);
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`

const List = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


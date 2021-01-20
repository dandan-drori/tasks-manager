import React from 'react'
import styled from 'styled-components'

const Task = ({header, content}) => {
  console.log(header)
  return (
  <Container>
    <Header>{header}</Header>
    <Content>{content}</Content>
    <Delete onClick={() => useDispatch(deleteTask)}></Delete>
  </Container>
  )
}

export default Task

const Container = styled.div`
  width: 30rem;
  height: 6rem;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 2rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
`

const Header = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  color: #050505;
`

const Content = styled.p`
  font-size: 1em;
  color: #050505;
  max-width: 26rem;
  text-wrap: wrap;
`

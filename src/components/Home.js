import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>Hello Dandan,</Header>
        <SubHeader>It's good to have you back!</SubHeader>
        <List>
          <ListItem>
              <StyledLink to='/tasks'>My Tasks</StyledLink>
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color #050505;
  text-align: center;
  padding: 2rem;
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 4rem;
  }
`

const Header = styled.p`
  font-size: 5rem;
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

const SubHeader = styled.p`
  color: #fefefe;
  font-size: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.li`
  list-style:none;
`

const StyledLink = styled(Link)`
  color: #eee;
  font-size: 1.5rem;
`

export default Home

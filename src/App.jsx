import styled from 'styled-components'
import Card from './components/Card'


function App() {
  
  

  return (
    <>
    
      <Scard>
         <Tittle>hello world</Tittle>
      </Scard>
      <Card></Card>
      <SBtn $primary={3}>Button</SBtn>
      <SBtn1 $primary={3}>Button</SBtn1>
      <SBtn $primary={3}>Button</SBtn>
    </>
  )
}

export default App


const Tittle = styled.h1`
color:red;
font-size:20px;
`
export const Scard = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
`

const SBtn = styled.button`
  background-color: ${ ({primary}) => primary === 1 ? 'blue' : 'purple'};
  margin: 20px;
  color: white;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 10px;
  cursor:pointer
`

const SBtn1 = styled(SBtn)`
  cursor: crosshair;

  &:hover ~ ${Scard}{
    background-color: red;
    transition: 0.5s;
  }
`

import React,{ useState }from 'react';



import Icon from './components/Icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Cards, CardBody, Container, Button, Col, Row, Card} from "reactstrap";

import './App.css';


const itemArray = new Array(9).fill("empty")


const App = () => {

  const[isCross, setIsCross] = useState(false)

  const[winMessage, setWinMessage] = useState("empty")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty")
  }

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} won`);
    }
    else if(itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty")
    {
      setWinMessage(`${itemArray[3]} won`);
    }

    else if(itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty")
    {
      setWinMessage(`${itemArray[6]} won`);
    }

    else if(itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} won`);
    }
    else if(itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2] !== "empty")
    {
      setWinMessage(`${itemArray[2]} won`);
    }

    else if(itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0] !== "empty")
    {
      setWinMessage(`${itemArray[0]} won`);
    }

    else if(itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty")
    {
      setWinMessage(`${itemArray[1]} won`);
    }

    else if(itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty")
    {
      setWinMessage(`${itemArray[2]} won`);
    }
  }

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage,{type : "success"});
    }
    if (itemArray[itemNumber]==='empty'){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else{
      return toast("already filled", { type: 'error' })
    }
    
    checkIsWinner();
  }
  return(
    
      <Container className="p-5">
        <ToastContainer position="bottom-center"/>
        <Row>
          <Col md = {6} className="offset-md-3">
           {winMessage ? (
             <div className = 'mb-2 mt-2' >
              <h1 className = 'text-center text-success text-uppercase'>
                {winMessage}
              </h1>
              <Button color = 'success' block onClick ={reloadGame} >Restart Game</Button>
             </div>
           ):(
             <h1 className ="text-center text-warning">
               {isCross ? "cross" : 'circle'}'s turn
             </h1>
           )}
            <div className = 'grid'>
              {itemArray.map((item,index)=>(
                <Card className = "color" onClick ={() => changeItem(index)}>
                  <CardBody className ='box'>
                    <Icon name = {item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default App;

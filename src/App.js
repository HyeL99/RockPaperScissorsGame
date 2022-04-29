import './App.css';
import { useState } from 'react';
import Box from './component/Box.js';

//박스 2개 (타이틀, 사진, WINNER/LOSER/TIE) - 컴퓨터 선택 랜덤
//  border-color: 이기면 초록, 지면 빨강, 비기면 검정
//묵찌빠 버튼 (클릭하면 박스 내 사진과 결과 바뀜)
//본인 결과 안내창(WIN/LOSE/TIE)

const choice = {
  rock:{
    name:"Rock",
    img:"https://media4.giphy.com/media/YrHxQnS5CpZSD5UiZi/giphy.gif?cid=ecf05e47gb7mokabem8lzwiukmvridfu4z2dtf7zvxxarbd5&rid=giphy.gif&ct=g"
  },
  scissors:{
    name:"Scissors",
    img:"https://media2.giphy.com/media/5xtDaruJgRm1QdFTvnW/giphy.gif?cid=ecf05e47gb0lksutxxcilrjm3q0xlr8f2f8oat751dy8m5i7&rid=giphy.gif&ct=g"
  },
  paper:{
    name:"Paper",
    img:"https://media0.giphy.com/media/gvb4LB7mVxW0g/giphy.gif?cid=ecf05e473cy0k35rrpj1ju15vcdbwcab9z41v5c4lp2z4v49&rid=giphy.gif&ct=g"
  }
}
const start = {name:"Start", img:"https://media4.giphy.com/media/xT3i16YFZUHppYBbDG/giphy.gif?cid=ecf05e47s5p6azw8wie72dau8clvkcyzk186oqtcitenl6t2&rid=giphy.gif&ct=g"}

function App() {
  const [userSelect, setUserSelect] = useState(start)
  const [computerSelect, setComputerSelect] = useState(start)
  const [result, setResult] = useState("START");
  const [comResult, setComResult] = useState("START");

  

  const randomChoice = ()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    return choice[itemArray[randomItem]]
  }

  const judgement = (user, computer)=>{
    if(user.name === computer.name)
      return "TIE"
    else if(user.name === "Rock")
      return computer.name === "Scissors"?"WIN":"LOSE"
    else if(user.name === "Scissors")
      return computer.name === "Paper"?"WIN":"LOSE"
    else if(user.name === "Paper")
      return computer.name === "Rock"?"WIN":"LOSE"
  }
  const comJudgement = (user, computer)=>{
    if(user.name === computer.name)
      return "TIE"
    else if(user.name === "Rock")
      return computer.name === "Scissors"?"LOSE":"WIN"
    else if(user.name === "Scissors")
      return computer.name === "Paper"?"LOSE":"WIN"
    else if(user.name === "Paper")
      return computer.name === "Rock"?"LOSE":"WIN"
  }

  const play = (userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComResult(comJudgement(choice[userChoice], computerChoice));
  }

  return (
    <div>
      <div className='box-board'>
        <Box title="User" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={comResult}/>
      </div>
      <div className='button-area'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=> play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
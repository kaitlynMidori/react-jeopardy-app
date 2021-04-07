import React, {useState, useEffect} from "react";
import { Col, Row, } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Table, Container } from "reactstrap";
// import "./style.css";
import API from "../utils/API"
import LeaderboardRow from "../components/LeaderboardRow/LeaderboardRow"; 

const Board = (props) => {
const [playerData, setPlayerData] = useState([]);
const [dataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    getScores()
  }, [])

  function getScores() {
    API.getPlayersScores().then(data => {
      let scores = data.data; 
      console.log(scores)
      setPlayerData(scores);
    })
  }

  function loadLeaderboard() {
    {returnedArray.map((score, i) => {
      return <LeaderboardRow key={i} playerData={playerData} player={score.name} score={score.score} rank={i+1}/> })}
  }

  const returnedArray = Array.from(playerData)
  console.log(returnedArray);

  return (
    <Container>
    <Row>
       <Col size="md-12">
        <Jumbotron className="leaderboardJumbotron">
        <h1 className="leaderboardHeading">Leaderboard</h1>
         </Jumbotron>
        </Col>
     </Row>
​
    <Table responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
      {/* {playerData.map((score, i) => {
       return <LeaderboardRow playerData={playerData} player={score.name} score={score.score} rank={i+1}/>
       })} */}
      {returnedArray.length === 10 ? returnedArray.map((score, i) => {
         return <LeaderboardRow key={i} playerData={playerData} player={score.name} score={score.score} rank={i+1}/> }) : null}
      {returnedArray.map((score, i) => {
       return <LeaderboardRow playerData={playerData} returnedArray={returnedArray} player={score.name} score={score.score} rank={i+1}/>
       })}
        
       {dataAvailable ? playerData && playerData.map((score, i) => {
       return <LeaderboardRow playerData={playerData} player={score.name} score={score.score} rank={i+1}/>
       }) : null }
       
      </tbody>
    </Table>
    </Container>
  );
}

export default Board;
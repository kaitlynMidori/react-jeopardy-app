import React, {useState, useEffect} from "react";
import PracticeCard from "../components/PracticeCard/PracticeCard";
import { Button } from 'react-bootstrap';
import API from "../utils/API";

function Practice() {
  const [randomQuestion, setRandomQuestion] = useState([]);

  useEffect(() => {
    loadRandomQuestion()
    console.log(randomQuestion)
  }, [])

  useEffect(() => {
    console.log(randomQuestion)
  }, [randomQuestion])

  function loadRandomQuestion() {
    hideAnswer()
    API.getRandomQuestion()
    .then(res => {
      setRandomQuestion(res.data)
    })
    .catch(err => console.log(err));
  };

  function showAnswer(){
    document.getElementById("practiceAnswer").classList.remove("hidden");
  }

  function hideAnswer(){
    document.getElementById("practiceAnswer").classList.add("hidden");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <PracticeCard randomQuestion={randomQuestion[0]}></PracticeCard>
          <Button className="m-2 playerNumBtn" onClick={showAnswer}> Show Answer</Button>
          <Button className="playerNumBtn" onClick={loadRandomQuestion}>Next Question</Button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
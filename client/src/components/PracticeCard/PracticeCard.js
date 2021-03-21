import React from "react";

const styles = {
      card: {
        margin: 60,
        background: "#e8eaf6",
        minHeight: 150,
      },
      heading: {
        background: "gold",
        minHeight: 30,
        lineHeight: 2.5,
        color: "white",
        padding: "0 20px",
        fontSize: 30,
        fontFamily: 'Alegreya Sans SC'
      },
      title: {
        padding: 30
      },
      content: {
        padding:10
      },
      
    };
function PracticeCard(props) {
  console.log(props.randomQuestion)
  return (
<div>  
      <div className="card" style = {styles.card}>
        <div className="card-body" style = {styles.heading}>Category: {props.randomQuestion && props.randomQuestion.category.title}</div>
          <h5 className="card-title" style = {styles.title}>Question: {props.randomQuestion && props.randomQuestion.question}</h5>
          <p className="card-text" style = {styles.content}>Value: {props.randomQuestion && props.randomQuestion.value}</p>
          <p className="answer hidden" style = {styles.content} id="practiceAnswer">Answer: {props.randomQuestion && props.randomQuestion.answer}</p>
        </div>
      </div>

  );
}

export default PracticeCard;
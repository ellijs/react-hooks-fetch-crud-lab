import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, handleDeleteEvent, handleUpdateEvent }) {

  const renderQuestions = questions.map(question => <QuestionItem key={question.id} question={question} handleDeleteEvent={handleDeleteEvent} handleUpdateEvent={handleUpdateEvent}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderQuestions}</ul>
    </section>
  );
}

export default QuestionList;

import React, {useState, useEffect} from 'react';

const MultipleChoiceQuestion = ({question, isGraded, setQuestionsWithAns}) => {
    const [yourAnswer, setYourAnswer] = useState('');
    const [grade, setGrade] = useState(false);
    const [answer, setAnswer] = useState([]);

    return (
        <div>
            <h5>
                {
                    isGraded &&
                    <>
                        {question.question}
                        {
                            question.correct === answer &&
                            <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                        }
                        {
                            question.correct !== answer &&
                            <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                        }
                    </>
                }
                {!isGraded &&
                <>
                    {question.question}
                </>
                }
            </h5>

            <ul className="list-group">
                {
                    isGraded &&
                    question.choices.map((choice) => {
                        return (
                            <>
                                {answer === question.correct && answer === choice &&
                                <li className='list-group-item list-group-item-success'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               checked
                                               disabled
                                        />
                                        {choice}
                                        <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                                    </lable>
                                </li>
                                }
                                {answer === question.correct && answer !== choice &&
                                <li className='list-group-item'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               disabled
                                        />
                                        {choice}
                                    </lable>
                                </li>
                                }
                                {answer !== question.correct && answer === choice
                                && choice !== question.correct &&
                                <li className='list-group-item list-group-item-danger'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               checked
                                               disabled

                                        />
                                        {choice}
                                        <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                                    </lable>
                                </li>
                                }
                                {answer !== question.correct && answer !== choice
                                && choice === question.correct &&
                                <li className='list-group-item list-group-item-success'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               disabled
                                        />
                                        {choice}
                                        <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                                    </lable>
                                </li>
                                }
                                {answer !== question.correct && answer !== choice
                                && choice !== question.correct &&
                                <li className='list-group-item'>
                                    <lable>
                                        <input type='radio'
                                               className=''
                                               name={question._id}
                                               disabled

                                        />
                                        {choice}
                                    </lable>
                                </li>
                                }
                            </>
                        )
                    })
                }
                {
                    !isGraded && question.choices.map((choice) => {

                        return (
                            <li className="list-group-item">
                                <lable>
                                    <input type='radio'
                                           className=''
                                           disabled={isGraded}

                                           onClick={() => {
                                               setAnswer(choice)
                                               setQuestionsWithAns((prev) =>
                                                   prev.map((q) => {
                                                           if (q._id === question._id) {
                                                               return {...q, answer: choice}
                                                           } else {
                                                               return q
                                                           }
                                                       }
                                                   ))
                                           }}
                                           name={question._id}/> {choice}
                                </lable>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {answer}
            </p>
            {/*<button type="button"*/}
            {/*        class="btn btn-success"*/}
            {/*        onClick={() => {*/}
            {/*            if (yourAnswer === '') {*/}
            {/*                alert('Please choose an answer.')*/}
            {/*            } else {*/}
            {/*                setGrade(!grade)*/}
            {/*            }*/}
            {/*        }}*/}
            {/*>*/}
            {/*    Grade*/}
            {/*</button>*/}
            <hr/>
        </div>
    )

}

export default MultipleChoiceQuestion;
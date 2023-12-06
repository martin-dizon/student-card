import React from 'react'
import StudentInformation from '../StudentInformation';
import './card.css';

const Card = (props) => {
    const {studentPicture, studentId, name, birthday, quotableQuotes, bgColor} = props;
    return (
        <div className='card' style={{backgroundColor: bgColor}}>
            <StudentInformation 
                studentPicture={studentPicture}
                studentId={studentId}
                name={name}
                birthday={birthday}
                quotableQuotes={quotableQuotes}
            />
        </div>
    )
}

export default Card
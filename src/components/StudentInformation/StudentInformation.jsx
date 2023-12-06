import React from 'react'

const StudentInformation = (props) => {
    const {studentPicture, studentId, name, birthday, quotableQuotes} = props;
    return (
    <div>
        <img src={studentPicture} height='400px' width='400px'/>
        <div>{studentId}</div>
        <div>{name}</div>
        <div>{birthday}</div>
        <div>{quotableQuotes}</div>
    </div>
    )
}

export default StudentInformation
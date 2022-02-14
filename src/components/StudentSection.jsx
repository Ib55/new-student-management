import React from 'react';
import AbsentStudent from './AbsentStudent';
import PresentStudent from './PresentStudent';
import StudentNameList from './StudentNameList';


function StudentSection(props) {
    const toggleHandler=(studentId)=>{
        const toggle = props.students.find(item=>item.id===studentId)
        toggle.isPresent = !toggle.isPresent;
        props.setStudents([...props.students])
    }
    return ( 
        <div className='row mt-5'>
                <div className="col-lg-6">
                    <StudentNameList
                    students={props.students}
                    setStudents={props.setStudents}
                    setEditableStudent={props.setEditableStudent}
                    editable={props.editable}
                    setStudentName={props.setStudentName}
                    setEditable={props.setEditable}
                    />
                </div>
                <div className="col-lg-3">
                    <PresentStudent
                    students={props.students}
                    toggleHandler={toggleHandler}
                    />
                </div>
                <div className="col-lg-3">
                    <AbsentStudent
                    students={props.students}
                    toggleHandler={toggleHandler}
                    />
                </div>
        </div>
     );
}

export default StudentSection;
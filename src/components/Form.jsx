import React from 'react';

function Form(props) {
const addStudent=(event,student)=>{
    event.preventDefault()
    if(student){
        const newStudent ={
            id:Date.now(),
            name:student
        }
        props.setStudents([newStudent,...props.students])
        props.setStudentName('')
    }else{
        alert('Please Provide Student Name')
    }
    
}
// updateHandler 
const updateHandler=(event,studentId)=>{
    event.preventDefault()
    if(studentId){
        props.editableStudent.name = studentId || props.editableStudent.name;
        props.setStudentName('')
        props.setEditable(false)
        props.setEditableStudent(null)
    }else{
        alert('Edit')
    }
}
// updateHandler 
    return ( <div>
        <div className="row">
            <div className="col-lg-12 mt-5">
                <form action="#" className='input-group'>
                    <input type="text" className='form-control' value={props.studentName} onChange={(e)=>props.setStudentName(e.target.value)}/>
                    <button onClick={(e)=>props.editable ? updateHandler(e,props.studentName) : addStudent(e,props.studentName)} className='btn btn-outline-primary'>{props.editable? 'Update Student':'Add Student'}</button>
                </form>
            </div>
        </div>
    </div> );
}

export default Form;
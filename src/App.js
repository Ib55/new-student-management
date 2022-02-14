import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {
    const [studentName,setStudentName] = useState('')
    const [students,setStudents] = useState([])
    const [editable,setEditable] = useState(false)
    const [editableStudent,setEditableStudent] = useState(null)

    return ( 
        <div className='container'>
          
          <Form
          studentName={studentName}
          setStudentName={setStudentName}
          students={students}
          setStudents={setStudents}
          editable={editable}
          setEditable={setEditable}
          editableStudent={editableStudent}
          setEditableStudent={setEditableStudent}
          />

           <StudentSection
           students={students}
           setStudents={setStudents}
           editable={editable}
           setEditable={setEditable}
           setEditableStudent={setEditableStudent}
           setStudentName={setStudentName}

           />



        </div>
     );
}

export default App;
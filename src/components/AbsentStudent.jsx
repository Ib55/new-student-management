import React from 'react';
function AbsentStudent(props) {
    return ( 
        <table className='table table-hover'>
        <thead>
        <tr>
            <th>Absent Student</th>
        </tr>
        </thead>
       
       <tbody>
       
        {
           props.students.filter(item=>item.isPresent===false).map(student=>(
               <tr>
                   <td>{student.name}</td>
                   <button onClick={()=>props.toggleHandler(student.id)} className='btn btn-outline-danger btn-sm'>Accidentlly</button>
               </tr>
           ))
        }
       </tbody>
       
    </table>
     );
}

export default AbsentStudent;
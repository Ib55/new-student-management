import React from 'react';
function PresentStudent(props) {
    return ( 
             <table className='table table-hover '>
                 <thead>
                 <tr>
                     <th>Present Student</th>
                 </tr>
                 </thead>
                
                <tbody>
                
                 {
                    props.students.filter(item=>item.isPresent===true).map(student=>(
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

export default PresentStudent;
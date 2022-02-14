import React from 'react';
function StudentNameList(props) {
    // deleteHandler 
const deleteHandler=(studentId)=>{
    const del = props.students.filter(item=>item.id !== studentId)
    props.setStudents(del)
}
// deleteHandler 
// editHandler
const editHandler=(studentId)=>{
    props.setEditable(true)
    const edit = props.students.find(item=>item.id === studentId)
    props.setEditableStudent(edit)
    props.setStudentName(edit.name)
}
// editHandler 
//presentHandler 
const presentHandler=(studentId)=>{
    const pre = props.students.find(item=>item.id===studentId)
    if(pre.isPresent===undefined){
        pre.isPresent=true
        props.setStudents([...props.students])
    }
    else if(pre.isPresent===true){
        alert('Now already Present list')
    }else{
        alert('Now already Absent list')
    }
}
// absentHandler 
const absentHandler = (studentId)=>{
    const abs = props.students.find(item=>item.id===studentId)
    if(abs.isPresent===undefined){
        abs.isPresent=false;
        props.setStudents([...props.students])
    }
    else if(abs.isPresent===false){
        alert('Now already Absent list')
    }else{
        alert('Now already Present list')
    }
}
    return ( 
             <table className='table table-hover'>
                 <thead><tr>
                     <th>Student Name</th>
                     </tr></thead>
                 <tbody>
                 {
                     props.students.map((item)=>(
                         <tr>
                             <td>{item.name}</td>

                              <button onClick={()=>deleteHandler(item.id)} className='btn btn-outline-primary btn-sm'>Delete</button>
                              <button onClick={()=>editHandler(item.id)} className='btn btn-outline-primary btn-sm'>Edit</button>
                              <button onClick={()=>presentHandler(item.id)} className='btn btn-outline-primary btn-sm'>Present</button>
                              <button onClick={()=>absentHandler(item.id)} className='btn btn-outline-primary btn-sm'>Absent</button>
                         </tr>
                     ))
                 }
                
                 </tbody>
             </table>
     );
}

export default StudentNameList;
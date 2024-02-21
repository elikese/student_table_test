import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage() {
    const [ studentList, setStudentList ] = useState([]);
    const [ inputValue, setInputValue ] = useState({
        id: "",
        name: "",
        age: "",
        address: ""
    });
    const [ updateId, setUpdateId ] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name] : value
        });
    }
    
    const handleAddClick = () => {
        const student = {
            ...inputValue,
            id: staticId.current += 1
        }
        setStudentList([...studentList, student]);
    }
    
    const handleDeleteClick = (id) => {
        setStudentList(studentList.filter(student => student.id !== id));
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id)
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    const handleUpdateSubmitClick = () => {

        // 풀이
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList]
        updateStudentList[findIndex] = inputValue;
        setStudentList(updateStudentList);

        // 내가한거
        // const updateStudent = {
        //     ...inputValue,
        //     id: inputValue.id
        // }
        // setStudentList([...studentList.filter(student => student.id !== inputValue.id), updateStudent]);
        // studentList.sort((a,b) => a.id - b.id);
        handleCancelClick();
    }

    const handleCancelClick = () => {   
        setUpdateId(0)
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: ""
        });
    }

    // staticId.current 값이 변해도 재랜더링 안됨
    const staticId = useRef(0);
        

    return (
        <div>
            <div>
                <input type="text" value={inputValue.id} name='id' disabled={true} placeholder='ID'/>
                <input type="text" value={inputValue.name} name='name' onChange={handleInputChange} placeholder='이름'/>
                <input type="text" value={inputValue.age} name='age' onChange={handleInputChange} placeholder='나이'/>
                <input type="text" value={inputValue.address} name='address' onChange={handleInputChange} placeholder='주소'/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <thead>
                <th>ID</th>
                <th>이름</th>
                <th>나이</th>
                <th>주소</th>
            </thead>
            <tbody>
                {studentList.map(student => {
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>
                                {
                                updateId !== student.id
                                ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>
                            <td>
                                {
                                updateId !== student.id
                                ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                : <button onClick={handleCancelClick}>취소</button>
                                }
                            </td>
                        </tr>
                    );
            })}
            </tbody>
        </div>
    );
}

export default StudentArrayPage;
import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2() {
    const [inputValue, setInputValue] = useState({
        id: 0,
        name: "",
        score: 0
    });

    const [scoreData, setScoreData] = useState({
        total: 0,
        avg: 0
    });

    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        studentList.reduce((result, student) => result + student.score, 0)
        let sum = 0;
        studentList.forEach(student => sum += parseInt(student.score))
        let average = sum === 0 ? 0 : (sum / studentList.length);
        const newScoreData = { total: sum, avg: average }
        setScoreData(newScoreData);
    }, [studentList]);

    const [updateId, setUpdateId] = useState(0);
    const staticId = useRef(0);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const handleAddClick = () => {
        setStudentList([...studentList, { ...inputValue, id: staticId.current }])
        setUpdateId(staticId.current);
        staticId.current += 1;
    }

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)]);
    }

    const handleEditClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => id === student.id)[0]);
    }

    const handleCancelClick = () => {
        setInputValue({
            id: 0,
            name: "",
            score: 0
        });
        setUpdateId(0);
    }

    const handleEditSubmitClick = () => {
        // 방법1
        // setStudentList([...studentList.filter(student => student.id !== updateId), { ...inputValue, id: updateId }].sort((a, b) => a.id - b.id))
        // 방법2
        setStudentList(studentList.map(student => student.id !== updateId ? student : { ...inputValue, id: updateId }));
        // 방법3
        // const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0])
        // const updateStudentList = [...studentList];
        // updateStudentList[findIndex] = inputValue;
        // setStudentList(updateStudentList);
    }

    return (
        <div>
            <div>
                <input type="text" value={inputValue.id} name='id' placeholder='id' disabled />
                <input type="text" value={inputValue.name} name='name' placeholder='이름' onChange={handleInputChange} />
                <input type="text" value={inputValue.score} name='score' placeholder='점수' onChange={handleInputChange} />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.score}</td>
                                <td>
                                    {updateId !== student.id
                                        ? <button onClick={() => handleEditClick(student.id)}>수정</button>
                                        : <button onClick={handleEditSubmitClick}>확인</button>
                                    }
                                </td>
                                <td>
                                    {updateId !== student.id
                                        ? <button onClick={() => { handleDeleteClick(student.id) }}>삭제</button>
                                        : <button onClick={handleCancelClick}>취소</button>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;
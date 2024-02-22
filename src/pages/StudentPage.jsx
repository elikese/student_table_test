import { useEffect, useRef, useState } from 'react';
import StudentInfo from '../components/StudentInfo';
import InfoInput from '../components/InfoInput';
import InfoButtons from '../components/InfoButtons';

import React from 'react';

function StudentPage() {
  const studentObj = {
    name: "",
    age: "",
    address: ""
  };

  const [student, setStudent] = useState(studentObj);
  const [inputValues, setInputValues] = useState(studentObj);

  const inputRef = {
    name: useRef(),
    age: useRef(),
    address: useRef()
  }

  useEffect(() => {
    // if(refresh) {
    setInputValues(studentObj);
    // }
    // setRefresh(true);
  }, [student]);

  /**
    * js객체 특징
    * 1. 키값은 문자열이어도 된다.
    * 2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
    * 3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });

  }
  const handleOnOk = () => {
    setStudent(inputValues);
  }

  const handleOnClean = () => {
    setStudent(studentObj);
  }
  return (
    <>
      <StudentInfo title="이름" text={student.name} />
      <StudentInfo title="나이" text={student.age} />
      <StudentInfo title="주소" text={student.address} />

      <InfoInput
        name={"name"}
        onChange={handleInputChange}
        value={inputValues.name}
        placeholder='이름'
        inputRef={inputRef.name}
      />

      <InfoInput
        name={"age"}
        onChange={handleInputChange}
        value={inputValues.age}
        placeholder='나이'
        inputRef={inputRef.age}
      />

      <InfoInput
        name={"address"}
        onChange={handleInputChange}
        value={inputValues.address}
        placeholder='주소'
        inputRef={inputRef.address}
      />

      {/* 자식요소를 태그 사이에 넣을 때는 매개변수에 children을 사용한다. */}
      <InfoButtons>
        <button onClick={handleOnOk}>확인</button>
        <button onClick={handleOnClean}>비우기</button>
      </InfoButtons>
    </>
  );
}

export default StudentPage;
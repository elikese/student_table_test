import React, { useEffect, useMemo, useState } from 'react';

function MemoizationTest({ num1, num2 }) {

    const [num3, setNum3] = useState(0);

    console.log("MemoizationTest 렌더링");

    // Memoization - value / function 두가지 있음/ return으로 value나 function을 뱉음

    // Memoization - value(dependency로 인해 선택적으로 재랜더링가능)
    // props 중 num1이 바뀌면 num2의 값은 재랜더링 되지 않음
    // num3가 변해도 props로 전달받은 값이 재랜더링 되지 않음

    const tempNum1 = useMemo(() => {
        console.log("memo: num1");
        return num1 * 10;
    }, [num1]);
    const tempNum2 = useMemo(() => {
        console.log("memo: num2");
        return num2 + 10000;
    }, [num2]);
    const tempNum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
    }, [num3]);
    const tempNum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
    }, [num1, num2]);

    return (
        <>
            <button onClick={() => setNum3(num3 + 1)}>num3증가</button>
            <h3>{tempNum1}</h3>
            <h3>{tempNum2}</h3>
            <h3>{tempNum3}</h3>
            <h3>{tempNum4}</h3>
        </>
    );
}

export default MemoizationTest;
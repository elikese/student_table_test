import { useCallback } from "react";

function MemoizationTest2({ num1, num2 }) {

    // state를 통해props를 변수로 받은 함수는 랜더링될 때 마다 함수 정의를 해 줘야한다
    // useCallback을 통해 dependency 지정하여 선택적으로 재정의(리랜더링 아님)가능
    const fx1 = useCallback(() => {
        console.log("fx1")
        return num1 + 10000;
    }, [num1]);

    const fx2 = useCallback(() => {
        console.log("fx2")
        return num2 + 20000;
    }, [num2]);

    const fx3 = () => {
        console.log("fx3")
        return num1 + num2;
    }

    return (
        <>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
            <h3>{fx3()}</h3>
        </>
    );
}

export default MemoizationTest2;
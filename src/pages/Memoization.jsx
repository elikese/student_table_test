import React, { useState } from 'react';
import MemoizationTest from '../components/MemoizationTest';

function Memoization() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    return (
        <div>
            {/* props 변화시 전달받는 컴포넌트 재랜더링 */}
            <button onClick={() => { setNum1(num1 + 1) }}>num1증가</button>
            <button onClick={() => { setNum2(num2 + 1) }}>num2증가</button>
            <MemoizationTest num1={num1} num2={num2} />
        </div>
    );
}

export default Memoization;
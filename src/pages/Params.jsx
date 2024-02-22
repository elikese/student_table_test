import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Params() {
  // params => url에 데이터담아오는 형태
  // useSearchParams => /Url?key=value 형태. params.get("key")로 value 가져옴
  const params = useSearchParams();


  console.log(params.get("data"));
  const data = params.get("data");
  const data2 = params.get("data2");

  return (
    <div>
      <h3>{data}</h3>
      <h3>{data2}</h3>
    </div>
  );
}

export default Params;
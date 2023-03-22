import React, { useState } from 'react';

const TestSSE = (props:{})=>{

const {} = props

const [data, setData] = useState<{res?:number,err?:string}>();

  async function testShortPolling(){
    try {
      const response = await fetch('http://localhost:3000/shortPolling');
      // console.log(response.headers,response)
      const data = await response.json();
      console.log(data)
      setData(data)
    } catch (error) {
      setData({err:'err'})
    }
  }
    // testXHR();
    // testShortPolling();
    return(<>
      test 服务端推送: 
      <br></br>
      <div>
        <button style={{width:100 ,height:28}} onClick={()=>{setInterval(()=>testShortPolling(),3000);}}> 短轮询 </button> {data?.res } 原理：每隔一段时间向后端请求一次。
      </div>
      <div>
        <button style={{width:100 ,height:28}} onClick={()=>{testShortPolling();}}> long polling </button> {data?.res } 原理：请求一次后端迟迟不返回

      </div>
      {/* {data} */}
      <div></div>
    </>)
}
export default TestSSE;
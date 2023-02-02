import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
      function testXHR(){
        var xhr = new XMLHttpRequest();
        debugger;
        // xhr.open("GET", "http://localhost:3000/apiss", true);
        xhr.open("Post", "http://localhost:3000/api", true);

        // xhr.onload = function (a) {
        //   console.log(a)
        //   if (xhr.status === 200) {
        //     debugger;//用户代码
        //     console.log(xhr.responseText);
        //     setData(xhr.responseText)
        //   } else {
        //     // error
        //     console.error(xhr.statusText);
        //     setData(xhr.statusText)
        //   }
        // };
        xhr.onreadystatechange = function(){
          if(xhr.readyState==4){
            console.log(xhr.responseText);
            setData(xhr.responseText)
          }
        }
        xhr.onerror = function(){
          setData('errrrrrrrrr')
        }
        xhr.onabort = function(){
          setData('aborttttt')
        }
        xhr.send();
      }
      async function testFetch(){
        try {
          debugger;//usr code1
          const response = await fetch('http://localhost:3010/api');
          console.log(response.headers,response)
          const data = await response.json();
          debugger;//usr code2
          setData(data)
        } catch (error) {
          console.error(error);
          setData('err')
        }
      }
      testXHR();
      // testFetch();


  }, []);

  return (
    <div>
      {data ? (
        <div>
          Data:
          {JSON.stringify(data)}
        </div>
      ) : error ? (
        <div>
          Error:
          {/* {error.message} */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AxiosExample;
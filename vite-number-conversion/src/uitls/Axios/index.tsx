import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
      function testXHR(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/api", true);
        xhr.onload = function () {
          if (xhr.status === 200) {
            debugger;//用户代码
            console.log(xhr.responseText);
            setData(xhr.responseText)
          } else {
            // error
            console.error(xhr.statusText);
            setData(xhr.statusText)
    
          }
        };
        xhr.send();
    
      }
      async function testFetch(){
        try {
          debugger;//usr code
          const response = await fetch('http://localhost:3000/api');
          const data = await response.json();
          debugger;//usr code
          setData(data)
        } catch (error) {
          console.error(error);
          setData('err')
        }
      }
      // testXHR();
      testFetch();


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
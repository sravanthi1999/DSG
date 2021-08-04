import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidDData = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const resJson = await response.json();
    console.log(resJson.statewise);
    setData(resJson.statewise);
  };

  useEffect(() => {
    getCovidDData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            {" "}
            <span className="font-weight-bold"> INDIA </span>COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State</th>
                <th> Confirmed</th>
                <th> Recovered</th>
                <th> Deaths</th>
                <th> Active</th>
                <th> Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curEle, ind) => {
                return (
                  <>
                    <tr key={ind}>
                      <th> {curEle.state}</th>
                      <td> {curEle.confirmed}</td>
                      <td> {curEle.recovered}</td>
                      <td> {curEle.deaths}</td>
                      <td> {curEle.active}</td>
                      <td> {curEle.lastupdatedtime}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Covid;

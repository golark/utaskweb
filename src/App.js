import React, { Component } from 'react';
import './App.css';
import TaskList from "./components/TaskList";
import LineGraph from "./components/LineGraph";
import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from "./mockData";

const HeaderStyle = {
    padding: "10px 20px",
    textAlign: "center",
    fontFamily: "Impact,Charcoal,sans-serif",
    color: "#00a0b7",
    fontSize: "36px",
    align: "center",
    margin: "40px"

}

const dashboardStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    minHeight: '100vh',
    height: "100%",
    top: "0",
    bottom: "0",
    backgroundColor: "#ffffff",
}

function App() {
  return (
    <div style={dashboardStyle}>
        <div style={{ width: "30%"}}>
            <header style={HeaderStyle}>Task List</header>
            <TaskList></TaskList>
        </div>
        <div style={{  width: "70%"}}>
            <div style={{display: 'flex', marginTop:'10vh', flexDirection: 'column', alignItems: 'center'}}>
                <header style={HeaderStyle}>Analytics</header>
                <LineGraph
                    data={managerData}
                    average={nationalAverageData}
                    labels={yearLabels} />
            </div>
        </div>
    </div>
  );
}

export default App;

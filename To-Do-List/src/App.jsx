import React from 'react'
import './App.css'
import Card from './components/Card'
import Column from './components/Column'
import ColumnAdd from './components/ColumnAdd'

function App() {
  return (
  <>
  	<h1>To Do List For Today:</h1>
		<ColumnAdd />
	</>
  );
};

export default App

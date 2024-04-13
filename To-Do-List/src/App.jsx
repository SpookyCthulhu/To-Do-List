import React from 'react'
import './App.css'
import Card from './components/Card'
import ColumnAdd from './components/ColumnAdd'
import DelButton from './components/DelButton'

function App() {
  return (
  <>
  	<h1>To Do List For Today:</h1>
		<ColumnAdd />
		<DelButton />
	</>
  );
};

export default App

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  // const onClick = (name: string) => {
  //   console.log(name + 'says hello!')
  // }
  // return (
  //   <Greetings name='Hello' onClick={onClick}/>
  // );
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form)
  }
  return (
    // <MyForm onSubmit={onSubmit}/>
    // <Counter/>
    <ReducerSample/>
  )
}

export default App;

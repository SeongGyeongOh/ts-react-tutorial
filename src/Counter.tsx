import React, { useReducer, useState } from 'react';

type Action = 
  {type : 'INCREASE'} 
  | {type: 'DECREASE'}

const reducer = (state: number, action: Action) => {
  switch(action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    
    default:
      throw new Error('Unhandled action')
  }
}

const Counter = () => {
  // const [count, setcount] = useState<number>(0)
  // const [count, setcount] = useState(0) // useState를 할 때 기본적으로 타입을 추론하기 때문에 generic을 굳이 사용 안해도 상관 없음
  // generics를 활용하면 좋을 때 : nullable
  /**
   * type Information = {name: string; description: string}
   * const [info ,setInfo] = useState<Information | null>(null)
   */

  // const onIncrease = () => setcount(count + 1)
  // const onDecrease = () => setcount(count - 1)

  // reducer를 사용해보자
  const [count, dispatch] = useReducer(reducer, 0)
  const onIncrease = () => dispatch({type: 'INCREASE'})
  const onDecrease = () => dispatch({type: 'DECREASE'})

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
};

export default Counter;
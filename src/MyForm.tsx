import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: {
    name: string
    description: string
  }) => void
}

const MyForm = ({onSubmit}: MyFormProps) => {
  const [form, setForm] = useState({
    name: '',
    description: ''
  })

  const {name, description} = form

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e 처럼 값을 뭘로 넣어야 할지 모를때는 일단 any를 넣자!
    // input의 onChange에 마우스를 올리면 타입을 알려준다!
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()   
    onSubmit(form)
    setForm({
      name: '',
      description: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange}/>
      <input name='description' value={description} onChange={onChange}/>
      <button type='submit'>등록!</button>
    </form>
  );
};

export default MyForm;
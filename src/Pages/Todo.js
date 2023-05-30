import React, { useState } from 'react'
import { Header } from '../Component'
import { Form, TodoList } from '../Container'


export const Todo = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Header></Header>
      <Form text={text} setText={setText}></Form>
      <TodoList text={text} setText={setText} ></TodoList>
    </>
  )
}

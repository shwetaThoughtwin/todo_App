import React from 'react'
import Header from './header'
import {Form} from './form'
import {TodoList} from './todoList'

export const App = () => {
  return (
    <>
      <Header></Header>
      <Form></Form>
      <TodoList></TodoList>
    </>
  )
}


import { VStack, Box, Heading } from '@chakra-ui/react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }


  
  return (
    <VStack p='4'>
      <Box>
        <Heading 
          mb='8' 
          fontWeight='extrabold' 
          size='2xl' 
          bgGradient='linear(to-l, #E400E4, #57D7D3)' 
          bgClip='text'>
        ToDo List
        </Heading>
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default Todo;
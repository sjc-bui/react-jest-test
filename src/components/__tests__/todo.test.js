import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

afterEach(() => {
  cleanup();
});

test('should render non-completed todo', () => {
  const todo = { id: 1, title: 'wash', completed: false };
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash');
  expect(todoElement).not.toContainHTML('strike');
})

test('should render completed todo', () => {
  const todo = { id: 2, title: 'washes', completed: true };
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('washes');
  expect(todoElement).toContainHTML('strike');
})

test('matches snapshot', () => {
  const todo = { id: 1, title: 'wash', completed: false };
  const tree = renderer.create(<Todo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot();
})

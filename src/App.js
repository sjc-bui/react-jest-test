import Todo from './components/todo';
import './App.css';

function App() {
  const todos = [
    { id: 1, title: 'wash', completed: false },
    { id: 2, title: 'feed', completed: true },
  ];

  return (
    <div className="App">
      {
        todos.map((todo) => {
          return <Todo todo={todo}/>
        })
      }
    </div>
  );
}

export default App;

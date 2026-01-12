import React from 'react';
import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Learning App</h1>
        <p>Learning React with Components, Hooks, Jotai & Axios</p>
      </header>

      <main className="App-main">
        <section className="section">
          <Counter />
        </section>

        <section className="section">
          <UserForm />
        </section>

        <section className="section">
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default App;
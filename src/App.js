import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Clock from "./components/Clock";
import uuid from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("/todos/list.do").then(res => {
      this.setState({ todos: res.data.data });
    });
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = todo.isCompleted === 1 ? 0 : 1;
          if (todo.isCompleted === 1) {
            axios
              .get(`/todos/update.do?id=${id}&isCompleted=1`)
              .then(res => {});
          } else {
            axios
              .get(`/todos/update.do?id=${id}&isCompleted=0`)
              .then(res => {});
          }
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.get(`/todos/delete.do?id=${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );

    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
    // fs.writeFileSync("src/data.json", JSON.stringify(this.state.todos));
  };

  // Add Todo
  addTodo = title => {
    const params = new FormData();
    params.append("id", uuid.v4());
    params.append("uid", 1);
    params.append("title", title);
    params.append("isCompleted", 0);
    axios.post("/todos/add.do", params).then(res => {
      console.log(res.data.data);
      this.setState({ todos: [res.data.data, ...this.state.todos] });
    });

    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   isCompleted: false
    // };
    // this.setState({ todos: [newTodo, ...this.state.todos] });
    // fs.writeFileSync("src/data.json", JSON.stringify(this.state.todos));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  <Clock />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

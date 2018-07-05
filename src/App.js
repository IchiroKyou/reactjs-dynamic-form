import React, { Component } from 'react';
import './App.css';
import { DynamicForm } from './components/DynamicForm';

class App extends Component {

  state = {
    data: [
      { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
      { id: 2, name: "b", age: 54, qualification: "B.Sc", rating: 5 },
      { id: 3, name: "c", age: 36, qualification: "B.E", rating: 2 }
    ]
  };

  onSubmit = (model) => {
    model.id = +new Date();
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    });
  };

  render() {
    return (
      <div className="App">
        <DynamicForm
          className="form"
          title="Registration"
          model={apiGetModel()}
          onSubmit={(model) => { this.onSubmit(model) }}
        />

        <pre style={{ width: "300px" }}>
          {JSON.stringify(this.state.data)}
        </pre>
      </div>
    );
  }
}

function apiGetModel() {
  let model =
    [
      { key: "name", label: "Name", props: { required: true } },
      { key: "age", label: "Age", type: "number" },
      { key: "rating", label: "Rating", type: "number", props: { min: 0, max: 5 } },
      { key: "qualification", label: "Qualification" }
    ];

  let result = JSON.parse(
    JSON.stringify(
    [
        {
          "key": "name",
          "label": "Name",
          "props": { "required": true }
        },
        {
          "key": "age",
          "label": "Age",
          "type": "number"
        },
        {
          "key": "rating",
          "label": "Rating",
          "type": "number",
          "props": { "min": 0, "max": 5 }
        },
        {
          "key": "qualification",
          "label": "Qualification"
        }
      ]
  ));
  console.log(result+""+" typeof(result)="+typeof(result));
  return result;
  //return model;
}

export default App;

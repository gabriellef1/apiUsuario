import './App.css';
import React, { Component } from 'react';
import api from './api';
import Table from 'react-bootstrap/Table';


class App extends Component{

  state= {
    JustFiveUsers: [],
  }
  
  async componentDidMount(){
    const response = await api.get('');
    const usuarios = response.data;
    const JustFiveUsers = usuarios.slice(0,5);
    this.setState({ JustFiveUsers });
    
  }

  render(){


    return (
      <div>
        <h3> Listar usuários </h3>
        {this.state.JustFiveUsers.map(item => (
          <Table striped hover> 
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
            <tr>
              <td> {item.id} </td>
              <td> {item.name} </td>
              <td> {item.email} </td>
              <td> {item.username} </td>
            </tr>
        </Table>
        ))}
      </div>
    );
  }
}

export default App;
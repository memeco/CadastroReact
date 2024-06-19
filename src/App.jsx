import './App.css';
import React, { useState } from 'react';

const initialData = [
  { id: 1, nome: "Lucas Quadros", endereco: "Av José, 10", numero: "000000000", cpf: "0000000000", email: "email@email.com", telefone: "51981497785" },
  { id: 2, nome: "Lucas Quadros", endereco: "Av José, 10", numero: "000000000", cpf: "0000000000", email: "email@email.com", telefone: "51981497785" },
  { id: 3, nome: "Lucas Quadros", endereco: "Av José, 10", numero: "000000000", cpf: "0000000000", email: "email@email.com", telefone: "51981497785" },
  { id: 4, nome: "Lucas Quadros", endereco: "Av José, 10", numero: "000000000", cpf: "0000000000", email: "email@email.com", telefone: "51981497785" }
];

function App() {
  const [cadastros, setCadastros] = useState(initialData);

  const handleDeleteClick = (id) => {
    setCadastros(cadastros.filter(cadastro => cadastro.id !== id));
  };

  return (
    <div>
      <h1>Lista de Cadastros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.id}>
              <td>{cadastro.id}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.endereco}</td>
              <td>{cadastro.numero}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.telefone}</td>
              <td>
                <button onClick={() => handleDeleteClick(cadastro.id)} className="red">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

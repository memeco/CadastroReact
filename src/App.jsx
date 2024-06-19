import './App.css';
import React, { useState } from 'react';

const initialData = [
  { id: 1, nome: "Lucas Quadros", endereco: "Av José, 10", numero: "000000000", cpf: "0000000000", email: "email@email.com", telefone: "51981497785" }
];

function App() {
  const [cadastros, setCadastros] = useState(initialData);
  const [editingCadastro, setEditingCadastro] = useState(null);

  const handleDeleteClick = (id) => {
    setCadastros(cadastros.filter(cadastro => cadastro.id !== id));
  };

  const handleEditClick = (cadastro) => {
    setEditingCadastro(cadastro);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCadastro({ ...editingCadastro, [name]: value });
  };

  const handleSave = () => {
    setCadastros(cadastros.map(cadastro => 
      cadastro.id === editingCadastro.id ? editingCadastro : cadastro
    ));
    setEditingCadastro(null);
  };

  const handleCancel = () => {
    setEditingCadastro(null);
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
                <button onClick={() => handleEditClick(cadastro)} className="green">Editar</button>
                <button onClick={() => handleDeleteClick(cadastro.id)} className="red">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCadastro && (
        <div className="edit-form">
          <h2>Editar Cadastro</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <input
              name="nome"
              placeholder="Nome"
              value={editingCadastro.nome}
              onChange={handleInputChange}
            />
            <input
              name="endereco"
              placeholder="Endereço"
              value={editingCadastro.endereco}
              onChange={handleInputChange}
            />
            <input
              name="numero"
              placeholder="Número"
              value={editingCadastro.numero}
              onChange={handleInputChange}
            />
            <input
              name="cpf"
              placeholder="CPF"
              value={editingCadastro.cpf}
              onChange={handleInputChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={editingCadastro.email}
              onChange={handleInputChange}
            />
            <input
              name="telefone"
              placeholder="Telefone"
              value={editingCadastro.telefone}
              onChange={handleInputChange}
            />
            <button type="submit" className="green">Salvar</button>
            <button type="button" onClick={handleCancel} className="red">Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

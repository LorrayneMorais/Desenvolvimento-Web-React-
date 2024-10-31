import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [produto, setProduto] = useState({ nome: '', imagem: '', preco: '' });
  const [produtos, setProdutos] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const addProduto = () => {
    if (produto.nome && produto.imagem && produto.preco) {
      setProdutos([...produtos, { ...produto, selecionado: false }]);
      setProduto({ nome: '', imagem: '', preco: '' });
    }
  };

  const handleformReset = () => {
    setProduto({ nome: '', imagem: '', preco: '' });
  };

  const deleteProduto = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const toggleSelecionado = (index) => {
    const novosProdutos = [...produtos];
    novosProdutos[index].selecionado = !novosProdutos[index].selecionado;
    setProdutos(novosProdutos);
  };

  const calcularPrecoTotal = () => {
    const total = produtos
      .filter((produto) => produto.selecionado)
      .reduce((acc, produto) => acc + parseFloat(produto.preco), 0);
    setPrecoTotal(total);
  };

  return (
    <div className="App">
      <h1>Cadastro de Produtos</h1>
      <div>
        <input
          type="text"
          name="nome"
          value={produto.nome}
          placeholder="Nome do Produto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="imagem"
          value={produto.imagem}
          placeholder="Link da Imagem"
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          value={produto.preco}
          placeholder="Preço"
          onChange={handleChange}
        />
        <button onClick={addProduto}>Incluir</button>
        <button onClick={handleformReset}>Limpar</button>
      </div>
      <h2>Produtos Cadastrados</h2>
      <div>
        {produtos.map((prod, index) => (
          <div key={index} style={{ border: '1px solid #eef07c', padding: '10px', margin: '10px' }}>
            <h3>Nome: {prod.nome}</h3>
            <img src={prod.imagem} alt={prod.nome} width="100" />
            <p>Preço: R$ {prod.preco}</p>
            <input
              type="checkbox"
              checked={prod.selecionado}
              onChange={() => toggleSelecionado(index)}
            />
            <button onClick={() => deleteProduto(index)}>Deletar</button>
            <p/>
          </div>
        ))}
      </div>
      <p/>
      <button onClick={calcularPrecoTotal}>Ver Preço</button>
      <h3>Preço Total dos Produtos Selecionados: R$ {precoTotal.toFixed(2)}</h3>
    </div>
  );
}

export default App;
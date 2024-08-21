// import React, { useEffect } from 'react';
import React, {  useReducer } from 'react';
import { appReducer, EstadoInicial, acaoTipos } from './reducer.js';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { RiChat2Line } from "react-icons/ri";

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  // PARA PEGAR COLABORADORES DE UMA JSONAPI

  // useEffect(() => {
  //   fetch('http://localhost:8080/pessoas')
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       dados.forEach(colaborador => {
  //         dispatch({ tipo: acaoTipos.ADD_COLABORADOR, payload: colaborador });
  //       });
  //     });
  // }, []); 

  const [estado, dispatch] = useReducer(appReducer, EstadoInicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    dispatch({ tipo: acaoTipos.ADD_COLABORADOR, payload: colaborador });
  };

  const botaoFormulario = () => {
    dispatch({ tipo: acaoTipos.VISAO_FORMULARIO });
  };

  const estiloBotao = {
    marginLeft: '70%',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <Banner />

      {estado.formularioVisivel && (
        <Formulario 
          times={times.map(time => time.nome)} 
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
      )}

      <RiChat2Line size={25} onClick={botaoFormulario} style={estiloBotao} /> 

      {times.map(time => (
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={estado.colaboradores.filter(colaborador => colaborador.time === time.nome)}
        /> 
      ))}

      <Rodape />
    </div>
  );
}

export default App;

export const EstadoInicial = {
  colaboradores: [],
  formularioVisivel: true,
};

export const acaoTipos = {
  ADD_COLABORADOR: 'ADD_COLABORADOR',
  VISAO_FORMULARIO: 'VISAO_FORMULARIO',
};

export const appReducer = (estado, acao) => {
  switch (acao.tipo) {
    case acaoTipos.ADD_COLABORADOR:
      return {
        ...estado,
        colaboradores: [...estado.colaboradores, acao.payload],
      };
    case acaoTipos.VISAO_FORMULARIO:
      return {
        ...estado,
        formularioVisivel: !estado.formularioVisivel,
      };
    default:
      return estado;
  }
};



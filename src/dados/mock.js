// Dados de exemplo — troque por chamadas à API (axios) quando o back-end estiver pronto.
export const usuarioLogado = { nome: "Mariana Rocha", setor: "Setor de Logística" };

export const ativos = [
  {
    id: "AT-0231", nome: "Câmara fria 02", categoria: "Refrigeração", local: "Depósito A",
    verificacao: "06/10/2026", situacao: "Verificado",
    responsavel: "Carlos Souza", setor: "Logística", aquisicao: "14/03/2022",
    historico: [
      { titulo: "Localização confirmada", detalhe: "06/10/2026 · Depósito A · Carlos Souza" },
      { titulo: "Manutenção preventiva", detalhe: "22/08/2026 · Oficina interna · Equipe técnica" },
      { titulo: "Transferido de local", detalhe: "02/05/2026 · Para o Depósito A · Mariana Rocha" },
      { titulo: "Ativo cadastrado", detalhe: "14/03/2022 · João Lima" },
    ],
  },
  { id: "AT-0198", nome: "Empilhadeira 04", categoria: "Movimentação", local: "Pátio externo", verificacao: "05/10/2026", situacao: "Verificado" },
  { id: "AT-0344", nome: "Balança industrial 01", categoria: "Produção", local: "Linha 3", verificacao: "29/09/2026", situacao: "Aguardando" },
  { id: "AT-0087", nome: "Gerador 02", categoria: "Energia", local: "Almoxarifado", verificacao: "28/09/2026", situacao: "Divergência" },
  { id: "AT-0412", nome: "Paleteira manual 07", categoria: "Movimentação", local: "Depósito B", verificacao: "06/10/2026", situacao: "Verificado" },
  { id: "AT-0256", nome: "Forno industrial 03", categoria: "Produção", local: "Linha 1", verificacao: "04/10/2026", situacao: "Verificado" },
];

export const movimentacoes = [
  { id: "AT-0231", nome: "Câmara fria 02", local: "Depósito A", quando: "Há 20 min", situacao: "Verificado" },
  { id: "AT-0198", nome: "Empilhadeira 04", local: "Pátio externo", quando: "Há 1 h", situacao: "Verificado" },
  { id: "AT-0344", nome: "Balança industrial 01", local: "Linha 3", quando: "Há 3 h", situacao: "Aguardando" },
  { id: "AT-0087", nome: "Gerador 02", local: "Almoxarifado", quando: "Ontem", situacao: "Divergência" },
];

export const atencao = [
  { titulo: "Gerador 02", texto: "O local registrado é diferente do local encontrado.", acao: "Resolver divergência", tom: "alerta" },
  { titulo: "Balança industrial 01", texto: "Sem verificação há 9 dias.", acao: "Marcar como verificada", tom: "laranja" },
  { titulo: "Rack de estoque C12", texto: "Sem verificação há 18 dias.", acao: "Marcar como verificado", tom: "laranja" },
];

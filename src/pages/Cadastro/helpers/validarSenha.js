function validarSenha(usuario, senha, csenha) {
  if (usuario === '') {
    return 'Nome vazio!';
  }
  if (senha === '' || csenha === '') {
    return 'Campos vazios!';
  }
  if (senha !== csenha) {
    return 'Senhas diferentes!';
  }
  if (senha.length < 6 || csenha.length < 6) {
    return 'Senha muito curta!';
  }
  return 'Tudo certo!';
}
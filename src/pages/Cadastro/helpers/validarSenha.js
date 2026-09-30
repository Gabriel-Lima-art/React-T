export default function validarSenha(senha, csenha) {
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
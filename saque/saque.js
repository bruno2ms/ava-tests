const notasPossiveis = [100, 50, 20, 10];

const saque = (restante) => {
  let menorNota = notasPossiveis[notasPossiveis.length - 1];
  if (restante < menorNota) {
    return 'Não é possível sacar o valor'
  }

  let notas = notasPossiveis.map((nota) => {
    let notas = Math.floor(restante / nota);
    restante = restante % nota;
    return {[nota]: notas};
  }).filter((elem) => elem[Object.keys(elem)[0]] > 0 );

  return Object.assign(...notas);
}

export { saque };
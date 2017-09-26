const jogadas = {
    'papel':   'pedra',
    'pedra':   'tesoura',
    'tesoura': 'papel'
}

const jokempo = (mao1, mao2) => {
    return quemVenceQuem(mao1, mao2);
}

const quemVenceQuem = (mao1, mao2) => {
    if (jogadas[mao1] === mao2) {
        return `Jogador 1 vence: ${mao1} vence ${mao2}`;
    } else if (jogadas[mao2] === mao1) {
        return `Jogador 2 vence: ${mao2} vence ${mao1}`;
    } else {
        return 'Ocorreu um empate';
    }
}

export { jokempo };
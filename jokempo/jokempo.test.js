/*
Este problema foi utilizado em 524 Dojo(s).
Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.
O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.
As regras são as seguintes:
- Pedra empata com Pedra e ganha de Tesoura
- Tesoura empata com Tesoura e ganha de Papel
- Papel empata com Papel e ganha de Pedra
*/

import test from 'ava';
import { jokempo } from './jokempo';

test('Existe a função jokempo', t => {
    t.is(typeof(jokempo), 'function');
});

test('Pedra vs Pedra', t => {
    t.is(jokempo('pedra', 'pedra'), 'Ocorreu um empate');
});

test('Tesoura vs Tesoura', t => {
    t.is(jokempo('tesoura', 'tesoura'), 'Ocorreu um empate');
});

test('Papel vs Papel', t => {
    t.is(jokempo('papel', 'papel'), 'Ocorreu um empate');
});

test('Pedra vs Tesoura', t => {
    t.is(jokempo('pedra', 'tesoura'), 'Jogador 1 vence: pedra vence tesoura');
});

test('Tesoura vs Pedra', t => {
    t.is(jokempo('tesoura', 'pedra'), 'Jogador 2 vence: pedra vence tesoura');
});

test('Papel vs Pedra', t => {
    t.is(jokempo('papel', 'pedra'), 'Jogador 1 vence: papel vence pedra');
});

test('Pedra vs Papel', t => {
    t.is(jokempo('pedra', 'papel'), 'Jogador 2 vence: papel vence pedra');
});

test('Tesoura vs Papel', t => {
    t.is(jokempo('tesoura', 'papel'), 'Jogador 1 vence: tesoura vence papel');
});

test('Papel vs Tesoura', t => {
    t.is(jokempo('papel', 'tesoura'), 'Jogador 2 vence: tesoura vence papel');
});

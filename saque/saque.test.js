/*
Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:
- Entregar o menor número de notas;
- É possível sacar o valor solicitado com as notas disponíveis;
- Saldo do cliente infinito;
- Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do problema);
- Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

Exemplos:
- Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
- Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00.
*/

import test from 'ava';
import { saque } from './saque';

test('Cliente saca R$10,00', t => {
    t.deepEqual(saque('10'), {10: 1});
});

test('Cliente saca R$20,00', t => {
    t.deepEqual(saque('20'), {20: 1});
});

test('Cliente tenta saca R$5,00', t => {
    t.is(saque('5'), 'Não é possível sacar o valor');
});

test('Cliente saca R$30,00', t => {
    t.deepEqual(saque('30'), {20: 1, 10: 1});
});

test('Cliente saca R$40,00', t => {
    t.deepEqual(saque('40'), {20: 2});
});

test('Cliente saca R$50,00', t => {
    t.deepEqual(saque('50'), {50: 1});
});

test('Cliente saca R$60,00', t => {
    t.deepEqual(saque('60'), {50: 1, 10: 1});
});

test('Cliente saca R$80,00', t => {
    t.deepEqual(saque('80'), {50: 1, 20: 1, 10: 1});
});

test('Cliente saca R$500,00', t => {
    t.deepEqual(saque('500'), {100: 5});
});
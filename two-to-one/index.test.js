import test from 'ava';
import { longest, sortString } from './index';

test('Ordena string já ordenada', t => {
    t.is(sortString('abcd'), 'abcd');
});

test('Ordena string inversa', t => {
    t.is(sortString('dcba'), 'abcd');
});

test('Ordena string grande com repetições', t => {
    t.is(sortString('xyaabbbccccdefww'), 'abcdefwxy');
});

test('Mescla 2 strings e ordena', t => {
    t.is(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
});

test('Mescla 2 strings e ordena', t => {
    t.is(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
});

test('Mescla 2 strings e ordena', t => {
    t.is(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
});





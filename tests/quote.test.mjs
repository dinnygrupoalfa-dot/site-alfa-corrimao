import test from 'node:test';
import assert from 'node:assert/strict';
import {buildQuoteMessage,validPhone} from '../src/scripts/quote.mjs';
test('Telefone brasileiro com DDD; rejeita ausência de DDD e campos incompletos',()=>{
 assert.equal(validPhone('(11) 94770-4632'),true);
 assert.equal(validPhone('11 4357-3447'),true);
 assert.equal(validPhone('+55 11 94770-4632'),true);
 for(const value of ['', '947704632','00000000000','123'])assert.equal(validPhone(value),false);
});
test('Orçamento mantém serviço e contexto; não inclui campos vazios ou códigos internos',()=>{
 const result=buildQuoteMessage({nome:' Ana ',telefone:'11999999999',cidade:'São Paulo/SP',servico:'Corrimão duplo de inox para rampa',empresa:'Construtora',mensagem:'Duas rampas\nEnviar projeto'});
 assert.match(result,/Nome: Ana/);assert.match(result,/Serviço: Corrimão duplo de inox para rampa/);assert.match(result,/Sobre a obra: Duas rampas Enviar projeto/);
 assert.doesNotMatch(result,/undefined|ACF-|Não informado/);
 const minimal=buildQuoteMessage({nome:'Ana',telefone:'11999999999',cidade:'SP',servico:'Guarda-corpo'});
 assert.doesNotMatch(minimal,/Empresa\/condomínio:|Sobre a obra:/);
});

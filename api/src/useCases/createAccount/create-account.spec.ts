import { describe, expect, it } from 'vitest';
import { CreateAccountControllerInMemory } from './in-memory';
describe('Aqui será testado as funções de criar conta de usuário', ()=>{
    it('Deveria criar uma conta normalmente', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'RyanDiasMarinho',
            password:'123456789',
        });
        expect(createAccountNormal).toHaveLength(2);
    });
    it('Deveria retornar um erro por nome de usuário igual', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'teste',
            password:'123456789',
        });
        expect(createAccountNormal).toThrow;
    });
    it('Deveria retornar um erro de validação do ZOD', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'TESTE',
            password:'1289',
        });
        expect(createAccountNormal).toThrow;
    });
});

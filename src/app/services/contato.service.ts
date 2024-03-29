import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  private contatos: Contato[]=[
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email" :"ana@email.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email" :"antonio@email.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email" :"bruno@email.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email" :"beatriz@email.com"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email" :"carlos@email.com"},
    {"id": 6, "nome": "Cláudia", "telefone": "31 176437098", "email" :"claudia@email.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email" :"daniel@email.com"}
  ] 

  constructor() {
    this.carregarContatosDoLocalStorage();
  }

  private carregarContatosDoLocalStorage() {
    if (typeof localStorage !== 'undefined') {
    // Obter dados localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
    this.contatos = contatosLocalStorage || this.contatos;

    // Salvar contatos no localStorage
    this.salvarContatosNoLocalStorage();
    } else{
      console.error('O LocalStorage nao esta Definido')
    }
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
}


  private salvarContatosNoLocalStorage() {
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(){
    return this.contatos;
  }
}

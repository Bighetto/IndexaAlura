import { Component } from '@angular/core';

import agenda from './agenda.json';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

interface Contato{
  id: number
  nome: string
  telefone : string
}


@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
    RouterLink],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})


export class ListaContatosComponent {

  alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

  filtrarContatosPorTexto(): Contato[]{
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra:string) : Contato[]{
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }

}

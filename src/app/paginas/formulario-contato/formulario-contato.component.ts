import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule,
  ContainerComponent,
  SeparadorComponent,
  ReactiveFormsModule,
  RouterLink],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit{

  constructor(private contatoService: ContatoService){

  }

    contatoForm!: FormGroup;

    ngOnInit(): void {
      this.inicializarFormulario();
    }

    inicializarFormulario(){
      this.contatoForm = new FormGroup({
        nome: new FormControl('', Validators.required),
        telefone: new FormControl('',  Validators.required),
        email: new FormControl('',  [Validators.required, Validators.email]),
        aniversario: new FormControl(''),
        redes: new FormControl(''),
        observacoes: new FormControl('')
      });
    }

    salvarContato(){
      const novoContato = this.contatoForm.value;
      this.contatoService.salvarContato(novoContato);
    }

    cancelar(){
      console.log('Operacao cancelada')
    }
}

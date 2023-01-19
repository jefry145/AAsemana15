import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*alamacen de datos */

  BaseDatos:{name:string, apell:string, Profesion:string}[]=[]

  /*captura de datos*/
  
  name='';
  apell='';
  Profesion='';

/*funcion para registrar*/

  registrar(){
    this.BaseDatos.push({'name':this.name, 'apell':this.apell, 'Profesion':this.Profesion})
  }

  /*eliminar datos*/
  
  borrar(id:number){
    var confirmacion= window.confirm("Estas seguro de eliminar esta fila ?")
    if(confirmacion === true){
      this.BaseDatos.splice(id,1)
    }
    else{
       alert("De acuerdo")
    }
    
  }
  constructor() { }

  
  ngOnInit(): void {
  }

}
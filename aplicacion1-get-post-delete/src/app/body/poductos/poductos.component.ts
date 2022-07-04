import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
declare var $ : any;
@Component({
  selector: 'app-poductos',
  templateUrl: './poductos.component.html',
  styleUrls: ['./poductos.component.css']
})
export class PoductosComponent implements OnInit {
  productos : any = [];

  constructor(private service:ProductoService) { }

  ngOnInit(): void {
    
    // getAll() {
    //   this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
    //     console.log(data);
    //   });
    // }
    this.buscarDatos();
  }

  buscarDatos(){
    this.service.getAll().subscribe(lista=>{
      this.productos = lista.data;
    })
  }

  seleccion:any
  error:any
  seleccionar(item:any){
    this.error = undefined
    this.seleccion = Object.assign({}, item)
  }

  agregar(){
    this.service.post(this.seleccion).subscribe(respuesta=>{
      this.buscarDatos();
    },error=>{
      console.log(error);
      this.error = "Error al agregar un médico";
    })
  }

  editar(){
    this.error = undefined
    this.service.put(this.seleccion).subscribe(respuesta=>{
      this.buscarDatos();
    },error=>{
      console.log(error);
      this.error = "Error al actualizar el médico";
    })
  }

  eliminar(){
    this.service.delete(this.seleccion.id).subscribe(respuesta=>{
      this.buscarDatos();
    },error=>{
      console.log(error);
      this.error = "Error al eliminar el médico";
    })
  }
}

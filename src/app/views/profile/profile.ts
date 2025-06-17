import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { Profile } from '../../models/profile';
@Component({
  selector: 'app-profile',
  imports: [
    MatListModule,
    MatTableModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileModule {

  
  displayedColumns: string[] = ['Age', 'Height', 'Weight', 'Gender', 'UserId', 'acciones'];

  listProfiles:Profile[]=[
    {
        Id:'kol',
        Age:5,
        Height:12.5,
        Weight:52,
        Gender:'femenino',
        UserId:'loalzo',
        User:null
      },
    
    {
        Id:'kola',
        Age:6,
        Height:23.6,
        Weight:63,
        Gender:'femenino',
        UserId:'loalzo',
        User:null
      },

    {
        Id:'kolag',
        Age:7,
        Height:34.7,
        Weight:74,
        Gender:'prefieronodecir',
        UserId:'loalzola',
        User:null
      },
  ];
  
  editarElemento(elemento: any) {
    console.log('Editar:', elemento);
  }

  eliminarElemento(elemento: any) {
    this.listProfiles = this.listProfiles.filter(e => e !== elemento);
  }
}

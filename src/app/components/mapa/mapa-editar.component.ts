import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html'
})
export class MapaEditarComponent {

  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogReference: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log( data );
      this.formGroup = formBuilder.group({
        'titulo': data.titulo,
        'descripcion': data.descripcion
      });
    }

  guardarCambios() {
    this.dialogReference.close(this.formGroup.value);
  }

  onNoClick(): void {
    this.dialogReference.close();
  }


}

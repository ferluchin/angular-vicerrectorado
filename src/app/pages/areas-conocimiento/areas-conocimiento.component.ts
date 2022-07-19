import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas-conocimiento',
  templateUrl: './areas-conocimiento.component.html',
  styleUrls: ['./areas-conocimiento.component.scss']
})
export class AreasConocimientoComponent {

  isSubmitted = false;

  constructor(public fb: FormBuilder) { }
  registrationForm = this.fb.group({
    actividadCientifica: ['', [Validators.required]],
    objetivoSocioEconomico: ['', [Validators.required]],
    areaTematicaID: ['', [Validators.required]],

    objetivosPlanCreacionOportunidades: ['', [Validators.required]],

    campoAmplio: ['', [Validators.required]],
    campoEspecifico: ['', [Validators.required]],
    campoDetallado: ['', [Validators.required]],

    objetivosDesarrolloSostenible: ['', [Validators.required]],

  });

  handleChange(event: any) {

    // this.cityName?.setValue(event.target.value, {
    //   onlySelf: true,
    // });

    const value = event.target.value;
    const name = event.target.name;
    // setState({
    //   ...state,
    //   [event.target.name]: value
    // });
    event.target.name?.setValue(value, {
      onlySelf: true,
    })
  }

  // Access formcontrols getter

  get actividadCientifica() {
    return this.registrationForm.get('actividadCientifica');
  }

  onSubmit(): void {
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }

  // ngOnInit(): void {
  // }

  // handleChange(event) {

  //   //name = new FormControl('');
  //   this.selectedColorId = event.target.value;
  // }
}

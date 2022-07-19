import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas-conocimiento',
  templateUrl: './areas-conocimiento.component.html',
  styleUrls: ['./areas-conocimiento.component.scss']
})
export class AreasConocimientoComponent implements OnInit {

  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event) {
    this.selectedColorId = event.target.value;
  }

}

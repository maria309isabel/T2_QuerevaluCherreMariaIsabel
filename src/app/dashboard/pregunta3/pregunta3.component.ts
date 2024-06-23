import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  alcoholForm: FormGroup;

  vehicles = [
    { type: 'Camión', indicator: 'C', maxRate: 0.3 },
    { type: 'Autobús', indicator: 'A', maxRate: 0.3 },
    { type: 'Turismo', indicator: 'T', maxRate: 0.5 },
    { type: 'Motocicleta', indicator: 'M', maxRate: 0.3 }
  ];

  constructor(private fb: FormBuilder) {
    this.alcoholForm = this.fb.group({
      vehicleType: ['', Validators.required],
      alcoholRate: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.alcoholForm.invalid) {
      return;
    }

    const formValues = this.alcoholForm.value;
    const vehicle = this.vehicles.find(v => v.indicator === formValues.vehicleType);

    if (vehicle && formValues.alcoholRate > vehicle.maxRate) {
      alert('Positivo en el control de alcoholemia');
    } else {
      alert('Negativo en el control de alcoholemia');
    }
  }
}




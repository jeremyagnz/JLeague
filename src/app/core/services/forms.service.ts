import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private fb: FormBuilder) {}

  createTournamentForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      teams: [null, [Validators.required, Validators.min(1)]],
      matches: [null, [Validators.required, Validators.min(1)]],
      prizePool: [null, Validators.required],
      sponsor: [''],
      description: [''],
      categories: this.fb.array([
        this.fb.control('Masculino', Validators.required),
      ]),
      organizer: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      createdBy: [1],
      status: ['Pendiente'],
    });
  }
}

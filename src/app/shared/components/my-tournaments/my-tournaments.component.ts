import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormsService } from 'src/app/core/services/forms.service';
import { TournamentService } from 'src/app/core/services/tournament.service';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class MyTournamentsComponent implements OnInit {
  tournaments: any[] = [];
  tournamentForm!: FormGroup;
  isEditMode = false;
  editingTournamentId: number | null = null;
  modalVisible = false;

  constructor(
    private fb: FormBuilder,
    private tournamentService: TournamentService,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.loadTournaments();
    this.tournamentForm = this.formsService.createTournamentForm();

    this.tournamentForm.statusChanges.subscribe((status) => {
      console.log('Formulario estado:', status);
    });
  }

  get categories() {
    return this.tournamentForm.get('categories') as FormArray;
  }

  addCategory() {
    this.categories.push(this.fb.control('', Validators.required));
  }

  removeCategory(index: number) {
    if (this.categories.length > 1) {
      this.categories.removeAt(index);
    }
  }

  loadTournaments() {
    this.tournamentService.getTournaments().subscribe({
      next: (data) => (this.tournaments = data),
      error: (err) => console.error('Error cargando torneos', err),
    });
  }

  openModal() {
    this.resetForm();
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.resetForm();
  }

  onSubmit() {
    if (this.tournamentForm.invalid) return;

    if (this.isEditMode && this.editingTournamentId !== null) {
      this.tournamentService
        .updateTournament(this.editingTournamentId, this.tournamentForm.value)
        .subscribe(() => {
          this.loadTournaments();
          this.closeModal();
        });
    } else {
      this.tournamentService
        .addTournament(this.tournamentForm.value)
        .subscribe(() => {
          this.loadTournaments();
          this.closeModal();
        });
    }
  }

  onEditTournament(tournament: any) {
    this.isEditMode = true;
    this.editingTournamentId = tournament.id;

    this.tournamentForm.patchValue({
      name: tournament.name,
      location: tournament.location,
      dateStart: tournament.dateStart,
      dateEnd: tournament.dateEnd,
      createdBy: tournament.createdBy,
      teams: tournament.teams,
      matches: tournament.matches,
      status: tournament.status,
      winner: tournament.winner,
      prizePool: tournament.prizePool,
      sponsor: tournament.sponsor,
      description: tournament.description,
      organizer: tournament.organizer,
    });

    this.categories.clear();
    tournament.categories.forEach((cat: string) => {
      this.categories.push(this.fb.control(cat, Validators.required));
    });

    this.openModal();
  }

  onDeleteTournament(id: number) {
    if (confirm('¿Estás seguro de eliminar este torneo?')) {
      this.tournamentService.deleteTournament(id).subscribe(() => {
        this.loadTournaments();
      });
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editingTournamentId = null;

    this.tournamentForm.reset({
      name: '',
      location: '',
      dateStart: '',
      dateEnd: '',
      teams: null,
      matches: null,
      prizePool: null,
      sponsor: '',
      description: '',
      createdBy: 1,
      status: 'Pendiente',
      organizer: {
        name: '',
        email: '',
      },
    });

    this.categories.clear();
    this.categories.push(this.fb.control('Masculino', Validators.required));
  }
}

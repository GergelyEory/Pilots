import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPilot, PilotStore } from '../pilots.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	template: `
		<main class="container mx-auto">
			<div class="mt-4 mb-8">
				<a class="flex" [routerLink]="'/'">
					<svg
						class="h-6 w-6 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
					</svg>
					Back
				</a>
			</div>
			<form [formGroup]="pilotForm" (ngSubmit)="onSubmit()">
				<div class="mx-auto">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Name</span>
						</label>
						<input
							type="text"
							placeholder="Captain Joe"
							class="input input-bordered w-full max-w-md"
							formControlName="name" />
					</div>
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Flight hours</span>
						</label>
						<input
							type="number"
							placeholder="5000"
							class="input input-bordered w-full max-w-md"
							formControlName="flightHours" />
					</div>
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Date of birth</span>
						</label>
						<input
							type="date"
							placeholder="5000"
							class="input input-bordered w-full max-w-md picker-icon"
							formControlName="dateOfBirth" />
					</div>
					<button type="submit" class="btn btn-secondary mt-4">Submit</button>
				</div>
			</form>
		</main>
	`,
	styles: [
		`
			.picker-icon {
				color-scheme: dark;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPilotComponent {
	editedPilot?: IPilot;
	pilotForm: FormGroup;

	constructor(private pilotStore: PilotStore, private router: Router) {
		this.editedPilot = this.router.getCurrentNavigation()?.extras.state?.['pilot'];

		this.pilotForm = new FormGroup({
			name: new FormControl<string>(this.editedPilot?.name ?? '', Validators.required),
			dateOfBirth: new FormControl<Date>(this.editedPilot?.dateOfBirth ?? new Date(), Validators.required),
			flightHours: new FormControl<number>(this.editedPilot?.flightHours ?? 0, Validators.required),
		});
	}

	onSubmit(): void {
		if (this.pilotForm.valid) {
			// Choose whether we want to add a new entry or update existing
			!!this.editedPilot
				? this.pilotStore.editPilot({ ...(this.pilotForm.value as IPilot), id: this.editedPilot!.id })
				: this.pilotStore.addPilot({ ...(this.pilotForm.value as IPilot), id: this.generateId() });
			this.router.navigate(['/']);
		}
	}

	generateId(): number {
		return Math.floor(Math.random() * 99999999999);
	}
}

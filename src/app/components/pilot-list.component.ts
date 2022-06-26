import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { IPilot, PilotStore } from '../pilots.store';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
	template: `
		<main class="container mx-auto">
			<div class="flex flex-wrap">
				<app-pilot-card
					class="md:w-1/2 lg:w-4/12"
					*ngFor="let pilot of sortedPilots$ | async; trackBy: trackById"
					[pilot]="pilot"
					(editClicked)="onEditClicked(pilot)"
					(deleteClicked)="onDeleteClicked(pilot)">
				</app-pilot-card>
			</div>
			<button class="btn btn-secondary mt-4 ml-4" [routerLink]="'/add-pilot'">Add pilot</button>
		</main>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilotListComponent {
	sortedPilots$ = this.pilotStore.pilots$.pipe(map((pilots) => pilots.sort((a, b) => (a.id > b.id ? 1 : -1))));
	trackById: TrackByFunction<IPilot> = (index: number, pilot): number => pilot.id;

	constructor(public pilotStore: PilotStore, private router: Router) {}

	onEditClicked(pilot: IPilot): void {
		this.router.navigate(['/add-pilot'], { state: { pilot: pilot } });
	}

	onDeleteClicked(pilot: IPilot): void {
		this.pilotStore.deletePilot(pilot.id);
	}
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPilot } from '../pilots.store';

@Component({
	selector: 'app-pilot-card',
	template: `
		<div class="card w-auto bg-primary text-primary-content m-4">
			<div class="card-body">
				<h2 class="card-title">{{ pilot.name }}</h2>
				<p>Flight hours: {{ pilot.flightHours }}</p>
				<p>Date of birth: {{ pilot.dateOfBirth | date }}</p>
				<div class="card-actions justify-end">
					<button class="btn text-white" (click)="editClicked.emit()">Edit</button>
					<button class="btn text-white bg-red-600 hover:bg-red-700" (click)="deleteClicked.emit()">delete</button>
				</div>
			</div>
		</div>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilotCardComponent {
	@Input() pilot!: IPilot;
	@Output() editClicked = new EventEmitter<void>();
	@Output() deleteClicked = new EventEmitter<void>();
}

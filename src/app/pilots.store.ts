import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface IPilot {
	id: number;
	name: string;
	flightHours: number;
	dateOfBirth: Date;
}

export interface PilotState {
	pilots: Array<IPilot>;
}

const defaultState: PilotState = {
	pilots: [
		{ id: 1, name: 'Captain One', dateOfBirth: new Date(835813830000), flightHours: 1000 },
		{ id: 2, name: 'Captain Two', dateOfBirth: new Date(835813830000), flightHours: 2000 },
		{ id: 3, name: 'Captain Three', dateOfBirth: new Date(835813830000), flightHours: 3000 },
		{ id: 4, name: 'Captain Four', dateOfBirth: new Date(835813830000), flightHours: 4000 },
		{ id: 5, name: 'Captain Five', dateOfBirth: new Date(835813830000), flightHours: 5000 },
	],
};

@Injectable()
export class PilotStore extends ComponentStore<PilotState> {
	// Read state
	pilots$ = this.select((state) => state.pilots);

	constructor() {
		super(defaultState);
	}

	// Update state
	deletePilot = this.updater<number>((state, pilotId) => ({
		pilots: state.pilots.filter((p) => p.id !== pilotId),
	}));

	addPilot = this.updater<IPilot>((state, pilot) => ({
		pilots: [...state.pilots, pilot],
	}));

	editPilot = this.updater<IPilot>((state, pilot) => ({
		pilots: [...state.pilots.filter((p) => p.id !== pilot.id), pilot],
	}));
}

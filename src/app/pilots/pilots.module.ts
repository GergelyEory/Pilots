import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotListComponent } from './components/pilot-list.component';
import { PilotCardComponent } from './components/pilot-card.component';
import { AddPilotComponent } from './components/add-pilot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [PilotListComponent, PilotCardComponent, AddPilotComponent],
	imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
})
export class PilotsModule {}

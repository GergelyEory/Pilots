import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PilotListComponent } from './pilots/components/pilot-list.component';
import { AddPilotComponent } from './pilots/components/add-pilot.component';
import { PilotCardComponent } from './pilots/components/pilot-card.component';
import { PilotStore } from './pilots/pilots.store';

@NgModule({
	declarations: [AppComponent, PilotListComponent, PilotCardComponent, AddPilotComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [PilotStore],
	bootstrap: [AppComponent],
})
export class AppModule {}

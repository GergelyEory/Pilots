import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotListComponent } from './components/pilot-list.component';
import { PilotCardComponent } from './components/pilot-card.component';
import { AddPilotComponent } from './components/add-pilot.component';
import { PilotStore } from './pilots.store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, PilotListComponent, PilotCardComponent, AddPilotComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [PilotStore],
	bootstrap: [AppComponent],
})
export class AppModule {}

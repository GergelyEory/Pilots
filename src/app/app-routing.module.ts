import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotListComponent } from './pilots/components/pilot-list.component';
import { AddPilotComponent } from './pilots/components/add-pilot.component';

const routes: Routes = [
	{ path: '', component: PilotListComponent },
	{ path: 'add-pilot', component: AddPilotComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

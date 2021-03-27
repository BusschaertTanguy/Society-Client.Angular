import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenListComponent } from './containers/citizen-list/citizen-list.component';

const routes: Routes = [{ path: '', component: CitizenListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenRoutingModule {}

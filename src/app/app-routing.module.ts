import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'citizens',
    loadChildren: () => import('./features/citizen/citizen.module').then((m) => m.CitizenModule),
  },
  {
    path: '',
    redirectTo: 'citizens',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';

import { CitizenRoutingModule } from './citizen-routing.module';
import { CitizenComponent } from './citizen.component';
import { CitizenService } from './services/citizen.service';
import { CitizenFacade } from './services/citizen.facade';
import { SharedModule } from '../../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { CitizenState } from './states/citizen.state';
import { CitizenListComponent } from './containers/citizen-list/citizen-list.component';
import { CitizenTableComponent } from './components/citizen-table/citizen-table.component';
import { CitizenDetailModalComponent } from './components/citizen-detail-modal/citizen-detail-modal.component';

@NgModule({
  declarations: [CitizenComponent, CitizenListComponent, CitizenTableComponent, CitizenDetailModalComponent],
  imports: [SharedModule, CitizenRoutingModule, NgxsModule.forFeature([CitizenState])],
  providers: [CitizenFacade, CitizenService],
})
export class CitizenModule {}

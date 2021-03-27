import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CitizenFacade } from '../../services/citizen.facade';
import { filter, tap } from 'rxjs/operators';
import { CitizenDetailModel } from '../../states/citizen.model';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenListComponent implements OnInit {
  public citizens$ = this.facade.citizens$;

  public citizen$ = this.facade.citizen$.pipe(
    filter((citizen: CitizenDetailModel) => !!citizen),
    tap(() => this.openDetailModal())
  );

  public detailModalOpen = false;

  constructor(private facade: CitizenFacade) {}

  public ngOnInit(): void {
    this.facade.loadCitizens(0, 25);
  }

  public loadCitizen(id: string): void {
    this.facade.loadCitizen(id);
  }

  public closeDetailModal(): void {
    this.detailModalOpen = false;
  }

  private openDetailModal(): void {
    this.detailModalOpen = true;
  }
}

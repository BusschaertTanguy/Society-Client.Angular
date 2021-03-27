import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Citizen } from '../../states/citizen.model';

@Component({
  selector: 'app-citizen-table',
  templateUrl: './citizen-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenTableComponent {
  @Input() public citizens: Citizen[];
  @Output() public citizenSelected = new EventEmitter<string>();

  public selectCitizen(id: string): void {
    this.citizenSelected.emit(id);
  }
}

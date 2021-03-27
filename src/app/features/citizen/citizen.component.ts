import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenComponent {}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CitizenDetailModel } from '../../states/citizen.model';
import { FormBuilder } from '@angular/forms';
import { Gender } from '../../../../shared/models/gender.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-citizen-detail-modal',
  templateUrl: './citizen-detail-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenDetailModalComponent implements OnChanges {
  @Input() public openModal: boolean;
  @Input() public citizenDetail: CitizenDetailModel;
  @Output() public closed = new EventEmitter();

  public form = this.fb.group({
    id: [''],
    name: [''],
    gender: [''],
    dateOfBirth: [''],
  });

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.citizenDetail && changes.citizenDetail.currentValue) {
      const newCitizenDetail = changes.citizenDetail.currentValue as CitizenDetailModel;

      this.form.patchValue({
        id: newCitizenDetail.id,
        name: newCitizenDetail.name,
        gender: Gender[newCitizenDetail.gender],
        dateOfBirth: this.datePipe.transform(newCitizenDetail.dateOfBirth, 'dd-MM-yyyy'),
      });
    }
  }

  public closeModal(): void {
    this.closed.emit();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

const clarityModules = [ClarityModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...clarityModules],
  exports: [CommonModule, ReactiveFormsModule, ...clarityModules],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';


const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaygroundComponent],
})
export class PlaygroundModule { }

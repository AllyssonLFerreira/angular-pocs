import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    GridComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class GridModule { }

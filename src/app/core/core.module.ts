import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent, SideNavComponent]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StudentsService } from './students.service';
import { StylingDivDirective } from './styling-div.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StylingDivDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ StudentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

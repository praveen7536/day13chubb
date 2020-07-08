import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionBasicComponent } from './accordion-basic/accordion-basic.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { PopoverBasicComponent } from './popover-basic/popover-basic.component';
import { TypeaheadBasicComponent } from './typeahead-basic/typeahead-basic.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccordionBasicComponent,
    CarouselBasicComponent,
    ModalBasicComponent,
    PopoverBasicComponent,
    TypeaheadBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [TypeaheadBasicComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

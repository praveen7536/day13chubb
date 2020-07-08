import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionBasicComponent } from './accordion-basic/accordion-basic.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { TypeaheadBasicComponent } from './typeahead-basic/typeahead-basic.component';
import { PopoverBasicComponent } from './popover-basic/popover-basic.component';




const routes: Routes = [
  {
    path: "",
    component: AccordionBasicComponent
  },
  {
    path: "carousel",
    component: CarouselBasicComponent
  },
  {
    path: "modal",
    component: ModalBasicComponent
  },
  {
    path: "typeahead",
    component: TypeaheadBasicComponent
  },
  {
    path: "popover",
    component: PopoverBasicComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
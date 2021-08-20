// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { EhrComponent } from './ehr/ehr.component';
import { FinalRoutingModule } from './final-routing.module';
import { PatientsModalComponent } from './patients-modal/patients-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FinalRoutingModule,
        ModalModule.forRoot(),
        ModalModule.forChild(),
    ],
    declarations: [
        EhrComponent,
        PatientsModalComponent,
    ]
})
export class FinalModule { }
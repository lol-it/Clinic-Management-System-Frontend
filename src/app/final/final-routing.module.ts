import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EhrComponent } from './ehr/ehr.component';
import { PatientsModalComponent } from './patients-modal/patients-modal.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'write'
    },
    {
        path: 'write',
        component: EhrComponent,
        data: {
            title: "Prescription Writing"
        }
    },
    {
        path: "patients",
        component: PatientsModalComponent,
        data: {
            title: "Patients List"
        }
    },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinalRoutingModule {}

  
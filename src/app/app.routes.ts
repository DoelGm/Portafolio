import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './components/work/work.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'work', component: WorkComponent},
];

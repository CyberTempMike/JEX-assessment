import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailVacancyContainer } from './components/detail-vacancy-container/detail-vacancy-container.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'detail/:id',
        component: DetailVacancyContainer
    }
];

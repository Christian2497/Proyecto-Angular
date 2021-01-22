import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'; 


import { HomeComponent } from './components/home/home.component';
import { BandasComponent } from './components/bandas/bandas.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'bandas', component: BandasComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
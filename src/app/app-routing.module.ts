import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { SearchComponent } from './Pages/search/search.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { TrainsComponent } from './Pages/trains/trains.component';

const routes: Routes = [
  { path:'' ,redirectTo:'home' , pathMatch:'full'},
  { path:'home' , component:HomeComponent },
  { path:'bookings' , component:BookingComponent },
  { path:'search/:fromStationId/:toStationId/:dateOfTravel'
     , component:SearchComponent },
  { path:'admin' , component:AdminComponent },
  { path:'footer' , component:FooterComponent },
  { path:'trains' , component:TrainsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

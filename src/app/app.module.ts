import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingComponent } from './Pages/booking/booking.component';
import { SearchComponent } from './Pages/search/search.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Pages/footer/footer.component';
import { TrainsComponent } from './Pages/trains/trains.component';
import { HeaderComponent } from './Pages/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SearchComponent,
    AdminComponent,
    FooterComponent,
    TrainsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { TrainService } from 'src/app/Services/train.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

    trainList: any []= []; 
    loggedUserData: any;
    constructor(private trainSrv: TrainService){
        
        const localData = localStorage.getItem('trainUser');
        if (localData != null) {
          this.loggedUserData = JSON.parse(localData);
          this.getAllTrains();
    
        }
    }
    getAllTrains() {
      this.trainSrv.getAllBookings(this.loggedUserData.passengerID).subscribe((res:any)=>{
        this.trainList =  res.data;
      })
    }
  }
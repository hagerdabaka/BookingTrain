import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationsService } from 'src/app/Services/stations.service';
import { TrainService } from 'src/app/Services/train.service';
import { IStation, ISearchTrain, Booking, TrainAppBookingPassengers, ResponseModel } from 'src/app/models/stations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: ''
  }
  stationList: IStation[] = [];
  trainsList: ISearchTrain[] = [];

  bokingObj: Booking = new Booking();
  bookingPassengers: TrainAppBookingPassengers = new TrainAppBookingPassengers();

  loggedUserData: any;
  constructor(private activactedRoute: ActivatedRoute, private stationSrv: StationsService, private trainSrv: TrainService) {
    this.activactedRoute.params.subscribe((paramObj: any) => {
      debugger;
      this.searchObj.fromStationId = paramObj.fromStationId;
      this.searchObj.toStationId = paramObj.toStationId;
      this.searchObj.dateOfTravel = paramObj.dateOfTravel;
      this.bokingObj.travelDate = this.searchObj.dateOfTravel
      this.getAllTrains();
    })
    const localData = localStorage.getItem('trainUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.bokingObj.passengerId = this.loggedUserData.passengerID;

    }
  }
  ngOnInit(): void {
    this.loadStations();
  }
  AddPassenger() {
    const data = JSON.stringify(this.bookingPassengers);
    const paserData = JSON.parse(data)

    this.bokingObj.TrainAppBookingPassengers.push(paserData);
  }
  onRemove(index: number) {
    this.bokingObj.TrainAppBookingPassengers.splice(index, 1)
  }

  openBooking(trainId: number) {
    this.bokingObj.trainId = trainId;
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'block'
    }
  }

  closeBooking() {
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'none'
    }
  }
  
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data;
    }, error => {
      alert("Connection with server failed ! please, try again" )
    })
  }

  getAllTrains() {
    this.trainSrv.getTrainsBetweenStations(this.searchObj).subscribe((result: ResponseModel) => {
      this.trainsList = result.data;
      console.log(result)
    }, error  => {
      alert("Connection with server failed ! please, try again" )
    })
  }
  BookTicket() {
    this.bokingObj.bookingDate = new Date();
    this.bokingObj.totalSeats = this.bokingObj.TrainAppBookingPassengers.length;
    this.trainSrv.bookTrain(this.bokingObj).subscribe((result: ResponseModel) => {
      if (result.result) {
        alert('Booking Done Success')
      } else {
        alert(result.message)
      }
    }, error => {
      alert("The train time is over.. Look at upcoming dates ." )
    })
  }
}

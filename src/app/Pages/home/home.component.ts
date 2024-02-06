import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationsService } from 'src/app/Services/stations.service';
import { IStation, ResponseModel } from 'src/app/models/stations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements  OnInit{
  
  stationList :IStation [] =[];
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } 

  constructor( private stationSer:StationsService ,  private router: Router){}
  
  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(){
   this.stationSer.getAllStations().subscribe((res:ResponseModel) => {
    console.log(res);
    this.stationList= res.data;
  },error =>{
    alert("Connection with server failed ! please, try again " );
    console.log(error)
  })
  }

  onSearch() {
    this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }
}

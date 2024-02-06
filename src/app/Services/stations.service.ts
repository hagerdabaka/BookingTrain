import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../Constant/constant';
import { Observable } from 'rxjs';
import { IPassenger, IStation, ResponseModel } from '../models/stations';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint:string='';
  constructor( private http :HttpClient) { 
    this.apiEndPoint=environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }
  
  createPassanger( obj:IPassenger ): Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj);
  }
  
}

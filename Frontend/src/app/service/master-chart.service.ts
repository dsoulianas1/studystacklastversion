// master-chart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterChartService {

  constructor(private http: HttpClient) { }

  getchartinfo(){
    return this.http.get<any[]>("http://localhost:3000/sales");
  }
}

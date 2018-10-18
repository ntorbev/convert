import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  constructor(private http: HttpClient) { }

  getRate(base, target) {
    return this.http.get(`https://api.exchangeratesapi.io/latest?symbols=${base}&base=${target}`);
  }
}

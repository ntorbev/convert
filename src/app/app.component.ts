import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RateService } from 'src/app/core/rate.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies = ['BGN', 'CAD', 'BRL', 'HUF', 'DKK', 'JPY', 'ILS', 'TRY', 'RON', 'GBP', 'PHP'];
  base: string;
  sum = 1;
  inputAmount = 1;
  targetCurrency: string;
  searchInput: FormControl = new FormControl('');
  @ViewChild('baseSelect') baseSelect: ElementRef;
  @ViewChild('targetSelect') targetSelect: ElementRef;

  constructor(private rateService: RateService) {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe((value) => {
        this.inputAmount = value;
        this.rateService.getRate(this.baseSelect.nativeElement.value, this.targetSelect.nativeElement.value).subscribe((res: any) => {
          this.base = res.base;
          this.sum = Object.values(res.rates)[0] as number;
          this.targetCurrency = Object.keys(res.rates)[0];
        });
      });
  }

  changeRate(base, target) {
    this.rateService.getRate(base, target).subscribe((res: any) => {
      this.base = res.base;
      this.sum = Object.values(res.rates)[0] as number;
      this.targetCurrency = Object.keys(res.rates)[0];
    });
  }
}

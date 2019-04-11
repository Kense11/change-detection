import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ColorService} from '../../shared/services/color.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit, OnDestroy {

  color = 'green';
  // color$: Observable<string>;
  subscription: Subscription;

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
    this.subscription = this.colorService.get()
      .subscribe(color => {
        console.log('new color from observable:', color);
        this.color = color;
      });
    // this.color$ = this.colorService.get();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

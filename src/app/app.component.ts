import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'change-detection';

  time: number;

  constructor(
  ) {
    setInterval(() => this.time = Date.now(), 1);
  }
}

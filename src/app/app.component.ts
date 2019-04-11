import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'change-detection';

  expTime = Date.now() + 5000;

  isAuthorized(): boolean {
    // if we have some hard calculation our app will explode because function will run in every changedetection cycle
    // console.log('hard calculation!!!');
    return this.expTime - Date.now() > 0;
  }
}

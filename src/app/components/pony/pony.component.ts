import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Pony} from '../../shared/models/pony.model';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent {

  @Input() pony: Pony;

  check() {
    console.log('pony component view checked');
  }

  getPonyImageUrl() {
    return `assets/images/pony-${this.pony.color}-running.gif`;
  }
}

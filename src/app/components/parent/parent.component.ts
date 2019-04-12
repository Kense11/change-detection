import {Component} from '@angular/core';
import {Pony} from '../../shared/models/pony.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  ponies: Array<Pony> = [{id: 1, color: 'green'}, {id: 2, color: 'orange'}];

  check() {
    console.log('parent component view checked');
  }

  changeColor() {
    const ponyIndex = Math.round(Math.random());
    const color = this.ponies[ponyIndex].color === 'green' ? 'orange' : 'green';

    this.ponies[ponyIndex].color = color;
    // this.ponies[ponyIndex] = {...this.ponies[ponyIndex], color};
  }
}

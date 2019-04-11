import { Injectable } from '@angular/core';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color: string;

  get() {
    return interval(1000).pipe(
      map(() => {
        this.color = (this.color === 'green' || this.color === undefined) ? 'orange' : 'green';

        return this.color;
      })
    );
  }
}

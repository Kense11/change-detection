import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  @Input() src: string;

  check() {
    console.log('image component view checked');
  }
}

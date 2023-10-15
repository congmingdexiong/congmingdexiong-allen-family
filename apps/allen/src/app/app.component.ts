import { Component } from '@angular/core';
import { AppDogsListComponent } from './app-dogs-list/app-dogs-list.component';

@Component({
  standalone: true,
  selector: 'allen-family-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[AppDogsListComponent]
})
export class AppComponent {
  title = 'allen';
}

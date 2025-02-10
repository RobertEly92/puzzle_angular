import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuzzleListComponent } from "./puzzle-list/puzzle-list.component";
import { PuzzleCreationComponent } from './puzzle-creation/puzzle-creation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PuzzleListComponent, PuzzleCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'puzzle-angular-part';
}

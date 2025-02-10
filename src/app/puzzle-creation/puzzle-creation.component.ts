import { Component, OnInit } from '@angular/core';
import { PuzzleDataService } from '../puzzle-data.service';
import { AppCommonModule } from '../app.common.module';
import { title } from 'process';
import { PuzzleListComponent } from '../puzzle-list/puzzle-list.component';

@Component({
  selector: 'app-puzzle-creation',
  imports: [AppCommonModule],
  templateUrl: './puzzle-creation.component.html',
  styleUrl: './puzzle-creation.component.scss'
})
export class PuzzleCreationComponent implements OnInit {
  newPuzzleTitle: string = "";
  newPuzzlePieces: number = 0;
  constructor(private puzzleData: PuzzleDataService) {

  }

  create_puzzle() {
    this.puzzleData.create_puzzle({ id: 77, title: this.newPuzzleTitle, pieces: this.newPuzzlePieces });
  };

  ngOnInit(): void {

  }
}

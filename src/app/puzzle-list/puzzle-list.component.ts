import { Component, NgModule, OnInit } from '@angular/core';
import { PuzzleDataService } from '../puzzle-data.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-puzzle-list',
  imports: [NgFor, AsyncPipe],
  templateUrl: './puzzle-list.component.html',
  styleUrl: './puzzle-list.component.scss'
})


export class PuzzleListComponent implements OnInit {
  puzzlesList$: Observable<any>;
  constructor(private puzzleData: PuzzleDataService) {
    this.puzzleData.puzzleList.subscribe(value => {
      this.puzzlesList$ = value;
    });
    this.puzzleData.get_puzzles();

  }

  ngOnInit(): void {

  }
}

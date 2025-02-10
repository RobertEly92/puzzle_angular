import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleDataService {
  public puzzleList: BehaviorSubject<Observable<any>> = new BehaviorSubject<Observable<any>>(null);

  puzzles_local = [{ id: 1, title: 'Schneewittchen', pieces: 1500 }, { id: 2, title: 'Rumpelstilzchen', pieces: 500 }, { id: 3, title: 'König der Löwen', pieces: 1200 },];
  puzzles;
  constructor(private http: HttpClient) {
  }

  get_puzzles() {
    console.log("get_puzzle gecallt");
    this.puzzleList.next(this.http.get("http://localhost:3000/puzzles"));
  }

  create_puzzle(puzzle) {
    const headers = { 'Content-Type': 'application/json' };
    const result = this.http.post("http://localhost:3000/puzzles", puzzle, { headers}).toPromise();
    this.get_puzzles();
    return result;
  }
}

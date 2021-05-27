import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DevelopComponent implements OnInit {
  coverImageUrl: string;
  avatarImageUrl: string;
  asyncTabs: Observable<any[]>;
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Profile', content: 'Content 1' },
          { label: 'Offerts', content: 'Content 2' },
          { label: 'Documents', content: 'Content 3' },
        ]);
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.coverImageUrl =
      'https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
    this.avatarImageUrl =
      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg';
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileBodyComponent implements OnInit {
  asyncTabs: Observable<any[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'profile', content: 'profile-content' },
          { label: 'offerts', content: 'offerts-content' },
          { label: 'documents', content: 'documents-contents' },
        ]);
      }, 500);
    });
  }

  ngOnInit(): void {}
}

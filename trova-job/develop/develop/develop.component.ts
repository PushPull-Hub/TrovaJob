import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss'],
})
export class DevelopComponent implements OnInit {
  coverImageUrl: string;
  avatarImageUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.coverImageUrl =
      'https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
    this.avatarImageUrl =
      'https://gravatar.com/avatar/acccf1343917cf8b77546198aeee287e?d=https%3A%2F%2Fassets.codepen.io%2Finternal%2Favatars%2Fusers%2Fdefault.png&fit=crop&format=auto&height=256&version=0&width=256';
  }
}

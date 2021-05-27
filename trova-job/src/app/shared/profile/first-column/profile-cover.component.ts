import { Component, Input, OnInit } from '@angular/core';
import { ProfileCoverConfiguration } from 'src/app/models/configuration.model';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss'],
})
export class ProfileCoverComponent implements OnInit {
  // @Input() configurations: ProfileCoverConfiguration;
  configurations: ProfileCoverConfiguration = {
    user: {
      id: '1',
      username: 'John Scemo',
      role: 'user',
    },
    coverImageUrl:
      'https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    avatarImageUrl:
      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg',
    buttons: [
      {
        type: 'user',
        icon: 'UsersSettingsIcon',
        onClickNavigateTo: '',
      },
      {
        type: 'user',
        icon: 'UsersSettingsIcon',
        onClickNavigateTo: '',
      },
      {
        type: 'user',
        icon: 'UsersSettingsIcon',
        onClickNavigateTo: '',
      },
    ],
  };
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.configurations);
  }
}

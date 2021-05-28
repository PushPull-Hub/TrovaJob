import { Component, OnInit } from '@angular/core';
import { ProfileConfiguration } from 'src/app/models/configuration.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  configurations: ProfileConfiguration;
  isLoading: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isLoading = false;
    this.configurations = {
      user: {
        id: 'string',
        email: 'string',
        password: 'string',
        username: 'string',
        role: 'user',
        adress: 'string',
        birthday: {
          day: 0,
          month: 0,
          year: 0,
        },
        phoneNumber: 3654654,
      },
      cover: {
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
      },
      body: null,
    };
  }
}

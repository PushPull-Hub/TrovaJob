import { Injectable } from '@angular/core';
import { UserAbilities } from '../models/abilities.model';
import { Card } from '../models/card.model';
import { CustomErrorObject } from '../models/error.model';

import { User } from '../models/user.model';
import { CardsErrors, ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private errorService: ErrorService) {}

  getControlCards(userAbilities: UserAbilities): Promise<Card[]> {
    return new Promise<Card[]>((resolve, reject) => {
      const searchJobCard = new Card('check job offerts', 'searchIcon');
      const favJobsCard = new Card('favorite', 'favIcon');
      const manageUsersCard = new Card('manage users', 'UsersSettingsIcon');
      const manageJobOfferts = new Card(
        'manage job offerts',
        'jobsSettingsIcon'
      );
      const addJobOffers = new Card('offer Jobs', 'addJobIcon');
      const updateProfileCard = new Card(
        'update profile',
        'profileSettingsIcon'
      );

      const cards: Card[] = [];
      if (userAbilities) {
        if (!userAbilities.canDeleteJobs && !userAbilities.canDeleteteUsers) {
          if (userAbilities.canCreateJob && userAbilities.canDeleteJob) {
            cards.push(addJobOffers, manageJobOfferts, updateProfileCard);
          } else {
            cards.push(searchJobCard, favJobsCard, updateProfileCard);
          }
        } else {
          manageUsersCard.setUserType('admin');
          manageJobOfferts.setUserType('admin');
          cards.push(
            manageUsersCard,
            manageJobOfferts,
            searchJobCard,
            addJobOffers,
            updateProfileCard
          );
        }

        resolve(cards);
      } else {
        const error = new CustomErrorObject(
          CardsErrors.onCreatingMainIconFail,
          401
        );
        this.errorService.errorOnLoadingCard.next(error);
        reject(error);
      }
    });
  }
}

// da aggiungere in db
// const map = new Map([
//   ['jobOffer', new Card('check job offerts', 'searchIcon')],
//   ['cazzi', new Card('manage job offerts', 'searchIcon')],
//   ['mazzi', new Card('manage job offerts', 'searchIcon')],
// ]);

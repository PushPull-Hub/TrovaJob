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
      const addJobOffers = new Card('offer Jobs', 'jobsSettingsIcon');
      const updateProfileCard = new Card(
        'update profile',
        'profileSettingsIcon'
      );

      let cards: Card[] = [];
      if (userAbilities) {
        if (
          userAbilities.canDeleteJob &&
          userAbilities.canDeleteteUsers &&
          userAbilities.canDeleteJob &&
          userAbilities.canUpdateJobs
        ) {
          cards.push(
            manageUsersCard,
            manageJobOfferts,
            searchJobCard,
            addJobOffers,
            manageJobOfferts
          );
        } else if (
          userAbilities.canCreateJob &&
          userAbilities.canUpdateProfile
        ) {
          cards.push(addJobOffers, manageJobOfferts, updateProfileCard);
        } else if (userAbilities.canReadJob && userAbilities.canUpdateProfile) {
          cards.push(searchJobCard, favJobsCard, updateProfileCard);
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

  // canCreate(user: User): boolean {
  //   const allowed = ['admin', 'user'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canRead(user: User): boolean {
  //   const allowed = ['admin', 'user'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canEdit(user: User): boolean {
  //   const allowed = ['admin'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canDelete(user: User): boolean {
  //   const allowed = ['admin'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // private checkAuthorization(user: User, allowedRoles: string[]): boolean {
  //   if (!user) return false;
  //   for (const role of allowedRoles) {
  //     if (user.role[role]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}

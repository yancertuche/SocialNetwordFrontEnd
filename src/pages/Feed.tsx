import { IonContent, IonHeader, IonPage, IonToolbar, IonMenuButton, IonButtons, IonRefresher, IonRefresherContent} from '@ionic/react';
import React from 'react';
import { RefresherEventDetail } from '@ionic/core';
import SearchBar from '../components/SearchBar';
import CardPublication from '../components/CardPublication';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
} 

const Feed: React.FC = () => {
  return (
      <IonPage>
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton>
              </IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <SearchBar></SearchBar>
        <IonContent >
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={chevronDownCircleOutline}
              pullingText="Pull to refresh"
              refreshingSpinner="circles"
              refreshingText="Actualizando">
            </IonRefresherContent>
      </IonRefresher>
              <CardPublication></CardPublication>
              <CardPublication></CardPublication>
              <CardPublication></CardPublication>
        </IonContent>
      </IonPage>
  );
};

export default Feed;
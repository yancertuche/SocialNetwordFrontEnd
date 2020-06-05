import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
import FriendsList from '../components/FriendsList';
import MenuSegment from '../components/MenuSegment';
const Friends: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
            <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent >
            <FriendsList></FriendsList>
          </IonContent>
        </IonPage>
    );
  };
  
  export default Friends;
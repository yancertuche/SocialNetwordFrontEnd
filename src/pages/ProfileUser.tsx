import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';
const ProfileUser: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
            <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            perfil de Usuario
          </IonContent>
        </IonPage>
    );
  };
  
  export default ProfileUser;
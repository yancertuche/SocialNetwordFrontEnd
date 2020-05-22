import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonMenu, IonList} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';

const ProfileCourse: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            hola
          </IonContent>
        </IonPage>
    );
  };
  
  export default ProfileCourse;
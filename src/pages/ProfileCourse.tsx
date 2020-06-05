import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
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
          <IonContent >
            Perfil del curso
          </IonContent>
        </IonPage>
    );
  };
  
  export default ProfileCourse;
import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
const ProfileUser: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              
            </IonToolbar>
          </IonHeader>
          <IonContent>
            perfil de Usuario
          </IonContent>
        </IonPage>
    );
  };
  
  export default ProfileUser;
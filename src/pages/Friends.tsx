import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
const Friends: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Lista de amigos
          </IonContent>
        </IonPage>
    );
  };
  
  export default Friends;
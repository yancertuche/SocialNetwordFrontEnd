import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
const Principal: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Inicio
          </IonContent>
        </IonPage>
    );
  };
  
  export default Principal;
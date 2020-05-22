import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';
const Principal: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
            <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Inicio
          </IonContent>
        </IonPage>
    );
  };
  
  export default Principal;
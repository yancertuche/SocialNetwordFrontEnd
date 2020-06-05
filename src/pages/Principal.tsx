import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';
import CardContent from '../components/CardContent';
const Principal: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
            <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <CardContent></CardContent>
            <CardContent></CardContent>
            <CardContent></CardContent>
            <CardContent></CardContent>
            <CardContent></CardContent>
          </IonContent>
        </IonPage>
    );
  };
  
  export default Principal;
import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';
const Chat: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Aqui va el chat
          </IonContent>
        </IonPage>
    );
  };
  
  export default Chat;
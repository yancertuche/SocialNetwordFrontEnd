import { IonContent, IonHeader, IonPage,  IonToolbar} from '@ionic/react';
import React from 'react';
const Chat: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Aqui va el chat
          </IonContent>
        </IonPage>
    );
  };
  
  export default Chat;
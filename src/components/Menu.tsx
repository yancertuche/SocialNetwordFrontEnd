import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonIcon,IonLabel, IonRouterOutlet } from '@ionic/react';

const Menu: React.FC = () => {
    return(
    <IonMenu side="start" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon name="mail" slot="start"></IonIcon>
            <IonLabel>Inbox</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    )
    };

  export default Menu;
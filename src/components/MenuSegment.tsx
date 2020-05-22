import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { notifications, chatbox, people,addCircle,home } from 'ionicons/icons';

const MenuSegment: React.FC = () => {
  return (
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="notifications">
              <IonIcon icon={notifications} />
            </IonSegmentButton>
            <IonSegmentButton value="chatbox">
              <IonIcon icon={chatbox} />
            </IonSegmentButton>
            <IonSegmentButton value="people">
              <IonIcon icon={people} />
            </IonSegmentButton>
            <IonSegmentButton value="addCircle">
              <IonIcon icon={addCircle} />
            </IonSegmentButton>
            <IonSegmentButton value="home">
              <IonIcon icon={home} />
            </IonSegmentButton>
          </IonSegment>
        
  );
};
export default MenuSegment;
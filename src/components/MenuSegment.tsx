import React from 'react';
import {IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import { notifications, chatbox, people,addCircle,home } from 'ionicons/icons';
import {useHistory} from 'react-router';

const MenuSegment: React.FC = () => {
  const history= useHistory();
    
  const Principal = (Page : any) =>{
      console.log(Page)
      history.push(Page)
  }
  return (
          <IonSegment onIonChange={e => Principal( e.detail.value)}  >
            <IonSegmentButton  value="notification1">
              <IonIcon icon={notifications} />
            </IonSegmentButton>
            <IonSegmentButton value="chatbox">
              <IonIcon icon={chatbox} />
            </IonSegmentButton>
            <IonSegmentButton value="people">
              <IonIcon icon={people} />
            </IonSegmentButton>
            <IonSegmentButton value="feed">
              <IonIcon icon={addCircle} />
            </IonSegmentButton>
            <IonSegmentButton value="home">
              <IonIcon icon={home} />
            </IonSegmentButton>
          </IonSegment>
        
  );
};
export default MenuSegment;
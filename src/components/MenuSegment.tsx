import React , { useState } from 'react';
import {IonSegment, IonSegmentButton, IonIcon,  IonPopover, IonList, IonItem } from '@ionic/react';
import { notifications, chatbox, people,addCircle,home } from 'ionicons/icons';
import {useHistory} from 'react-router';

const MenuSegment: React.FC = () => {
  const history= useHistory();
    
  const Principal = (Page : any) =>{
    if(Page === "notification1"){
      setShowPopover(true)
    }else{
      console.log(Page)
      history.push(Page)
    }
  }
  const [showPopover, setShowPopover] = useState(false);

  return (
          <IonSegment onIonChange={e => Principal( e.detail.value)}  >
            <IonSegmentButton  value="notification1">
              <IonIcon icon={notifications} />
              <IonPopover isOpen={showPopover} onDidDismiss={e => setShowPopover(false)}>
                <IonList>
                  <IonItem>
                    <p>Notificación 1</p>
                  </IonItem>
                  <IonItem>
                    <p>Notificación 2</p>
                  </IonItem>
                  <IonItem>
                    <p>Notificación 3</p>
                  </IonItem>
                </IonList>
              </IonPopover>
            </IonSegmentButton>
            <IonSegmentButton value="chat">
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
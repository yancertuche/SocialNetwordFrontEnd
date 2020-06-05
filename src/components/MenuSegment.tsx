import React , { useState } from 'react';
import {IonSegment, IonSegmentButton, IonIcon,  IonPopover, IonList, IonItem, IonText } from '@ionic/react';
import { notifications, chatbox, people,addCircle,home , happy, sad , hammerOutline} from 'ionicons/icons';
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
          <IonSegment onIonChange={e => Principal( e.detail.value)}>
            <IonSegmentButton  value="notification1">
              <IonIcon icon={notifications} />
              <IonPopover isOpen={showPopover} onDidDismiss={e => setShowPopover(false)}>
                <IonList>
                  <IonItem>
                    <IonText>Ibrahim ha reaccionado a tu post</IonText>
                    <IonIcon icon={happy}></IonIcon>
                  </IonItem>
                  <IonItem>
                  <IonText>Daniela ha reaccionado a tu post</IonText>
                    <IonIcon icon={sad}></IonIcon>
                  </IonItem>
                  <IonItem>
                  <IonText>Tatiana ha comentado en el grupo de matemática</IonText>
                    <IonIcon icon={hammerOutline}></IonIcon>
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
            <IonSegmentButton value="principal">
              <IonIcon icon={home} />
            </IonSegmentButton>
          </IonSegment>
        
  );
};
export default MenuSegment;
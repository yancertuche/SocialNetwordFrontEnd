import { IonContent, IonHeader, IonPage,  IonToolbar, IonNav, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonAvatar, IonListHeader} from '@ionic/react';
import React from 'react';
import MenuSegment from '../components/MenuSegment';
import imagen from '../images/persona.jpg';
const Chat: React.FC = () => {
    return (
        <IonPage>
          <IonHeader collapse="condense">
            <IonToolbar>
              <MenuSegment></MenuSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent >
            <IonList >
            <IonListHeader>
            Chats 
            </IonListHeader>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ibrahim</IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ibrahim salem</IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ibrahim salamalecun</IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ander Ibrahim</IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ibrahim Coca</IonLabel>
                </IonItem>
                <IonItem>
                  <IonAvatar slot='start'>
                    <img src={imagen} alt='persona'/>
                  </IonAvatar>
                  <IonLabel>Ruben Ibrahim Vargas</IonLabel>
                </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
    );
  };
  
  export default Chat;
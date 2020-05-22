import React from 'react';
import {  IonList, IonItem,IonIcon,IonLabel, IonListHeader, IonAvatar} from '@ionic/react';
import { home, addCircle, people,chatbox, arrowForward} from 'ionicons/icons';
import {useHistory} from 'react-router';

const FriendsList: React.FC = () => {
    return (
    <IonList>
        <IonListHeader>
          Recent Conversations
        </IonListHeader>
        <IonItem>
            <IonAvatar slot="start">
                <IonIcon icon={people}></IonIcon>
            </IonAvatar>
            <IonLabel>
                <h2>Finn</h2>
                <h3>I'm a big deal</h3>
                <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
        </IonItem>
    </IonList>
    );
  };
  export default FriendsList;
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonIcon,IonLabel, IonButton} from '@ionic/react';
import { home, addCircle, people,chatbox, arrowForward} from 'ionicons/icons';
import {useHistory} from 'react-router';

const Menu: React.FC = () => {

  const history= useHistory();
    
  const Principal = (Page : string) =>{
      console.log(Page)
      history.push(Page)
  }
    return(
    <IonMenu side="start" menuId="first" type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={home} ></IonIcon>
            <IonLabel>Inicio</IonLabel>
            <IonButton onClick={() => Principal('principal')} fill='clear'>
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem>
            <IonIcon icon={addCircle} ></IonIcon>
            <IonLabel>Agregar Curso</IonLabel>
            <IonButton onClick={() => Principal('feed')} fill='clear'>
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem>
            <IonIcon icon={people} ></IonIcon>
            <IonLabel>Amigos</IonLabel>
            <IonButton onClick={() => Principal('friends')} fill='clear'>
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={chatbox}></IonIcon>
            <IonLabel>Mensajes</IonLabel>
            <IonButton onClick={() => Principal('chat')} fill='clear'>
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    )
    };

  export default Menu;
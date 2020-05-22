import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonIcon,IonLabel} from '@ionic/react';
import { home, addCircle, people,chatbox} from 'ionicons/icons';
const Menu: React.FC = () => {
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
          </IonItem>
          <IonItem>
            <IonIcon icon={addCircle} ></IonIcon>
            <IonLabel>Agregar Curso</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={people} ></IonIcon>
            <IonLabel>Amigos</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={chatbox}></IonIcon>
            <IonLabel>Mensajes</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    )
    };

  export default Menu;
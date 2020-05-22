import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonToast, IonActionSheet } from '@ionic/react';
import { add , book} from 'ionicons/icons';


const CardPublication: React.FC = () => {
    const [showToast1, setShowToast1] = useState(false);
    const HandleModal = () =>{
        setShowToast1(true);
    }
    const [showToast, setShowToast] = useState(false);
    const HandleCard = () =>{
        setShowToast(true);
    }
  return (
        <IonCard>
        <IonCardHeader>
            <IonSegment color="tertiary" value="favorite" >
                <IonSegmentButton value="add" onClick={() => HandleModal()}>
                    <IonLabel>Agregar</IonLabel>
                    <IonIcon icon={add}></IonIcon>
                    <IonToast isOpen={showToast1} message='Solicitud Enviada' duration={500} position='top' onDidDismiss={() => setShowToast1(false)}></IonToast>
                </IonSegmentButton>
                <IonSegmentButton value="profile" onClick={() => HandleCard()}>
                    <IonLabel>Detalles</IonLabel>
                    <IonIcon icon={book}></IonIcon>
                    <IonActionSheet isOpen={showToast} onDidDismiss={() => setShowToast(false)} buttons={[{text: 'curso de interes general a las áreas de Ingeniería'}]} >
                    </IonActionSheet>
                </IonSegmentButton>
            </IonSegment>
            <IonCardTitle>Un Curso</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            En este espacio hacemos demostraciones de matemática
        </IonCardContent>
        </IonCard>
  );
};

export default CardPublication;
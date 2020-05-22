import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { add , book} from 'ionicons/icons';

const CardPublication: React.FC = () => {
  return (
        <IonCard>
        <IonCardHeader>
            <IonSegment color="tertiary" value="favorite">
                <IonSegmentButton value="add">
                    <IonLabel>Agregar</IonLabel>
                    <IonIcon icon={add}></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="profile">
                    <IonLabel>Detalles</IonLabel>
                    <IonIcon icon={book}></IonIcon>
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
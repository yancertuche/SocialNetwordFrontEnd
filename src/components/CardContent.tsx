import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonToast, IonActionSheet, IonTabBar, IonTab, IonTabs, IonTabButton } from '@ionic/react';
import { happy, sad, chatbubbleEllipses} from 'ionicons/icons';
import imagen from '../images/demos.png'

const CardContent: React.FC = () => {
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
        <IonCardContent >
            Un buen ejemplo de demostración
            <img  src={imagen} alt='logo' />
        </IonCardContent>
        <IonSegment  value="reactions" >
                <IonSegmentButton value="like" >
                    <IonIcon icon={happy}></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="comment" >
                    <IonIcon icon={chatbubbleEllipses}></IonIcon>
                </IonSegmentButton>
                <IonSegmentButton value="dislike" >
                    <IonIcon icon={sad}></IonIcon>
                </IonSegmentButton>
            </IonSegment>
        </IonCard>
  );
};

export default CardContent;
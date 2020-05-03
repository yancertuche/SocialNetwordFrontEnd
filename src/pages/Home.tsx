import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';

//Utilizar plugins
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

const Open = async () =>{
  await Browser.open({ url: 'http://capacitor.ionicframework.com/' });
}
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={Open}>Hola button</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;

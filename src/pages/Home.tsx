import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
//import ExploreContainer from '../components/ExploreContainer';
import FormLogin from '../components/FormLogin';

//Utilizar plugins
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;


const Open = async () =>{
  await Browser.open({ url: 'http://capacitor.ionicframework.com/' });
}

//<IonButton onClick={Open}>Hola button</IonButton>

const Home: React.FC = () => {
  return (
      <IonPage>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">JaveRed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent  >
          <FormLogin></FormLogin>
        </IonContent>
      </IonPage>
  );
};

export default Home;

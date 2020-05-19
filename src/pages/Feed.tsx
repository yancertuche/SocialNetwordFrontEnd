import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem} from '@ionic/react';
import React from 'react';
//import ExploreContainer from '../components/ExploreContainer';

import Menu from'../components/Menu';

const Home: React.FC = () => {
  return (
    <div className="contenedorhome">
      <IonPage>
          <IonContent>
              <IonItem>
              <Menu></Menu>
              </IonItem>
          </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
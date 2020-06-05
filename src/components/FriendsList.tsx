import React from 'react';
import {  IonList, IonItem,IonIcon,IonLabel, IonListHeader, IonAvatar} from '@ionic/react';
import { home, addCircle, people,chatbox, arrowForward, personCircle} from 'ionicons/icons';
import {useHistory} from 'react-router';
import imagen from '../images/persona1.png'

const FriendsList: React.FC = () => {
    return (
    <IonList>
        <IonListHeader>
          Mis amigos
        </IonListHeader>
        <IonItem>
            <IonAvatar slot="start">
                <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Yan Carlos Certuche</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />  
            </IonAvatar>
            <IonLabel>
                <h2>Anderson Laverde</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Santiago Coca</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Yan Carlos Certuche</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Anderson Laverde</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Santiago Coca</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Yan Carlos Certuche</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Anderson Laverde</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonAvatar slot="start">
            <img src = {imagen} alt = 'persona' />
            </IonAvatar>
            <IonLabel>
                <h2>Santiago Coca</h2>
                <h3>Soy divertido</h3>
                <p>Me gusta Escuchar música todo el tiempo</p>
            </IonLabel>
        </IonItem>
    </IonList>
    );
  };
  export default FriendsList;
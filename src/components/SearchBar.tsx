import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

const SearchBar: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  return (
        <IonSearchbar></IonSearchbar>
  );
};
export default SearchBar;
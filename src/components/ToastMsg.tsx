import React, { useState } from 'react';
import { IonToast} from '@ionic/react';

const ToastMsg: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  const message = '';
  return (
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message={message}
        duration={200}
      />
  );
};

export default ToastMsg;
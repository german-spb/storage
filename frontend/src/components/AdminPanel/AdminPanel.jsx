import React, { useContext } from 'react';
import UsersList from './UsersList';
import './AdminPanel.css';
import Context from '../../GlobalState/state';

function AdminPanel() {
  const { isAdmin } = useContext(Context);

  if (!isAdmin) {
    return (
      <div className="admin-panel--access-denied">
        <span className="content">У вас нет доступа к административной панели :(</span>
      </div>
    );
  }

  return <UsersList />;
}

export default AdminPanel;

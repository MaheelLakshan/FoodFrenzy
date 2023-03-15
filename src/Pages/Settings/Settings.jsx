import React from 'react';
import './Setting.css';
import Header from '../../components/Header/Header';
import { SidebarData } from '../../Data';

function Settings() {
  return (
    <div className="Settings">
      <Header content={SidebarData} />
      <div>Settings</div>;
    </div>
  );
}

export default Settings;

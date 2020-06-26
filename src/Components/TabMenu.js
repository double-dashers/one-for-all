import React from 'react';
import { Tab, Segment, Image } from 'semantic-ui-react';
import ActivityFeed from './ActivityFeed';
import UserSettings from './UserSettings';
import GameCard from './GameCard';

const panes = [
  {
    menuItem: 'Activity',
    render: () => (
      <Tab.Pane attached="top" style={{ maxHeight: '600px', overflow: 'auto' }}>
        <ActivityFeed />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Timeline',
    render: () => (
      <Tab.Pane attached="top" style={{ maxHeight: '600px', overflow: 'auto' }}>
        <GameCard />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Settings',
    render: () => (
      <Tab.Pane attached="top" style={{ maxHeight: '600px', overflow: 'auto' }}>
        <UserSettings />
      </Tab.Pane>
    ),
  },
];

const TabMenu = () => {
  return (
    <Tab menu={{ attached: true, secondary: true, pointing: true, color: 'teal' }} panes={panes} />
  );
};

export default TabMenu;

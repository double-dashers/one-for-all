import React from 'react';
import { Tab, Segment, Image } from 'semantic-ui-react';
import ActivityFeed from './ActivityFeed';

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
      <Tab.Pane attached="top">
        <Segment>
          Tab 2 Content
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Settings',
    render: () => (
      <Tab.Pane attached="top">
        <Segment>
          Tab 3 Content
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
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

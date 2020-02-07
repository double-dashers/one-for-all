import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached="top">Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached="top">Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>,
  },
];

const TabMenu = () => {
  return <Tab menu={{ attached: 'bottom', secondary: true, pointing: true }} panes={panes} />;
};

export default TabMenu;

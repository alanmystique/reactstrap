import React, { useState } from 'react';
import { Button, ButtonGroup, Nav, NavItem, NavLink, TabContent, TabPane, Breadcrumb, BreadcrumbItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../src';

export default {
  title: 'InstaPay DS 2.1/Navigation',
  parameters: { layout: 'fullscreen' },
};

export function NavigationPatterns() {
  const [segment, setSegment] = useState('Monthly');
  const [active, setActive] = useState('overview');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline"><div className="ip-lab-brand"><span className="ip-lab-mark">i</span>InstaPay <span className="ip-lab-slash">/</span><span className="ip-lab-subbrand">Navigation</span></div><span className="ip-lab-status">Interactive prototype</span></header>
      <div className="ip-section-top"><div><span className="ip-eyebrow">Navigation patterns</span><h2>Find your way, naturally.</h2><p>Quiet selection states and clear orientation without unnecessary weight.</p></div></div>
      <div className="ip-grid">
        <div className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Segmented control</h3><span className="ip-pill">Figma 44px track</span></div>
          <ButtonGroup className="ip-segmented" role="group" aria-label="Reporting period">
            {['Weekly', 'Monthly', 'Yearly'].map((value) => <Button key={value} aria-pressed={segment === value} active={segment === value} onClick={() => setSegment(value)}>{value}</Button>)}
          </ButtonGroup>
          <p style={{ marginTop: 16, fontSize: 12, color: '#697184' }}>Showing the {segment.toLowerCase()} period.</p>
        </div>
        <div className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Breadcrumbs</h3><span className="ip-panel-subtitle">Hierarchy</span></div>
          <Breadcrumb>
            <BreadcrumbItem><a href="#ip-nav-home">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#ip-nav-payments">Payments</a></BreadcrumbItem>
            <BreadcrumbItem active>Details</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="ip-panel ip-col-7">
          <div className="ip-panel-header"><h3>Tabs</h3><span className="ip-panel-subtitle">Contextual navigation</span></div>
          <Nav tabs>
            <NavItem><NavLink href="#overview" active={active === 'overview'} onClick={(e) => {e.preventDefault();setActive('overview')}}>Overview</NavLink></NavItem>
            <NavItem><NavLink href="#activity" active={active === 'activity'} onClick={(e) => {e.preventDefault();setActive('activity')}}>Activity</NavLink></NavItem>
            <NavItem><NavLink href="#settings" active={active === 'settings'} onClick={(e) => {e.preventDefault();setActive('settings')}}>Settings</NavLink></NavItem>
          </Nav>
          <TabContent activeTab={active} style={{ padding: '20px 2px 4px' }}>
            <TabPane tabId="overview"><div className="ip-activity-name">Overview</div><p className="ip-form-help">Your balances and key account information.</p></TabPane>
            <TabPane tabId="activity"><div className="ip-activity-name">Activity</div><p className="ip-form-help">A focused history of your payments.</p></TabPane>
            <TabPane tabId="settings"><div className="ip-activity-name">Settings</div><p className="ip-form-help">Configure your account preferences.</p></TabPane>
          </TabContent>
        </div>
        <div className="ip-panel ip-col-5">
          <div className="ip-panel-header"><h3>Dropdown menu</h3><span className="ip-panel-subtitle">Selection</span></div>
          <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
            <DropdownToggle caret color="secondary">Account actions</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setIsOpen(false)}>View account</DropdownItem>
              <DropdownItem onClick={() => setIsOpen(false)}>Download statement</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => setIsOpen(false)}>Preferences</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <p className="ip-workflow-note" style={{ marginTop: 25 }}>Navigation behavior uses the original Reactstrap components; this DS 2.1 skin is the visual preview pending family-level QA.</p>
    </main>
  );
}

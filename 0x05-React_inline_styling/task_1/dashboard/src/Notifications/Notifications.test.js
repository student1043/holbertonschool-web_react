import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});

  it('renders an <Notifications /> component and checks for 3 list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
	});

  it('renders an <Notifications /> component and verifies text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
	});

  it('<Notifications /> renders <NotificationItem />', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-priority="default">No new notification for now</li>');
  });

  it('Checking the menu item when false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  })

  it('Checking the div.Notifications when false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  })

  it('Checking the menu item when true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  })

  it('Checking div.Notifications when true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  })

  it('console.log mockup', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    const thisinstance = wrapper.instance();
    const myid = 0;
    thisinstance.markAsRead(myid);
    expect(console.log).toHaveBeenCalledWith(
      `Notification ${myid} has been marked as read`
    );
    jest.restoreAllMocks();
  });
});

describe('listNotifications has values in it', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;
  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('the values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const notificat = wrapper.find('NotificationItem');
    expect(notificat).toBeDefined();
    expect(notificat).toHaveLength(3);
    expect(notificat.at(0).html()).toEqual(
      '<li data-priority="default">New course available</li>'
    );
    expect(notificat.at(1).html()).toEqual(
      '<li data-priority="urgent">New resume available</li>'
    );
    expect(notificat.at(2).html()).toEqual(
      `<li data-priority="urgent">${latestNotification}</li>`
    );
  });
});

describe('listNotifications does not have any values', () => {
  let listNotifications = undefined;
  beforeEach(() => {
    listNotifications = [];
  });

  it('no values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const notificat = wrapper.find('NotificationItem');
    expect(notificat).toHaveLength(1);
    expect(notificat.html()).toEqual(
      '<li data-priority="default">No new notification for now</li>'
    );
  });

  it('There is no ListNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const notificat = wrapper.find('NotificationItem');
    expect(notificat).toHaveLength(1);
    expect(notificat.html()).toEqual(
      '<li data-priority="default">No new notification for now</li>'
    );
  });
});

it('No Rendering When List is The Same', () => {
  const OldNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];
  const wrapper = shallow(<Notifications displayDrawer={true} OldNotifications={OldNotifications} />);

  expect(wrapper.instance().shouldComponentUpdate(OldNotifications)).toEqual(true)
})

it('Renders When The Notifications Are Updated', () => {
  const OldNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];
  const newNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', html: getLatestNotification() },
  ];
  const wrapper = shallow(<Notifications OldNotifications={OldNotifications} />);

  expect(wrapper.instance().shouldComponentUpdate(newNotifications)).toEqual(true)
  })

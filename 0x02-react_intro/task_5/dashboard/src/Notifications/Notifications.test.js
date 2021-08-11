import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Testing if function Notifications Renders Without Crashing', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
      });
    });

describe('verify that Notifications renders three list items', () => {
    it('renders three list items', () => {
        const wrapper = shallow((
            <Notifications />
        ));
		expect(wrapper.find('li')).toHaveLength(3);
	    });
    });

describe('verify that Notifications renders the text Here is the list of notifications', () => {
    it('renders the text', () => {
        const wrapper = shallow((
            <Notifications />
        ));
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
        });
    });

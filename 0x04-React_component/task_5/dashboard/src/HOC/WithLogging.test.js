import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

describe('<withLogging />', () => {
  it('Console Log Checker', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const MyComponent = WithLogging(() => <p />);
    const MyComponent = WithLogging(React.Component);
    const wrapper = shallow(<MyComponent />)

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  })

  it('Mounting and Unmounting Console Log', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const MyComponent = WithLogging(Login);
    const wrapper = shallow(<MyComponent />)

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(`Component Login is mounted`);

    wrapper.unmount();
    expect(spy).toBeCalledWith(`Component Login is going to unmount`);
    expect(spy).toBeCalledTimes(2);

    spy.mockRestore();
  })
})

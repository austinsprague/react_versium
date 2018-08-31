import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import { mount, shallow } from "enzyme";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("Home", () => {
  let props;
  let mountedHomeScreen;
  const home = () => {
    if (!mountedHomeScreen) {
      mountedHomeScreen = mount(
        <Home {...props} />
      );
    }
    return mountedHomeScreen;
  }

  beforeEach(() => {
    props = {
      firstname: '',
      lastname: '',
      state: '',
      results:[],
      loading:false,
      hasSearched: false
    };
  });

  it("always renders a div", () => {
    const divs = home().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a form", () => {
    const form = home().find("form");
    expect(form.length).toBeGreaterThan(0);
  });

  it("does not render spinner when loading", () =>{
    const spinner = home().find("spinner");
    expect(spinner.length).toEqual(0);
  });

  it("renders spinner when loading", () =>{

    const spinner = home().find("spinner");
    expect(spinner.length).toEqual(0);
    expect(props.loading).toEqual(false);
    expect(props.hasSearched).toEqual(false);
  });



});



// test('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
//
//   expect(checkbox.text()).toEqual('Off');
//
//   checkbox.find('input').simulate('change');
//
//   expect(checkbox.text()).toEqual('On');
// });

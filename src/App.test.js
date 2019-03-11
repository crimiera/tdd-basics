import React from 'react';
import {shallow,configure} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App/>);

describe("App component ",()=>{
  const id = 1;
  it('RENDER without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  it("INITIALIZE the state with emplty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  })

  describe("When clicking ACTION the `add-gift` button",()=>{

    beforeEach(()=>{
      app.find(".btn-add").simulate('click');
    })
    it("STATE UPDATE add a new gift to the state ", () => {
      expect(app.state().gifts).toEqual([{id:1}]);
    });

    it("UI UPDATE add a new gift to the list", () => {
      expect(app.find('.gift-list').children().length).toEqual(2);
    });

    it('EXISTS creates a Gift component', ()=>{
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('and the user wants to REMOVE ACTION added gift',()=>{
      beforeEach (()=>{
        app.instance().removeGift(id);
      }) 

      it('remove the gift from the STATE',()=>{

        expect(app.state().gifts).toEqual([]);
      })
    });

    


  });

});
import React from 'react';
import {shallow,configure} from 'enzyme';
import ReactDOM from 'react-dom';
import Gift from './index.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Gift", ()=>{

    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift:{id}, removeGift:mockRemove }
    const gift = shallow(<Gift {...props}/>);
    
    it("RENDERS", ()=>{
        expect(gift).toMatchSnapshot();
    });

    it("INITIALIZE a person and present in the `state` ",()=>{
        expect(gift.state()).toEqual({person:'',present:''});
    });

    describe('when typing ACTION into the person input', ()=> {

        const Uncle = 'Uncle';

        beforeEach(()=>{
            gift.find(".input-person").simulate('change',{target:{value:Uncle}})
        })

        it('UPDATE the person in the STATE',()=>{
            expect(gift.state().person).toEqual(Uncle);
        })
    })

    describe('when typing ACTION into the present input', ()=> {
        
        const Golf = 'golf sticks';

        beforeEach(()=>{
            gift.find(".input-present").simulate('change',{target:{value:Golf}})
        })

        it('update the person in the State',()=>{
            expect(gift.state().present).toEqual(Golf);
        })
    });

    describe('When clicking on remove gift Button',()=>{
        beforeEach (()=>{
            gift.find('.btn-remove').simulate('click');
        }) 
  
        it('call remove gift callback',()=>{
          expect(mockRemove).toHaveBeenCalledWith(id);
        })
      });

});
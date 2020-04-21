import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './components/constants/ErrorBoundary';

const Something = () => null;

problemChild(){
  describe(
    'ErrorBoundary', () => {
      it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = mount(
          <ErrorBoundary>
            <Something />
          </ErrorBoundary>
        );

        const error = new Error('test');

        wrapper.find(Something).simulateError(error);

        /* The rest fo your test */
      });

    }




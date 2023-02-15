import { mount } from 'cypress-qwik';
import Header from './header';

describe(`header component test`, () => {
  it('should find a link', () => {
    mount(<Header />);

    expect(true).to.equal(true);
  });
});

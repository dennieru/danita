import {Greeter} from '../../src/app/greeter';

describe('Greeter test', () => {
  it('should greet people', () => {
    const greeting = new Greeter().greet('Joe');
    expect(greeting).toBe(`Hello Joe!`, 'Greeter should generate different greeting');
  })
});

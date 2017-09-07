import * as styles from './styles/main.scss';
import {Greeter} from './app/greeter';

const greeter = new Greeter();
const name = 'Matt';

greeter.greet(name);

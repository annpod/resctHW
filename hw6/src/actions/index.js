import {INC, DEC, RESET, FILTER} from '../actions/types';

export const increment = () => {
	return { type: INC };
};
export const decrement = () => {
	return { type: DEC };
};
export const reset = () => {
	return { type: RESET };
};
export const filter = () => {
	return { type: FILTER };
}

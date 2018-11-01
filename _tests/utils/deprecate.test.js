/* globals mount */
/* eslint-disable no-console */
import { deprecateLog, deprecateFunction } from '../../components/utils/deprecate';

const log = console.log;

describe('Expect', () => {
    beforeEach(() => {
        console.log = log;
    });

    it('deprecateLog() to log a message only once', () => {
        console.log = jest.fn();
        deprecateLog('This is a deprecation warning');
        deprecateLog('This is a deprecation warning'); // same
        deprecateLog('This is a deprecation warning'); // same
        expect(console.log).toHaveBeenCalledTimes(1);

        deprecateLog('This is a different warning'); // new
        expect(console.log).toHaveBeenCalledTimes(2);
    });

    it('deprecateFunction() to return nothing if a function is not provided', () => {
        console.log = jest.fn();
        const oldFunc = 'not a func';
        const oldFuncDeprecated = deprecateFunction(oldFunc, "this is an old func so don't use it");
        expect(oldFuncDeprecated).toEqual(undefined);
    });

    it('deprecateFunction() to return a function and to log a deprecation message when called', () => {
        console.log = jest.fn();
        const oldFunc = jest.fn();
        const oldFuncDeprecated = deprecateFunction(oldFunc, "this is an old func so don't use it");
        expect(oldFuncDeprecated).toEqual(expect.any(Function));

        oldFuncDeprecated('foo', { bar: 'bat ' });
        expect(oldFunc).toBeCalledWith('foo', { bar: 'bat ' });

        oldFuncDeprecated('bar', { bat: 'foo ' });
        expect(oldFunc).toBeCalledWith('bar', { bat: 'foo ' });
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});

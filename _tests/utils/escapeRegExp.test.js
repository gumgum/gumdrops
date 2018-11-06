/* globals mount */
import escapeRegExp from '../../components/utils/escapeRegExp';

describe('Expect', () => {
    it('escapeRegExp() to escape special characters', () => {
        expect(escapeRegExp('brackets[]')).toEqual('brackets\\[\\]');
        expect(escapeRegExp('dot.')).toEqual('dot\\.');
        expect(escapeRegExp('asterisk*')).toEqual('asterisk\\*');
        expect(escapeRegExp('plus+')).toEqual('plus\\+');
        expect(escapeRegExp('question?')).toEqual('question\\?');
        expect(escapeRegExp('caret^')).toEqual('caret\\^');
        expect(escapeRegExp('curly{}')).toEqual('curly\\{\\}');
        expect(escapeRegExp('pipe|')).toEqual('pipe\\|');
        expect(escapeRegExp('slash\\')).toEqual('slash\\\\');
    });
});

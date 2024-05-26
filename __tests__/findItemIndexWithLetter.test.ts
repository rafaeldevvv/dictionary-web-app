import findItemIndexWithLetter from '@/utils/findItemIndexWithLetter';

const testInput = ['hello', 'world', 'Ello', 'Orld'];

describe('findItemIndexWithLetter()', () => {
    it('should work with various inputs', () => {
        expect(findItemIndexWithLetter(testInput, 0, 'h')).toBe(0);
        expect(findItemIndexWithLetter(testInput, 2, 'e')).toBe(2);
        expect(findItemIndexWithLetter(testInput, 2, 'w')).toBe(undefined);
        expect(findItemIndexWithLetter(testInput, 0, 'd')).toBe(undefined);
    });
})

let {
    exponentialSmoothing,
    getDateOfDayInPrevWeek
} = require('./forecastModel');


describe('Exponential Smoothing', () => {
    it('should be a number', () => {
        expect(typeof exponentialSmoothing(11, 13, 0.3)).toBe('number');
    });

    it('should not be less than 0', () => {
        expect(exponentialSmoothing(23, 25, 0.5)).not.toBeLessThan(0);
    });

    it('should have been called with', () => {
        exponentialSmoothing = jest.fn(exponentialSmoothing);
        exponentialSmoothing(10, 11, 1);
        expect(exponentialSmoothing).toHaveBeenCalledWith(10, 11, 1);
    });

    it('should not throw Error if alpha is greater than 1 or less than 0', () => {
        expect((() => {
            exponentialSmoothing(10, 11, 1.1)
        })).toThrow();
        expect((() => {
            exponentialSmoothing(10, 11, -1)
        })).toThrow();
    });

});


describe('getDateOfDayInPrevWeek', () => {
    it('should return a string', () => {
        expect(typeof getDateOfDayInPrevWeek('sunday')).toBe('string');
    });

    it('should throw an error if parameter is not a correct week day', () => {
        expect(() => getDateOfDayInPrevWeek('ssday')).toThrow();
    });
});
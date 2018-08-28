const {
    exponentialSmoothing,
    getDateOfPrevWeekDay,
    getForecast
} = require('./ass');

describe('forecast model', () => {
    it('should be a number', () => {
        expect(typeof exponentialSmoothing()).toBe('number');
    });

    it('should not be less than 0', () => {
        expect(exponentialSmoothing(23, 25, 0.5)).not.toBeLessThan(0);
    });

})
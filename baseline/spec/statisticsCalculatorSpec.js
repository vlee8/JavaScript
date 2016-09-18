describe('StatisticsCalculator', function () {

    describe('#maximum', function() {
        it('should return empty string when passing empty array', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.maximum([])).toBe('');
        });
        it('should return the value of the one element', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.maximum([1])).toBe(1);
        });
        it('should return the maximum value when passing array of two', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.maximum([1, 2])).toBe(2);
        });
    });

    describe('#minimum', function() {
        it('should return empty string when passing empty array', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.minimum([])).toBe('');
        });
        it('should return the value of the one element', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.minimum([1])).toBe(1);
        });
        it('should return the minimum value when passing array of two', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.minimum([3, 2])).toBe(2);
        });
    });

    describe('#average', function() {
        it('should return empty string when passing empty array', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.average([])).toBe('');
        });
        it('should return the value of the one element', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.average([1])).toBe(1);
        });
        it('should return the average value when passing array of two', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.average([1, 3])).toBe(2);
        });
        it('should return the average value when passing array of three', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.average([1, 3, 5])).toBe(3);
        });
    });

    describe('#length', function() {
        it('should return 0 when passing empty array', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.length([])).toBe(0);
        });
        it('should return 1 when passing empty array', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.length([1])).toBe(1);
        });
        it('should return 2 when passing array of two', function () {
            statisticsCalculator = new StatisticsCalculator();
            expect(statisticsCalculator.length([1, 3])).toBe(2);
        });
    });
});

function StatisticsCalculator() {

    function calculate(numberSequence, operation) {
        if (numberSequence.length === 0) {
            return '';
        }

        return numberSequence.reduce(operation);
    }

    this.maximum = function(numberSequence) {

        var getMaximum = function(max, num) {
            return max > num ? max : num
        };

        return calculate(numberSequence, getMaximum);
    };

    this.minimum = function(numberSequence) {

        var getMinimum = function(min, num) {
            return min < num ? min : num
        };

        return calculate(numberSequence, getMinimum);
    };

    this.average = function(numberSequence) {

        var getSum = function(sum, num) {
            return sum + num
        };

        var avg = calculate(numberSequence, getSum)/numberSequence.length;

        return isNaN(avg) ? '' : avg;
    };

    this.length = function(numberSequence) {
        return numberSequence.length;
    };
}

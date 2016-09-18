'use strict';
var Application = function() {

    var statisticsCalculator = new StatisticsCalculator();

    function getResult(operation) {
        return function () {
            var input = document.getElementById('input-box').value;
            var inputArray = input.split(',').map(function(numString) {
                return Number(numString);
            });
            var result = statisticsCalculator[operation](inputArray);
            document.getElementById('result-value').textContent = result;
        };
    }

    return {
        init: function() {

            document.getElementById('max').onclick = getResult('maximum');
            document.getElementById('min').onclick = getResult('minimum');
            document.getElementById('average').onclick = getResult('average');
            document.getElementById('length').onclick = getResult('length');
        }
    };
};

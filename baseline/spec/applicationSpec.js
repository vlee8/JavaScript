'use strict';

/*
  Note: This test uses an HTML Fixture. Fixture elements are essentially an insertion of HTML onto your DOM for your tests to run on if your JS operates on the DOM.
  Using fixtures is a good practice in JS testing, and generally fixtures should be separated out from the code.
*/

describe('application', function () {
    var container, application;

    beforeEach(function () {
        container = fixture(
          '<div id="result-value">sample html</div>' +
          '<button id="max"></button>' +
          '<button id="min"></button>' +
          '<button id="average"></button>' +
          '<button id="length"></button>' +
          '<input id="input-box">'
        );
        document.body.appendChild(container);
        application = new Application(document);
    });

    afterEach(function () {
        document.body.removeChild(container);
    });

    it('should change result-value when maximum button is clicked', function () {
        application.init();

        document.getElementById('input-box').value = '1,2,3';
        document.getElementById('max').click();
        expect(document.getElementById('result-value').textContent).toEqual('3');
    });

    it('should change result-value when minimum button is clicked', function () {
        application.init();

        document.getElementById('input-box').value = '1,2,3';
        document.getElementById('min').click();
        expect(document.getElementById('result-value').textContent).toEqual('1');
    });

    it('should change result-value when average button is clicked', function () {
        application.init();

        document.getElementById('input-box').value = '1,2,3';
        document.getElementById('average').click();
        expect(document.getElementById('result-value').textContent).toEqual('2');
    });

    it('should change result-value when length button is clicked', function () {
        application.init();

        document.getElementById('input-box').value = '1,2,3';
        document.getElementById('length').click();
        expect(document.getElementById('result-value').textContent).toEqual('3');
    });


});

function fixture(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}

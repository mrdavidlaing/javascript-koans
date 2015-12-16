(function () {
    var originalFail = jasmine.Spec.prototype.fail;
    jasmine.Spec.prototype.fail = function (e) {
        var message = (e && e.message) || 'Error';
        var expectationResult = new jasmine.ExpectationResult({
            passed: false,
            message: message
        })

        if (e) {
            if (e.htmlMessage) {
                var errorElement = document.createElement('div');
                errorElement.innerHTML = e.htmlMessage;
                expectationResult.message = errorElement
            }

            expectationResult.trace = {
                stack: e.stack.substring(e.stack.indexOf(message) + message.length + 1)
            };
        }

        this.results_.addResult(expectationResult);
    }
}());

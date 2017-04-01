/**
 * 
 * @author abogdanov
 * @stateless
 * @public 
 */
define('BusinessModule', [], function (ModuleName) {
    function module_constructor() {
        var self = this;

        self.calculatePayment = function (percent, success, failure) {
            try {
                var result = 100000 * percent - percent + Math.sin(1);
                success(result);
            } catch (e) {
                failure(e);
            }
        };
    }
    return module_constructor;
});

/**
 * 
 * @author abogdanov
 * @stateless
 * @public 
 */
define('FastDatabaseModule', ['orm', 'id'], function (Orm, Id, ModuleName) {
    var model = Orm.loadModel(ModuleName);

    function module_constructor() {
        var self = this;
        
        self.savePayment = function (value, success, failure) {
            try {
                model.addPayment.enqueueUpdate({id: Id.generate(), time: new Date(), value: value});
                model.save(function () {
                    success();
                }, function (e) {
                    failure(e);
                });
            } catch (e) {
                failure(e);
            }
        };
    }
    return module_constructor;
});

var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');

module.exports = function(app){
    app.get('/customers', function(req, res){
        customers.show(req, res);
    });
    app.post('/create_cust', function(req, res){
        customers.create(req, res);
    });
    app.post('/destroy_cust', function(req, res){
        customers.destroy(req, res);
    });
}
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
    return{
        show: function(req, res){
            Order.find({}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    res.json(results);
                }
            });
        },
        create: function(req, res){
            var newOrder = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, cust_id: req.body.cust_id, date: req.body.date});
            newOrder.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Order.find({}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    });
                }
            });
        }
    }
})();
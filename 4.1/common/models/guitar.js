module.exports = function(Guitar) {
    
    Guitar.findUnderPrice = function(value, cb) {
        Guitar.find({
            where : {
                price : {
                    lt : value
                }
            }
        }, cb);
    };
    
    /* /api/guitars/under-price?price=2000 */
    Guitar.remoteMethod("findUnderPrice", {
        accepts: {
            arg: "price",
            type: "number"
        },
        returns: {
            arg: "guitars",
            type: "array"
        },
        http: {
            path: "/under-price",
            verb: "get"
        }
    });
    
    
};

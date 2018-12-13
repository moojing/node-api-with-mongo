const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const MenuSchema = new Schema( { 
    menus: {
        type:Array,
        default: [ {name:"Bikes",
                    link:''}] 
    },
    
})

MenuSchema.static('getSingleton', function (cb) {
    return this.findOne({})
               .limit(1)
               .exec(function (error, model) {
                    if (error) {
                        cb(error, null);
                    } else if (model == null) {
                        cb(error, new Menu());
                    } else {
                        cb(error, model);
                    }
                });
    });


 
const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
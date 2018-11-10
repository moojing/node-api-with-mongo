const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const MenuSchema = new Schema( { 
    names: {
        type:Array,
        default: ['AAAA','VVVV'] 
    },
    
})


MenuSchema.static('findByName', function (cb) {
    return this.findOne({ name: name })
               .limit(1)
               .exec(function (error, model) {
                    if (error) {
                        cb(error, null);
                    } else if (model == null) {
                        cb(error, new MenuSchema());
                    } else {
                        cb(error, model);
                    }
                });
    });



MenuSchema.statics = {
    getSingleton: function (cb) {
          this.findOne()
              .limit(1)
              .exec(function (error, model) {
                  if (error) {
                      cb(error, null);
                  } else if (model == null) {
                      cb(error, new MenuSchema());
                  } else {
                      cb(error, model);
                  }
              });
      },
   };

const Menu = mongoose.model('Menu', MenuSchema)
module.exports = Menu
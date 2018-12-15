const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const MenuSchema = new Schema( { 
    menus: {
        type:Array,
        default: [  {
            lang:'zh-cn',
            bike: ['road', 'mtb'],
            team: '',
            news: '',
            about: ''
          },
          {
            lang:'en-us',
            bike: ['road', 'mtb'],
            team: '',
            news: '',
            about: ''
          },
          {
            lang:'ja-jp',
            bike: ['road', 'mtb'],
            team: '',
            news: '',
            about: ''
          },
          {
            lang:'es-es',
            bike: ['road', 'mtb'],
            team: '',
            news: '',
            about: ''
          },
          {
            lang:'it-ch',
            bike: ['road', 'mtb'],
            team: '',
            news: '',
            about: ''
          }
    ] },
    
})

MenuSchema.static('getSingleton', function (cb,lang) {
    return Menu.find({},{menus:{$elemMatch:{lang}}})
                .limit(1)
                .exec(function (error, model) {
                   console.log('model has found:',model)
                    if (error) {
                        cb(error, null);
                    } else if (!model|| model.length==0) {
                        cb(error, new Menu());
                    } else {
                        cb(error, model);
                    }
                });
    });


 
const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
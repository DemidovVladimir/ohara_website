var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ohara');

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username        : {type:String,
        default:'Admin'},
    password     : {type:String,
        default:'Admin'}
});
exports.userModel = mongoose.model('User', userSchema);

var dishes = mongoose.Schema({
    dish_name:{
        type:String,
        unique:true
    },
    dish_photo:{
        type:[],
        unique:false
    },
    dish_brief:{
        type:String
    },
    dish_about:{
        type:String,
        unique:false
    },
    dish_prepare:{
        type:Number,
        unique:false
    },
    dish_price:{
        type:String,
        unique:false
    },
    dish_weight:{
        type:String,
        unique:false
    },
    dish_type:{
        type:String
    },
    dish_category:{
        type:String
    }
});
exports.dishesModel = mongoose.model('dishe',dishes);

var news = mongoose.Schema({
    news_name:{
        type:String,
        unique:true
    },
    news_photo:{
        type:[],
        unique:false
    },
    news_brief:{
        type:String
    },
    news_about:{
        type:String,
        unique:false
    },
    news_date:{
        type:String,
        unique:false
    }
});
exports.newsModel = mongoose.model('new',news);

var events = mongoose.Schema({
    event_name:{
        type:String,
        unique:true
    },
    event_photo:{
        type:[],
        unique:false
    },
    event_brief:{
        type:String
    },
    event_about:{
        type:String,
        unique:false
    },
    event_date:{
        type:String,
        unique:false
    }
});
exports.eventsModel = mongoose.model('event',events);

var categories = mongoose.Schema({
    category_tytle:{
        type:String
    },
    category_photo:{
        type:String
    },
    category_brief:{
        type:String
    }
});
exports.categoriesModel = mongoose.model('categori',categories);
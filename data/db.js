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
    }
});
exports.newsModel = mongoose.model('new',news);

var events = mongoose.Schema({
    event_photo:{
        type:String,
        unique:false
    }
});
exports.eventsModel = mongoose.model('event',events);
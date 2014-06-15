var db = require('./../data/db.js');
var fs = require('fs');
var gm = require('gm');


exports.input_dish = function(req,res,next){
    var dishe = req.body.name;
    var about = req.body.about;


    db.dishesModel.create({ dish_name:dishe,dish_about:about},function(err){
        if(err) console.log('Dublicate data');
    });
}

exports.getMenuTotal = function(req,res,next){
    db.dishesModel.find({},function(err,data){
        if(err) return next(err);
        var info = data;
        console.log('request to db is sent');
        res.send(info);
    });
}
exports.getNewsTotal = function(req,res,next){
    db.newsModel.find({},function(err,data){
        if(err) return next(err);
        var info = data;
        res.send(info);
    });
}
exports.getEventsTotal = function(req,res,next){
    db.eventsModel.find({},function(err,data){
        if(err) return next(err);
        var events = data;
        res.send(events);
    });
}







//At the menu administration adding photo with data
exports.addDish = function(req,res,next){
    db.dishesModel.find({dish_name:req.body.title},function(err,data){if(err) return next(err);
        if(data.length==1){
            fs.createReadStream(req.files.file.path)
                .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
            gm('public/uploaded/'+req.files.file.originalFilename)
                .resize(170, 140)
                .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                    if (!err) console.log('done_mini');
                });
            db.dishesModel.update({dish_name:req.body.title},
                { $push: {"dish_photo": req.files.file.originalFilename}},function(err){
                    if(err) return next(err);
                    res.send(200);
                }
            );
        }else{
            fs.createReadStream(req.files.file.path)
                .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
            gm('public/uploaded/'+req.files.file.originalFilename)
                .resize(170, 140)
                .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                    if (!err) console.log('done_mini');
                });
            var titleDish = req.body.title;
            var aboutDish = req.body.about;
            var timeDish = req.body.time;
            var brief = req.body.brief;
            db.dishesModel.create({dish_name:titleDish,dish_photo:req.files.file.originalFilename, dish_brief:brief, dish_about:aboutDish, dish_prepare:timeDish},function(err){
                if(err) return next(err);
                res.send(200);
            });
        }
    });
}
//At the menu administration adding photo with data
exports.addNews = function(req,res,next){
    db.newsModel.find({news_name:req.body.title},function(err,data){if(err) return next(err);
        if(data.length==1){
            fs.createReadStream(req.files.file.path)
                .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
            gm('public/uploaded/'+req.files.file.originalFilename)
                .resize(170, 140)
                .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                    if (!err) console.log('done_mini');
                });
            db.newsModel.update({news_name:req.body.title},
                { $push: {"news_photo": req.files.file.originalFilename}},function(err){
                    if(err) return next(err);
                    res.send(200);
                }
            );
        }else{
            fs.createReadStream(req.files.file.path)
                .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
            gm('public/uploaded/'+req.files.file.originalFilename)
                .resize(170, 140)
                .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                    if (!err) console.log('done_mini');
                });
            var titleNews = req.body.title;
            var aboutNews = req.body.about;
            var brief = req.body.brief;
            db.newsModel.create({news_name:titleNews,news_photo:req.files.file.originalFilename, news_brief:brief, news_about:aboutNews},function(err){
                if(err) return next(err);
                res.send(200);
            });
        }
    });
}
//At the event administration adding photo with data
exports.addEvent = function(req,res,next){
    console.log(req.files.file.originalFilename);
            fs.createReadStream(req.files.file.path)
                .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
            gm('public/uploaded/'+req.files.file.originalFilename)
                .resize(170, 140)
                .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                    if (!err) console.log('done_mini');
                });
            db.eventsModel.create({event_photo:req.files.file.originalFilename},function(err){
                if(err) return next(err);
                res.send(200);
            });
}







//In maintain dish adding photo option
exports.addDishPhoto = function(req,res,next){
    var aboutDish = req.body.about;
    var timeDish = req.body.time;
    var briefDish = req.body.brief;
    if(briefDish=='undefined'){
        briefDish = null;
    }
    if(aboutDish == 'undefined'){
        aboutDish = null;
    }
    if(timeDish == 'undefined'){
        timeDish = null;
    }

    if(aboutDish && timeDish && briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename},dish_brief:briefDish, dish_about:aboutDish, dish_prepare:timeDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(aboutDish && !timeDish && !briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}, dish_about:aboutDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(!aboutDish && timeDish && !briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}, dish_prepare:timeDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(aboutDish && timeDish && !briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename},dish_about: aboutDish, dish_prepare:timeDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(!aboutDish && !timeDish && briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}, dish_brief:briefDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(aboutDish && !timeDish && briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}, dish_brief:briefDish, dish_about:aboutDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(!aboutDish && timeDish && briefDish){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}, dish_brief:briefDish, dish_prepare:timeDish},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else{
        console.log('triyng logic without data')
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.dishesModel.update({dish_name:req.body.title},
            { $push: {"dish_photo": req.files.file.originalFilename}},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
}

//In maintain news adding photo option
exports.addNewsPhoto = function(req,res,next){
    var aboutNews = req.body.about;
    var briefNews = req.body.brief;
    if(briefNews=='undefined'){
        briefNews = null;
    }
    if(aboutNews == 'undefined'){
        aboutNews = null;
    }

    if(aboutNews && briefNews){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.newsModel.update({news_name:req.body.title},
            { $push: {"news_photo": req.files.file.originalFilename},news_brief:briefNews, news_about:aboutNews},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(aboutNews && !briefNews){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.newsModel.update({news_name:req.body.title},
            { $push: {"news_photo": req.files.file.originalFilename}, news_about:aboutNews},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
    else if(aboutNews && !briefNews){
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.newsModel.update({news_name:req.body.title},
            { $push: {"news_photo": req.files.file.originalFilename},news_about: aboutNews},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }else{
        console.log('triyng logic without data')
        fs.createReadStream(req.files.file.path)
            .pipe(fs.createWriteStream('public/uploaded/'+req.files.file.originalFilename));
        gm('public/uploaded/'+req.files.file.originalFilename)
            .resize(170, 140)
            .write('public/uploaded/mini_'+req.files.file.originalFilename, function (err) {
                if (!err) console.log('done_mini');
            });
        db.newsModel.update({news_name:req.body.title},
            { $push: {"news_photo": req.files.file.originalFilename}},function(err){
                if(err) return next(err);
                res.send(200);
            }
        );
    }
}






//At the menu administration posting data without photo
exports.postOutOfFile = function(req,res,next){
    var title = req.body.title;
    var about = req.body.about;
    var time = req.body.time;
    var brief = req.body.brief;
    db.dishesModel.create({dish_name:title, dish_about:about, dish_brief:brief, dish_prepare:time},function(err){
        if(err) return next(err);
        res.send(200);
    });
}
//At the menu administration posting data without photo
exports.postNewsOutOfFile = function(req,res,next){
    var title = req.body.title;
    var about = req.body.about;
    var brief = req.body.brief;
    db.newsModel.create({news_name:title, news_about:about, news_brief:brief},function(err){
        if(err) return next(err);
        res.send(200);
    });
}








//Same as before but from dish maintaining
exports.postDishDataOutOfFile = function(req,res,next){
    var title = req.body.title;
    var about = req.body.about;
    var time = req.body.time;
    var brief = req.body.brief;
    if(about && time && brief){
        db.dishesModel.update({dish_name:title},{dish_about:about, dish_prepare:time,dish_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(about && !time && brief){
        db.dishesModel.update({dish_name:title},{dish_about:about,dish_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(!about && !time && brief){
        db.dishesModel.update({dish_name:title},{dish_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(!about && time && brief){
        db.dishesModel.update({dish_name:title},{dish_prepare:time,dish_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }

    else if(about && !time && !brief){
        db.dishesModel.update({dish_name:title},{dish_about:about},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(!about && time && !brief){
        db.dishesModel.update({dish_name:title},{dish_prepare:time},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(about && time && !brief){
        db.dishesModel.update({dish_name:title},{dish_about:about,dish_prepare:time},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
}
//Same as before but from dish maintaining
exports.postNewsDataOutOfFile = function(req,res,next){
    var title = req.body.title;
    var about = req.body.about;
    var brief = req.body.brief;
    if(about && brief){
        db.newsModel.update({news_name:title},{news_about:about,news_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(!about && brief){
        db.newsModel.update({news_name:title},{news_brief:brief},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
    else if(about && !brief){
        db.newsModel.update({news_name:title},{news_about:about},function(err){
            if(err) return next(err);
            res.send(200);
        });
    }
}






exports.getDishInfo = function(req,res,next){
    var dishTitle = req.params.dish;
    db.dishesModel.find({dish_name:dishTitle},function(err,data){
        if(err) return next(err);
        res.send(data);
    });
}
exports.getNewsInfo = function(req,res,next){
    var newsTitle = req.params.news;
    db.newsModel.find({news_name:newsTitle},function(err,data){
        if(err) return next(err);
        res.send(data);
    });
}

exports.deletePicture = function(req,res,next){
    var dishToMaintain = req.params.dish;
    var pictureToDelete = req.params.pic;
    db.dishesModel.update({dish_name:dishToMaintain},
        { $pull: {"dish_photo": pictureToDelete}},function(err){
            if(err) return next(err);
            fs.unlink(__dirname+'/../public/uploaded/'+pictureToDelete,function(err){
                if(err) return next(err);
                    fs.unlink(__dirname+'/../public/uploaded/mini_'+pictureToDelete,function(err){
                        if(err) return next(err);
                    });
            });
            res.send(200);
        }
    );
}
exports.deleteNewsPicture = function(req,res,next){
    var newsToMaintain = req.params.news;
    var pictureToDelete = req.params.pic;
    db.newsModel.update({news_name:newsToMaintain},
        { $pull: {"news_photo": pictureToDelete}},function(err){
            if(err) return next(err);
            fs.unlink(__dirname+'/../public/uploaded/'+pictureToDelete,function(err){
                if(err) return next(err);
                fs.unlink(__dirname+'/../public/uploaded/mini_'+pictureToDelete,function(err){
                    if(err) return next(err);
                });
            });
            res.send(200);
        }
    );
}

exports.deleteDishTotal = function(req,res,next){
    var dishTitle = req.params.dish;
    db.dishesModel.find({dish_name:dishTitle},function(err,data){
        if(err) return next(err);
        var picObj = data[0].dish_photo;
        picObj.forEach(function(pic){
            fs.unlink(__dirname+'/../public/uploaded/'+pic,function(err){
                if(err) return next(err);
                fs.unlink(__dirname+'/../public/uploaded/mini_'+pic,function(err){
                    if(err) return next(err);
                })
            })
        });
        db.dishesModel.remove({dish_name:dishTitle},function(err){
            if(err) return next(err);
        });
    });
};
exports.deleteNewsTotal = function(req,res,next){
    var newsTitle = req.params.news;
    db.newsModel.find({news_name:newsTitle},function(err,data){
        if(err) return next(err);
        var picObj = data[0].news_photo;
        picObj.forEach(function(pic){
            fs.unlink(__dirname+'/../public/uploaded/'+pic,function(err){
                if(err) return next(err);
                fs.unlink(__dirname+'/../public/uploaded/mini_'+pic,function(err){
                    if(err) return next(err);
                })
            })
        });
        db.newsModel.remove({news_name:newsTitle},function(err){
            if(err) return next(err);
        });
    });
};

exports.deleteEventTotal = function(req,res,next){
    var eventPhoto = req.params.photo;
    db.eventsModel.find({event_photo:eventPhoto},function(err,data){
        if(err) return next(err);
        var picObj = data.event_photo;
            fs.unlink(__dirname+'/../public/uploaded/'+picObj,function(err){
                if(err) return next(err);
                fs.unlink(__dirname+'/../public/uploaded/mini_'+picObj,function(err){
                    if(err) return next(err);
                })
            })
        db.eventsModel.remove({event_photo:eventPhoto},function(err){
            if(err) return next(err);
        });
    });
};

exports.tryToLog = function(req,res,next){
    var username = req.body.username;
    var password = req.body.passworduser;
    console.log(username +' - '+password);
    db.userModel.find({},function(err,data){
        if(err) return next(err);
        console.log(data);
        req.session.user = data[0].username;
        //console.log(req.session.user);
        res.redirect('/menuAdmin');
    });
};
'use strict';

app.controller('tryout',function($scope,$resource){
    $scope.setdish = function(){
        var name = $scope.dishname;
        var about = $scope.aboutdish;
        var inputTo = $resource('input_dish');

        var input = new inputTo();
        input.name = name;
        input.about = about;

        input.$save();
    }
});





app.controller('getMenu',function($scope,$resource,$document,$window){
    $scope.width = window.innerWidth;
    var todo_2 = $resource('/getEventsTotal');
    var events = todo_2.query(function(){

        //Check window size
        $scope.$watch('width', function(newValue, oldValue) {
           if(newValue < 992){
                var pictureArr = [];
                for(var x=0; x<events.length; x++){
                    var total = {};
                    total.pic = '/uploaded/'+events[x].event_photo;
                    total.mini = '/uploaded/mini_'+events[x].event_photo;
                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%2;
                var devidedTot = picLength/2;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 2-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,2);
                var set = [];
                set.push(itemsActive);
                $scope.activeEvents = set[0];
                var leftLen = picLength-2;
                var itemsSingle = [];
                itemsSingle = pictureArr.slice(0);

                for(var t=0;t<itemsSingle.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(itemsSingle[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.singleEvents = itemsResult;
            }else{
                var pictureArr = [];
                for(var x=0; x<events.length; x++){
                    var total = {};
                    total.pic = '/uploaded/'+events[x].event_photo;
                    total.mini = '/uploaded/mini_'+events[x].event_photo;
                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%3;
                var devidedTot = picLength/3;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 3-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,3);
                var set = [];
                set.push(itemsActive);
                $scope.activeEvents = set[0];



                for(var t=0;t<pictureArr.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(pictureArr[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.singleEvents = itemsResult;
            };
        });
    });











    var todo = $resource('/getMenuTotal');
    var info = todo.query(function(){
        var forRepo = info;

        forRepo.forEach(function(repo){
            if(repo.dish_brief == 'undefined'){
                repo.dish_brief = '';
            }
            if(repo.dish_about == 'undefined'){
                repo.dish_about = '';
            }
        });

        $scope.info = forRepo;
        var lenka = info.length;






        //Check window size
        $scope.$watch('width', function(newValue, oldValue) {
            if(newValue < 768){
                var pictureArr = [];
                for(var x=0; x<lenka; x++){
                    var total = {};
                    total.pic = '/uploaded/'+info[x].dish_photo[0];
                    total.mini = '/uploaded/mini_'+info[x].dish_photo[0];
                    if(info[x].dish_name!='undefined'){
                        total.title = info[x].dish_name;
                    }else{
                        total.title = "";
                    }
                    if(info[x].dish_brief!='undefined'){
                        total.brief = info[x].dish_brief;
                    }else{
                        total.brief = '';
                    }
                    pictureArr.push(total);
                };
                $scope.itemsSingle = pictureArr;
            }else if(newValue < 992){
                var pictureArr = [];
                for(var x=0; x<lenka; x++){
                    var total = {};
                    total.pic = '/uploaded/'+info[x].dish_photo[0];
                    total.mini = '/uploaded/mini_'+info[x].dish_photo[0];
                    if(info[x].dish_name!='undefined'){
                        total.title = info[x].dish_name;
                    }else{
                        total.title = "";
                    }

                    if(info[x].dish_brief!='undefined'){
                        total.brief = info[x].dish_brief;
                    }else{
                        total.brief = '';
                    }


                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%4;
                var devidedTot = picLength/4;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 4-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.title = "";
                        total.brief = '';
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,4);
                var set = [];
                set.push(itemsActive);
                $scope.active = set[0];
                var leftLen = picLength-4;
                var itemsSingle = [];
                itemsSingle = pictureArr.slice(0);

                for(var t=0;t<itemsSingle.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(itemsSingle[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.itemsSingle = itemsResult;
            }else{
                var pictureArr = [];
                for(var x=0; x<lenka; x++){
                    var total = {};
                    total.pic = '/uploaded/'+info[x].dish_photo[0];
                    total.mini = '/uploaded/mini_'+info[x].dish_photo[0];
                    if(info[x].dish_name!='undefined'){
                        total.title = info[x].dish_name;
                    }else{
                        total.title = "";
                    }

                    if(info[x].dish_brief!='undefined'){
                        total.brief = info[x].dish_brief;
                    }else{
                        total.brief = '';
                    }


                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%5;
                var devidedTot = picLength/5;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 5-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.title = "";
                        total.brief = '';
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,5);
                var set = [];
                set.push(itemsActive);
                $scope.active = set[0];
                var leftLen = picLength-5;
                var itemsSingle = [];
                itemsSingle = pictureArr.slice(0);

                for(var t=0;t<itemsSingle.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(itemsSingle[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.itemsSingle = itemsResult;
            };
        });
    });




//Manipulating DOM




    function tellAngular() {
        $scope.$apply(function() {
            $scope.width = window.innerWidth;
           // location.reload();
        });
    }



    //calling tellAngular on resize event
    $window.onresize = tellAngular;
});

app.controller('menu',function($scope,$resource,$document,$window){


    $scope.width = window.innerWidth;

    var todo = $resource('/getMenuTotal');
    var info = todo.query(function(){
        var forRepo = info;

        forRepo.forEach(function(repo){
            if(repo.dish_brief == 'undefined'){
                repo.dish_brief = '';
            }
            if(repo.dish_about == 'undefined'){
                repo.dish_about = '';
            }
        });

        $scope.info = forRepo;
        var lenka = info.length;






        //Check window size
        $scope.$watch('width', function(newValue, oldValue) {
            if(newValue < 992){
                var pictureArr = [];
                for(var x=0; x<lenka; x++){
                    var total = {};
                    total.pic = '/uploaded/'+info[x].dish_photo[0];
                    total.mini = '/uploaded/mini_'+info[x].dish_photo[0];
                    if(info[x].dish_name!='undefined'){
                        total.title = info[x].dish_name;
                    }else{
                        total.title = "";
                    }

                    if(info[x].dish_brief!='undefined'){
                        total.brief = info[x].dish_brief;
                    }else{
                        total.brief = '';
                    }


                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%4;
                var devidedTot = picLength/4;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 4-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.title = "";
                        total.brief = '';
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,4);
                var set = [];
                set.push(itemsActive);
                $scope.active = set[0];
                var leftLen = picLength-4;
                var itemsSingle = [];
                itemsSingle = pictureArr.slice(0);

                for(var t=0;t<itemsSingle.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(itemsSingle[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.itemsSingle = itemsResult;
            }else{
                var pictureArr = [];
                for(var x=0; x<lenka; x++){
                    var total = {};
                    total.pic = '/uploaded/'+info[x].dish_photo[0];
                    total.mini = '/uploaded/mini_'+info[x].dish_photo[0];
                    if(info[x].dish_name!='undefined'){
                        total.title = info[x].dish_name;
                    }else{
                        total.title = "";
                    }

                    if(info[x].dish_brief!='undefined'){
                        total.brief = info[x].dish_brief;
                    }else{
                        total.brief = '';
                    }


                    pictureArr.push(total);
                };
                var picLength = pictureArr.length;
                var leftPic = picLength%5;
                var devidedTot = picLength/5;
                var devidedInt = parseInt(devidedTot);

                if(leftPic!=0 && devidedInt==0){
                    var nesPic = 5-leftPic;
                    for(var i=0;i<nesPic;i++){
                        var total = {};
                        total.pic = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.mini = "http://placehold.it/500/bbbbbb/fff&amp;text=4";
                        total.title = "";
                        total.brief = '';
                        pictureArr.push(total);
                    };
                }

                var itemsActive = pictureArr.splice(0,5);
                var set = [];
                set.push(itemsActive);
                $scope.active = set[0];
                var leftLen = picLength-5;
                var itemsSingle = [];
                itemsSingle = pictureArr.slice(0);

                for(var t=0;t<itemsSingle.length;t++){
                    var set_copy = [];
                    set_copy = set[t].slice(0);
                    set_copy.splice(0,1);
                    set_copy.push(itemsSingle[t]);
                    set.push(set_copy);
                };

                var itemsResult = [];
                for(var d=0;d<set.length-1;d++){
                    itemsResult.push(set[d+1]);
                }
                $scope.itemsSingle = itemsResult;
            };
        });
    });




//Manipulating DOM




    function tellAngular() {
        $scope.$apply(function() {
            $scope.width = window.innerWidth;
            //location.reload();
        });
    }



    //calling tellAngular on resize event
    $(window).resize(tellAngular);







//Manipulating DOM










    $scope.clickLeftMenu = function(){
        $('#myCarousel_7 .left').trigger('click');
        $('#myCarousel_8 .left').trigger('click');
    }

    $scope.clickRightMenu = function(){
        $('#myCarousel_7 .right').trigger('click');
        $('#myCarousel_8 .right').trigger('click');
    }


    $scope.clickcontrol = function(event){
        event.preventDefault();
    };

    /*#myCarousel_2 .thumbnail .btn-info{
        position: relative;
        bottom: -150px;
    }*/


});








app.controller('addMenu', function ($scope, $fileUploader,$resource,$route, $location) {
    $scope.path = 'http://localhost:4321/#/menuAdmin/';// Путь который контролит данный обработчик--------------------------------------


    $scope.deleteTotalDish = function(dish){
        var Todo = $resource('/deleteDishTotal/'+dish);
        var info = Todo.query();
        $route.reload();
    }

    //Post all data without picture--------------
    $scope.postDataOutOfFile = function(){
        var title = $scope.title;
        var about = $scope.about;
        var brief = $scope.brief;
        var time = $scope.time;
        if(title && title!='Данное поле является обязательным!!!'){
            var inputTo = $resource('/postDishOutOfFile');

            var input = new inputTo();
            input.title = title;
            input.about = about;
            input.time = time;
            input.brief = brief;

            input.$save();

            $route.reload();
        }else{
            $scope.title = 'Данное поле является обязательным!!!';
        }
    }


    var Todo = $resource('getMenuTotal');
    $scope.incomings = [];
    var info = Todo.query(function(){
        info.forEach(function(data){
            var incomeInfo = {};
            incomeInfo.title = data.dish_name;
            incomeInfo.photo = data.dish_photo;
            incomeInfo.about = data.dish_about;
            incomeInfo.brief = data.dish_brief;
            incomeInfo.time = data.dish_prepare;
            $scope.incomings.push(incomeInfo);
        });
    });





    //Photo uploader-----------------------------------------------------
        var uploader = $scope.uploader = $fileUploader.create({
            scope: $scope,
            url: 'addDish'
        });





    uploader.bind('beforeupload', function (event, item) {
        var title = $scope.title;
        var about = $scope.about;
        var brief = $scope.brief;
        var time = $scope.time;
        var info = {title:title,about:about,time:time,brief:brief};
        item.formData.push(info);
    });
    uploader.bind('completeall', function (event, items) {
        $route.reload();
    });



        // ADDING FILTERS

        // Images only
        uploader.filters.push(function(item /*{File|HTMLInputElement}*/) {
            var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
            type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        });


        // REGISTER HANDLERS

        uploader.bind('afteraddingfile', function (event, item) {
            console.info('After adding a file', item);
        });

        uploader.bind('whenaddingfilefailed', function (event, item) {
            console.info('When adding a file failed', item);
        });

        uploader.bind('afteraddingall', function (event, items) {
            console.info('After adding all files', items);
        });

        uploader.bind('beforeupload', function (event, item) {
            console.info('Before upload', item);
        });

        uploader.bind('progress', function (event, item, progress) {
            console.info('Progress: ' + progress, item);
        });

        uploader.bind('success', function (event, xhr, item, response) {
            console.info('Success', xhr, item, response);
        });

        uploader.bind('cancel', function (event, xhr, item) {
            console.info('Cancel', xhr, item);
        });

        uploader.bind('error', function (event, xhr, item, response) {
            console.info('Error', xhr, item, response);
        });

        uploader.bind('complete', function (event, xhr, item, response) {
            console.info('Complete', xhr, item, response);
        });

        uploader.bind('progressall', function (event, progress) {
            console.info('Total progress: ' + progress);
        });

        uploader.bind('completeall', function (event, items) {

        });
    });













app.controller('oneDish', function ($scope,$fileUploader,$routeParams,$resource,$route,$location){
    var dish = $routeParams.dish;
    var Todo = $resource('/getDishInfo/'+dish);
    var info = Todo.query(function(){
        var data = info[0];
        $scope.dishTitle = data.dish_name;
        $scope.dishAbout = data.dish_about;
        $scope.dishTime = data.dish_prepare;
        $scope.dishPhoto = data.dish_photo;
        $scope.dishBrief = data.dish_brief;
    });
    $scope.deletePic = function(pic){
        var toDo = $resource('/deletePicture/'+dish+'/'+pic);
        var deleteStuf = toDo.query();
        $route.reload();
    };











    //Post all data without picture
    $scope.postDataOutOfFile = function(){
        var title = $routeParams.dish;
        var about = $scope.about;
        var time = $scope.time;
        var brief = $scope.brief;
        var inputTo = $resource('/postDishDataOutOfFile');

        var input = new inputTo();
        input.title = title;
        input.about = about;
        input.time = time;
        input.brief = brief;

        input.$save();

        $route.reload();
    };

    ////Photo uploader------------------------------------------------------
    var uploader = $scope.uploader = $fileUploader.create({
        scope: $scope,
        url: 'addDishPhoto'
    });





    uploader.bind('beforeupload', function (event, item) {
        var title = $routeParams.dish;
        var about = $scope.about;
        var time = $scope.time;
        var brief = $scope.brief;
        var info = {title:title,about:about,brief:brief,time:time};
        item.formData.push(info);
    });
    uploader.bind('completeall', function (event, items) {
        $route.reload();
    });



    // ADDING FILTERS

    // Images only
    uploader.filters.push(function(item) {
        var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
        type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    });


    // REGISTER HANDLERS

    uploader.bind('afteraddingfile', function (event, item) {
        console.info('After adding a file', item);
    });

    uploader.bind('whenaddingfilefailed', function (event, item) {
        console.info('When adding a file failed', item);
    });

    uploader.bind('afteraddingall', function (event, items) {
        console.info('After adding all files', items);
    });

    uploader.bind('beforeupload', function (event, item) {
        console.info('Before upload', item);
    });

    uploader.bind('progress', function (event, item, progress) {
        console.info('Progress: ' + progress, item);
    });

    uploader.bind('success', function (event, xhr, item, response) {
        console.info('Success', xhr, item, response);
    });

    uploader.bind('cancel', function (event, xhr, item) {
        console.info('Cancel', xhr, item);
    });

    uploader.bind('error', function (event, xhr, item, response) {
        console.info('Error', xhr, item, response);
    });

    uploader.bind('complete', function (event, xhr, item, response) {
        console.info('Complete', xhr, item, response);
    });

    uploader.bind('progressall', function (event, progress) {
        console.info('Total progress: ' + progress);
    });

    uploader.bind('completeall', function (event, items) {

    });
});


app.controller('addNews',function($scope,$fileUploader,$routeParams,$resource,$route,$location){
    $scope.path = 'http://localhost:4321/#/newsAdmin/';// Путь который контролит данный обработчик--------------------------------------


    $scope.deleteTotalNews = function(news){
        var Todo = $resource('/deleteNewsTotal/'+news);
        var info = Todo.query();
        $route.reload();
    }

    //Post all data without picture--------------
    $scope.postDataOutOfFile = function(){
        var title = $scope.title;
        var about = $scope.about;
        var brief = $scope.brief;
        if(title && title!='Данное поле является обязательным!!!'){
            var inputTo = $resource('/postNewsOutOfFile');

            var input = new inputTo();
            input.title = title;
            input.about = about;
            input.brief = brief;

            input.$save();

            $route.reload();
        }else{
            $scope.title = 'Данное поле является обязательным!!!';
        }
    }


    var Todo = $resource('getNewsTotal');
    $scope.incomings = [];
    var info = Todo.query(function(){
        info.forEach(function(data){
            var incomeInfo = {};
            incomeInfo.title = data.news_name;
            incomeInfo.photo = data.news_photo;
            incomeInfo.about = data.news_about;
            incomeInfo.brief = data.news_brief;
            $scope.incomings.push(incomeInfo);
        });
    });





    //Photo uploader-----------------------------------------------------
    var uploader = $scope.uploader = $fileUploader.create({
        scope: $scope,
        url: 'addNews'
    });





    uploader.bind('beforeupload', function (event, item) {
        var title = $scope.title;
        var about = $scope.about;
        var brief = $scope.brief;
        var info = {title:title,about:about,brief:brief};
        item.formData.push(info);
    });
    uploader.bind('completeall', function (event, items) {
        $route.reload();
    });



    // ADDING FILTERS

    // Images only
    uploader.filters.push(function(item /*{File|HTMLInputElement}*/) {
        var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
        type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    });


    // REGISTER HANDLERS

    uploader.bind('afteraddingfile', function (event, item) {
        console.info('After adding a file', item);
    });

    uploader.bind('whenaddingfilefailed', function (event, item) {
        console.info('When adding a file failed', item);
    });

    uploader.bind('afteraddingall', function (event, items) {
        console.info('After adding all files', items);
    });

    uploader.bind('beforeupload', function (event, item) {
        console.info('Before upload', item);
    });

    uploader.bind('progress', function (event, item, progress) {
        console.info('Progress: ' + progress, item);
    });

    uploader.bind('success', function (event, xhr, item, response) {
        console.info('Success', xhr, item, response);
    });

    uploader.bind('cancel', function (event, xhr, item) {
        console.info('Cancel', xhr, item);
    });

    uploader.bind('error', function (event, xhr, item, response) {
        console.info('Error', xhr, item, response);
    });

    uploader.bind('complete', function (event, xhr, item, response) {
        console.info('Complete', xhr, item, response);
    });

    uploader.bind('progressall', function (event, progress) {
        console.info('Total progress: ' + progress);
    });

    uploader.bind('completeall', function (event, items) {

    });
});

app.controller('oneNews',function($scope,$fileUploader,$routeParams,$resource,$route,$location){
    var news = $routeParams.news;
    var Todo = $resource('/getNewsInfo/'+news);
    var info = Todo.query(function(){
        var data = info[0];
        $scope.newsTitle = data.news_name;
        $scope.newsAbout = data.news_about;
        $scope.newsTime = data.news_prepare;
        $scope.newsPhoto = data.news_photo;
        $scope.newsBrief = data.news_brief;
    });
    $scope.deletePic = function(pic){
        var toDo = $resource('/deleteNewsPicture/'+news+'/'+pic);
        var deleteStuf = toDo.query();
        $route.reload();
    };











    //Post all data without picture
    $scope.postDataOutOfFile = function(){
        var title = $routeParams.news;
        var about = $scope.about;
        var brief = $scope.brief;
        var inputTo = $resource('/postNewsDataOutOfFile');

        var input = new inputTo();
        input.title = title;
        input.about = about;
        input.brief = brief;

        input.$save();

        $route.reload();
    };

    ////Photo uploader------------------------------------------------------
    var uploader = $scope.uploader = $fileUploader.create({
        scope: $scope,
        url: 'addNewsPhoto'
    });





    uploader.bind('beforeupload', function (event, item) {
        var title = $routeParams.news;
        var about = $scope.about;
        var brief = $scope.brief;
        var info = {title:title,about:about,brief:brief};
        item.formData.push(info);
    });
    uploader.bind('completeall', function (event, items) {
        $route.reload();
    });



    // ADDING FILTERS

    // Images only
    uploader.filters.push(function(item) {
        var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
        type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    });


    // REGISTER HANDLERS

    uploader.bind('afteraddingfile', function (event, item) {
        console.info('After adding a file', item);
    });

    uploader.bind('whenaddingfilefailed', function (event, item) {
        console.info('When adding a file failed', item);
    });

    uploader.bind('afteraddingall', function (event, items) {
        console.info('After adding all files', items);
    });

    uploader.bind('beforeupload', function (event, item) {
        console.info('Before upload', item);
    });

    uploader.bind('progress', function (event, item, progress) {
        console.info('Progress: ' + progress, item);
    });

    uploader.bind('success', function (event, xhr, item, response) {
        console.info('Success', xhr, item, response);
    });

    uploader.bind('cancel', function (event, xhr, item) {
        console.info('Cancel', xhr, item);
    });

    uploader.bind('error', function (event, xhr, item, response) {
        console.info('Error', xhr, item, response);
    });

    uploader.bind('complete', function (event, xhr, item, response) {
        console.info('Complete', xhr, item, response);
    });

    uploader.bind('progressall', function (event, progress) {
        console.info('Total progress: ' + progress);
    });

    uploader.bind('completeall', function (event, items) {

    });
});

app.controller('addEvent',function($scope,$fileUploader,$routeParams,$resource,$route,$location){
        $scope.path = 'http://localhost:4321/#/eventsAdmin/';// Путь который контролит данный обработчик--------------------------------------


        $scope.deleteTotalEvent = function(photo){
            var Todo = $resource('/deleteEventTotal/'+photo);
            var info = Todo.query();
            $route.reload();
        }

        var Todo = $resource('getEventsTotal');
        $scope.incomings = [];
        var info = Todo.query(function(){
            info.forEach(function(data){
                var incomeInfo = {};
                incomeInfo.photo = data.event_photo;
                $scope.incomings.push(incomeInfo);
            });
        });





        //Photo uploader-----------------------------------------------------
        var uploader = $scope.uploader = $fileUploader.create({
            scope: $scope,
            url: 'addEvent'
        });





        uploader.bind('beforeupload', function (event, item) {
        });
        uploader.bind('completeall', function (event, items) {
            $route.reload();
        });



        // ADDING FILTERS

        // Images only
        uploader.filters.push(function(item /*{File|HTMLInputElement}*/) {
            var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
            type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        });


        // REGISTER HANDLERS

        uploader.bind('afteraddingfile', function (event, item) {
            console.info('After adding a file', item);
        });

        uploader.bind('whenaddingfilefailed', function (event, item) {
            console.info('When adding a file failed', item);
        });

        uploader.bind('afteraddingall', function (event, items) {
            console.info('After adding all files', items);
        });

        uploader.bind('beforeupload', function (event, item) {
            console.info('Before upload', item);
        });

        uploader.bind('progress', function (event, item, progress) {
            console.info('Progress: ' + progress, item);
        });

        uploader.bind('success', function (event, xhr, item, response) {
            console.info('Success', xhr, item, response);
        });

        uploader.bind('cancel', function (event, xhr, item) {
            console.info('Cancel', xhr, item);
        });

        uploader.bind('error', function (event, xhr, item, response) {
            console.info('Error', xhr, item, response);
        });

        uploader.bind('complete', function (event, xhr, item, response) {
            console.info('Complete', xhr, item, response);
        });

        uploader.bind('progressall', function (event, progress) {
            console.info('Total progress: ' + progress);
        });

        uploader.bind('completeall', function (event, items) {

        });
});
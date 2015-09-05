var view = {
    width: 0,
    height: 0,
    speed: 1500,
    left: 1,
    top: 1,
    obtianWindowSize: function() {
        view.width = $(window).width();
        view.height = $(window).height();
    },
    initializeDiv: function() {
        $('.matrix-row').css('width', 3 * view.width);
        $('.matrix-col').css('width', view.width).css('height', view.height);
        $('.container').scrollTop(view.height).scrollLeft(view.width);
    },
    initializeNavButtons: function() {
        var topButton = $('#top-button');
        var rightButton = $('#right-button');
        var bottomButton = $('#bottom-button');
        var leftButton = $('#left-button');
        var container = $('#main-container');
        var card = $('.card');
        var timeline = $('.timelinest');

        topButton.on('click', function() {
            view.top = (view.top === 0 || view.left !== 1) ? view.top : view.top - 1;
            container.animate({
                scrollTop: view.top * view.height
            }, {
                duration: view.speed,
                easing: 'easeOutExpo'
            });
            view.controlButtons();
        });
        rightButton.on('click', function() {
            view.left = (view.left === 2 || view.top !== 1) ? view.left : view.left + 1;
            container.animate({
                scrollLeft: view.left * view.width
            }, {
                duration: view.speed,
                easing: 'easeOutExpo',
                complete: function() {
                    if (card.hasClass('flip')) {
                        card.removeClass('flip');
                    }
                    timeline.load('../images/timeline.svg', function(response) {
                        $(this).addClass("svgLoaded");
                        if (!response) {
                            // 加载失败的处理代码
                            console.log('error');
                        }
                    });
                }
            });
            view.controlButtons();
        });
        bottomButton.on('click', function() {
            view.top = (view.top === 2 || view.left !== 1) ? view.top : view.top + 1;
            container.animate({
                scrollTop: view.top * view.height
            }, {
                duration: view.speed,
                easing: 'easeOutExpo'
            });
            view.controlButtons();
        });
        leftButton.on('click', function() {
            view.left = (view.left === 0 || view.top !== 1) ? view.left : view.left - 1;
            container.animate({
                scrollLeft: view.left * view.width
            }, {
                duration: view.speed,
                easing: 'easeOutExpo',
                complete: function() {
                    if (!card.hasClass('flip')) {
                        card.addClass('flip');
                    }
                    if (timeline.hasClass('svgLoaded')) {
                        $('.svgLoaded svg').remove();
                        timeline.removeClass('svgLoaded');
                    }
                },
            });
            view.controlButtons();
        });
    },
    controlButtons: function() {
        var topButton = $('#top-button');
        var rightButton = $('#right-button');
        var bottomButton = $('#bottom-button');
        var leftButton = $('#left-button');
        //page 1
        if (view.left === 1 && view.top === 0) {
            topButton.hide();
            rightButton.hide();
            leftButton.hide();
            bottomButton.show();
            bottomButton.find('h3').html('Home');
            bottomButton.find('.icon').css('fill','#facb33');
        }
        //page 2
        if (view.left === 0 && view.top === 1) {
            topButton.hide();
            rightButton.show();
            leftButton.hide();
            bottomButton.hide();
            rightButton.find('h3').html('Home');
            rightButton.find('.icon').css('fill','#e56292');
        }
        //page 3
        if (view.left === 1 && view.top === 1) {
            topButton.show();
            rightButton.show();
            leftButton.show();
            bottomButton.show();
            topButton.find('h3').html('Blog');
            rightButton.find('h3').html('About Me');
            leftButton.find('h3').html('Contact');
            bottomButton.find('h3').html('Project');
            topButton.find('.icon').css('fill','#2e2f34');
            leftButton.find('.icon').css('fill','#2e2f34');
            rightButton.find('.icon').css('fill','#2e2f34');
            bottomButton.find('.icon').css('fill','#2e2f34');
        }
        //page 4
        if (view.left === 2 && view.top === 1) {
            topButton.hide();
            rightButton.hide();
            leftButton.show();
            bottomButton.hide();
            leftButton.find('h3').html('Home');
            leftButton.find('.icon').css('fill','#2c5379');
        }
        //page 5
        if (view.left === 1 && view.top === 2) {
            topButton.show();
            rightButton.hide();
            leftButton.hide();
            bottomButton.hide();
            topButton.find('h3').html('Home');
            topButton.find('.icon').css('fill','#48a075');
        }
    },
    initializeThumbnailButton: function() {
        var thumbnails = $('.matrix-thumbnails');
        var button = $('.nav a');
        var main_container = $('#main-container');
        var thumbnails_bg = $('.matrix-thumbnails-backgd');

        button.on('click',function(){
            thumbnails.show();
            thumbnails_bg.show();
        });

        thumbnails.on('click',function() {
            thumbnails.hide();
            thumbnails_bg.hide();
        });
    },
    resize: function() {
        $(window).resize(function() {
            view.obtianWindowSize();
            view.initializeDiv();
        });
    },
    onloadAnimation: function() {
        var centerBg = $('.center-bg');
        var centerTitle = $('.center-title');

        centerBg.addClass('center-bg-scaled');
        centerTitle.addClass('center-title-animation');
    },
    initialize: function() {
        view.obtianWindowSize();
        view.initializeDiv();
        view.onloadAnimation();
        view.initializeNavButtons();
        //view.initializeKeyBoard();
        view.initializeThumbnailButton();
        view.resize();
    }
};
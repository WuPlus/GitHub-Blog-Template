var view = {
    width: 0,
    height: 0,
    speed: 1500,
    page: 'front',
    $cube: $('#cube'),
    leftPage: {
        card: $('.card'),
    },
    rightPage: {

    },
    rotatePage: {
        rotateLeft: function() {
            view.$cube.css('transform', 'translateZ(-' + view.width / 2 + "px) rotateY(90deg)");
            view.page = 'left';
            if (!view.leftPage.card.hasClass('flip')) {
                view.leftPage.card.addClass('flip');
            }
        },
        rotateRight: function() {
            view.$cube.css('transform', 'translateZ(-' + view.width / 2 + "px) rotateY(-90deg)");
            view.page = 'right';
            if (view.leftPage.card.hasClass('flip')) {
                view.leftPage.card.removeClass('flip');
            }
        },
        rotateTop: function() {
            view.$cube.css('transform', 'translateY(-' + Math.abs(view.width - view.height) / 2 + 'px) translateZ(-' + view.height / 2 + "px) rotateX(-90deg)");
            view.page = 'top';
        },
        rotateFront: function() {
            view.$cube.css('transform', 'translateZ(-' + view.width / 2 + "px) rotateY(0deg)");
            view.page = 'front';
            if (view.leftPage.card.hasClass('flip')) {
                view.leftPage.card.removeClass('flip');
            }
        },
        rotateBottom: function() {
            view.$cube.css('transform', 'translateY(' + Math.abs(view.width - view.height) / 2 + 'px) translateZ(-' + view.height / 2 + "px) rotateX(90deg)");
            view.page = 'bottom';
        }
    },
    obtianWindowSize: function() {
        view.width = $(window).width();
        view.height = $(window).height();
    },
    initializeDiv: function() {
        view.page = 'front';
        var $cubeFront = $('.matrix-col-front');
        var $cubeLeft = $('.matrix-col-left');
        var $cubeRight = $('.matrix-col-right');
        var $cubeTop = $('.matrix-col-top');
        var $cubeBottom = $('.matrix-col-bottom');
        $('.matrix-col').css('width', view.width).css('height', view.height);
        view.$cube.css('transform', 'translateZ(-' + view.width / 2 + "px)");
        $cubeFront.css('transform', "rotateY(0deg) translateZ(" + view.width / 2 + "px)");
        $cubeLeft.css('transform', "rotateY(-90deg) translateZ(" + view.width / 2 + "px)");
        $cubeRight.css('transform', "rotateY(90deg) translateZ(" + view.width / 2 + "px)");
        $cubeTop.css('transform', 'rotateX(90deg) translateZ(' + view.height / 2 + 'px) translateY(' + Math.abs(view.width - view.height) / 2 + 'px)');
        $cubeBottom.css('transform', 'rotateX(-90deg) translateZ(' + view.height / 2 + 'px) translateY(-' + Math.abs(view.width - view.height) / 2 + 'px)');
    },
    initialize3DNavButtons: function() {
        var $topButton = $('#top-button');
        var $rightButton = $('#right-button');
        var $bottomButton = $('#bottom-button');
        var $leftButton = $('#left-button');

        $topButton.on('click', function() {
            if (view.page === 'bottom') {
                view.rotatePage.rotateFront();
            } else {
                view.rotatePage.rotateTop();
            }
            view.controlButtons();
        });
        $rightButton.on('click', function() {
            if (view.page === 'left') {
                view.rotatePage.rotateFront();
            } else {
                view.rotatePage.rotateRight();
            }
            view.controlButtons();
        });
        $bottomButton.on('click', function() {
            if (view.page === 'top') {
                view.rotatePage.rotateFront();
            } else {
                view.rotatePage.rotateBottom();
            }
            view.controlButtons();
        });
        $leftButton.on('click', function() {
            if (view.page === 'right') {
                view.rotatePage.rotateFront();
            } else {
                view.rotatePage.rotateLeft();
            }
            view.controlButtons();
        });
    },
    controlButtons: function() {
        var topButton = $('#top-button');
        var rightButton = $('#right-button');
        var bottomButton = $('#bottom-button');
        var leftButton = $('#left-button');
        //page 1
        if (view.page === 'top') {
            topButton.hide();
            rightButton.hide();
            leftButton.hide();
            bottomButton.show();
            bottomButton.find('h3').html('Home');
            bottomButton.find('.icon').css('fill', '#facb33');
        }
        //page 2
        if (view.page === 'left') {
            topButton.hide();
            rightButton.show();
            leftButton.hide();
            bottomButton.hide();
            rightButton.find('h3').html('Home');
            rightButton.find('.icon').css('fill', '#e56292');
        }
        //page 3
        if (view.page === 'front') {
            topButton.show();
            rightButton.show();
            leftButton.show();
            bottomButton.show();
            topButton.find('h3').html('Blog');
            rightButton.find('h3').html('About Me');
            leftButton.find('h3').html('Contact');
            bottomButton.find('h3').html('Project');
            topButton.find('.icon').css('fill', '#2e2f34');
            leftButton.find('.icon').css('fill', '#2e2f34');
            rightButton.find('.icon').css('fill', '#2e2f34');
            bottomButton.find('.icon').css('fill', '#2e2f34');
        }
        //page 4
        if (view.page === 'right') {
            topButton.hide();
            rightButton.hide();
            leftButton.show();
            bottomButton.hide();
            leftButton.find('h3').html('Home');
            leftButton.find('.icon').css('fill', '#2c5379');
        }
        //page 5
        if (view.page === 'bottom') {
            topButton.show();
            rightButton.hide();
            leftButton.hide();
            bottomButton.hide();
            topButton.find('h3').html('Home');
            topButton.find('.icon').css('fill', '#48a075');
        }
    },
    initializeThumbnailButton: function() {
        var thumbnails = $('.matrix-thumbnails');
        var button = $('.nav a');
        var main_container = $('#main-container');
        var thumbnails_bg = $('.matrix-thumbnails-backgd');
        var thumbnail_top = $('.thumbnail-top');
        var thumbnail_left = $('.thumbnail-left');
        var thumbnail_center = $('.thumbnail-center');
        var thumbnail_right = $('.thumbnail-right');
        var thumbnail_bottom = $('.thumbnail-bottom');
        var discard = function() {
            thumbnail_top.removeClass('complete');
            thumbnail_left.removeClass('complete');
            thumbnail_right.removeClass('complete');
            thumbnail_.removeClass('complete');
        };

        button.on('click', function() {
            thumbnails.css('visibility', 'visible');
            thumbnails_bg.show();
            thumbnail_top.addClass('complete');
            thumbnail_left.addClass('complete');
            thumbnail_right.addClass('complete');
            thumbnail_bottom.addClass('complete');
        });

        thumbnails.on('click', function() {
            thumbnails.css('visibility', 'hidden');
            thumbnails_bg.hide();
            discard();
        });

        thumbnail_top.on('click', function(e) {
            view.rotatePage.rotateTop();
            view.controlButtons();
        });

        thumbnail_left.on('click', function(e) {
            view.rotatePage.rotateLeft();
            view.controlButtons();
        });

        thumbnail_center.on('click', function(e) {
            view.rotatePage.rotateFront();
            view.controlButtons();
        });

        thumbnail_right.on('click', function(e) {
            view.rotatePage.rotateRight();
            view.controlButtons();
        });

        thumbnail_bottom.on('click', function(e) {
            view.rotatePage.rotateBottom();
            view.controlButtons();
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
        //view.initializeNavButtons();
        view.initialize3DNavButtons();
        //view.initializeKeyBoard();
        view.initializeThumbnailButton();
        view.resize();
    }
};
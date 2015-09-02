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

        topButton.on('click', function() {
            container.animate({
                scrollTop: 0
            }, view.speed);
        });
        rightButton.on('click', function() {
            container.animate({
                scrollLeft: 2 * view.width
            }, view.speed);
        });
        bottomButton.on('click', function() {
            container.animate({
                scrollTop: 2 * view.height
            }, view.speed);
        });
        leftButton.on('click', function() {
            container.animate({
                scrollLeft: 0
            }, view.speed);
            card.addClass('flip');
        });
    },
    initializeKeyBoard: function() {
        var container = $('#main-container');
        var card = $('.card');
        var timeline = $('.timelinest');

        $(document).on('keydown', function(e) {
            var x = e.which || e.keyCode;
            switch (x) {
                //up
                case 38:
                    view.top = (view.top === 0 || view.left !== 1) ? view.top : view.top - 1;
                    container.animate({
                        scrollTop: view.top * view.height
                    }, {
                        duration: view.speed,
                        easing: 'easeOutExpo'
                    });
                    break;
                case 37:
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
                        },
                    });
                    break;
                case 40:
                    view.top = (view.top === 2 || view.left !== 1) ? view.top : view.top + 1;
                    container.animate({
                        scrollTop: view.top * view.height
                    }, {
                        duration: view.speed,
                        easing: 'easeOutExpo'
                    });
                    break;
                case 39:
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
                            timeline.load('../images/draw.svg', function(response) {
                                $(this).addClass("svgLoaded");
                                if (!response) {
                                    // 加载失败的处理代码
                                    console.log('error');
                                }
                            });
                        }
                    });
                    break;
            }
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
        view.initializeKeyBoard();
        view.resize();
    }
};
var view = {
    width: 0,
    height: 0,
    speed: '4000',
    obtianWindowSize: function() {
        view.width = $(window).width();
        view.height = $(window).height();
    },
    initializeDiv: function() {
        $('.row').css('width', 3 * view.width);
        $('.col').css('width', view.width).css('height', view.height);
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
        });
    },
    resize: function() {
		$(window).resize(function(){
			view.obtianWindowSize();
			view.initializeDiv();
		});
    },
    initialize: function() {
        view.obtianWindowSize();
        view.initializeDiv();
        view.initializeNavButtons();
        view.resize();
    }
};
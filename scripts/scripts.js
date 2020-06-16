
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
        $('#mycarousel').carousel({interval:2000});
        
        $('#carousel-pause-section').show();
        $('#carousel-play-section').hide();

        $('#carousel-pause').click(function(){
            $('#carousel-pause-section').hide();
            $('#carousel-play-section').show();
            $('#mycarousel').carousel('pause');
        });
        $('#carousel-play').click(function(){
            $('#carousel-pause-section').show();
            $('#carousel-play-section').hide();
            $('#mycarousel').carousel('cycle');
        });

        $('#openReserveModal').click(function(){
            $('#reserveModal').modal('show');
            console.log("hello There");
        });
        $('#openLoginModal').click(function(){
            $('#loginModal').modal('show');
            console.log("general Kenobi");
        });
    });


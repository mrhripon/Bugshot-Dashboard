(function ($) {
    "use strict";

    // Script for OffCanvas Menu Activation
    $(document).ready(function () {
        $('.trigger-btn').on('click', function () {
            $('.second-sidebar').toggleClass('show');
            $('.main-content-wrap.type-2').toggleClass('translate');
            $(this).toggleClass('rotate');
        })

        $('.setting-pane-cls').on('click', function(){
            $('.second-sidebar').removeClass('show');
        })

        
        // Script for Setting sidebar

        $('.u-setting').on('click', function(e){
            e.preventDefault();
            $('.setting-left-pane').toggleClass('show');
        })
        $('.setting-pane-cls').on('click', function(){
            $('.setting-left-pane').removeClass('show');
        })

        $('.hd-m-search').on('click', function(){
            $('.mobile-search-box').addClass('show');
        })
        $('.cls-m-search').on('click', function(){
            $('.mobile-search-box').removeClass('show');
        })

        // Script for Fixed Sidebar
        function clickU(){
            var hide = true;
            $('.sp-class').on('click', function(){
            if(hide) $('.task-details-fixed-bar').removeClass('show');
                hide = true;
            })

            document.addEventListener('click', function(e){
                if(e.target.parentElement.className == 'close-task-details-bar') {
                    $('.task-details-fixed-bar').removeClass('show');
                } else {
                    $('.sp-class').on('click','.single-task-wrap, .task-details-fixed-bar, .banner-slider-wrapper', function(){
                        var self = $('.task-details-fixed-bar');

                        $('.task-details-fixed-bar').removeClass('show');
                        $('.task-details-fixed-bar').toggleClass('show');
                        hide = false;
                    })
                }

            })  
        }
        clickU();

        // Script for fixed sidebar 
        $('#add-member').on('click', function(){
            $('#user-adding-wrap').addClass('show');
            $('body').addClass('overlay');
        })
        $('#cls-add-member-pop').on('click', function(){
            $('#user-adding-wrap').removeClass('show');
            $('body').removeClass('overlay');
        })

        // script for set Reminder

        $('#set-reminder input[type="checkbox"]').on('click', function(e){
            if(e.target.checked) {
                $('.reminder-selction').slideDown();
            } else {
                $('.reminder-selction').slideUp();
            }
        })



        $('#date-window').on('click', function(){
            $('#date-adding-wrap').addClass('show');
            $('body').addClass('overlay');
        })
        $('#cls-add-member-pop-for-date').on('click', function(){
            $('#date-adding-wrap').removeClass('show');
            $('body').removeClass('overlay');
        })



        // script for header filter
        $('.filter-button').on('click', function(e){
            $(this).toggleClass('active');
            $('#filter-dropdown').slideToggle();
        })



        // script for add new card 
        $('#add-card').on('click', function(e){
            e.preventDefault();
            $('#add-new-card').addClass('show');
            $('#default-card').addClass('hide');
        })

        $('#cancle-new-card').on('click', function(e){
            e.preventDefault();
            $('#add-new-card').removeClass('show');
            $('#default-card').removeClass('hide');
        })


        // script for add account card for setting-account page 

        $('#add-ac-card').on('click', function(e){
            e.preventDefault();
            $('#adding-card-ui').addClass('show');
            $('#default-ui').addClass('hide');
            document.querySelector('.p-s-c-title').textContent = "Add new credit card";
            document.querySelector('#p-s-card .emoji-img img').src = 'assets/img/card-3.png';
        })

        $('#cancel-ui-card').on('click', function(e){
            e.preventDefault();
            $('#adding-card-ui').removeClass('show');
            $('#default-ui').removeClass('hide');
            document.querySelector('.p-s-c-title').textContent = "Payment methods";
            document.querySelector('#p-s-card .emoji-img img').src = 'assets/img/emoji.svg';
        })


    // script for invite people 
    function invitePeople(){
        var content;
        if(document.getElementById('inv-people') !== null) {
            
            document.getElementById('inv-people').addEventListener('click', function(e){
                e.preventDefault();
                this.classList.toggle('is-open');
            content = document.querySelector('.invite-rw-wrap');
                if (content.style.maxHeight) {
                // accordion is currently open, so close it
                content.style.maxHeight = null;
                } else {
                // accordion is currently closed, so open it
                content.style.maxHeight = content.scrollHeight + "px";
                }
            })
        }
        

        $('.del-inv-rw').on('click', function(e){
                e.preventDefault();
                content.style.maxHeight = null;
            })
        $('.in-inv-rw a').on('click', function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    invitePeople();
    

    






    })

// Script for Slick Slider Activation
$(".banner-slider-active").on("init reInit afterChange", function(event, slick) {
    $(".slider-counter-wrap").html(
        slick.slickCurrentSlide() + 1 + " of " + slick.slideCount
    );
});
$('.banner-slider-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.js-lf',
    nextArrow: '.js-lr'
});



    // Script for Slick Slider Activation
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })


    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });

    // script for banner 
    $(document).ready(function () {
        $('#banner-slider').on('click', function(e){
            e.preventDefault();
            $('.banner-slider-wrapper').addClass('active');
            $('body').addClass('overlay-2');
        })
        $('#cls-banner').on('click', function(e){
            e.preventDefault();
            $('.banner-slider-wrapper').removeClass('active');
            $('body').removeClass('overlay-2');
        })

        $('.annotation-btn').on('click', function(){
            $('.banner-item-content').toggleClass('not-blur');
            if(this.textContent == 'Hide annotations') {
                $(this).text('Show annotations');
            } else {
                $(this).text('Hide annotations');
            }
            
            
        })
    });


    var allInput = document.querySelectorAll('.input-inside input');
    allInput.forEach(function(each){
        each.onfocus = function(){
            this.onblur = function() {
                if(this.value) {
                    this.nextElementSibling.style.display = 'none';
                } else {
                    this.nextElementSibling.style.display = 'block'; 
                }
            }   
        }
    })
    



    function copyhtml(markupParent, btnId) {
        let targetBtn = document.querySelector(btnId);
        targetBtn.addEventListener('click', function(){
            this.innerHTML = "copied!";
            let textarea,
                targetParent = document.querySelector(markupParent),
                targetContent = targetParent.innerHTML;
            
            textarea = targetParent.appendChild(document.createElement('textarea'));
            textarea.value = targetContent;
            textarea.select();
            document.execCommand("copy");
            setTimeout((function(){
                textarea.parentNode.removeChild(textarea);
            })(), 10)

        }) 
    }
if(document.getElementById('copy-script') !== null) {
    copyhtml('#script-wrap', '#copy-script');
}
    



    







    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })


    Util.cModal('#m-open','#c-modal-one', '.cls-modal')



  
})(jQuery);	 // End line
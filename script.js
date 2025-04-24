$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            function getRandomColor() {
                return '#' + Math.floor(Math.random() * 16777215).toString(16);
            }

            $('.navbar').css("background-color", getRandomColor());

        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar').css("background-color", "transparent"); 
        }
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault(); 
    
        var name = document.getElementById('name');
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message');
    
        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert("All fields must be filled.");
            return false;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        // If everything is good
        alert("Message sent successfully!");
        this.reset(); 
        return true;
    });
});

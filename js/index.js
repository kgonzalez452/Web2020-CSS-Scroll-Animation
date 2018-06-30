window.onscroll = function (e) {
    if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {

        // changes the background position of the sprite
        document.getElementById("sprite").style.backgroundPosition = '0px 0px';
        document.getElementById("sprite").style.marginBottom = '50%';
    }

    if (document.body.scrollTop > 200 && document.body.scrollTop < 400 ||
        document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 400) {

        console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

        // changes the background position of the sprite
        document.getElementById("sprite").style.backgroundPosition = '-83.5px 0px';
        document.getElementById("sprite").style.marginBottom = '50%';
    }

    if (document.body.scrollTop > 400 && document.body.scrollTop < 800 ||
        document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 800) {

        console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

        // changes the background position of the sprite
        document.getElementById("sprite").style.backgroundPosition = '-167px 0px';
        document.getElementById("sprite").style.marginBottom = '50%';
    }

    if (document.body.scrollTop > 800 && document.body.scrollTop < 1000 ||
        document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 1000) {

        console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);

        // changes the background position of the sprite
        document.getElementById("sprite").style.backgroundPosition = '-250.5px 0px';
        document.getElementById("sprite").style.marginBottom = '50%';
    }
    
    if (document.body.scrollTop > 1000 && document.body.scrollTop < 1100 ||
        document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1100) {
            
            console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
            
            // changes the background position of the sprite
            document.getElementById("sprite").style.backgroundPosition = '-334px 0px';
            document.getElementById("sprite").style.marginBottom = '10%';
        }
        

     else if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1117) {
        console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
        document.getElementById("sprite").style.backgroundPosition = '-332px 0px';
        document.getElementById("sprite").style.marginBottom = '200px';
    }
}
/**
 * Created by odintree on 22.02.17.
 */
function textCounter(field,field2,maxlimit)
{
    var countfield = document.getElementById(field2);
    if ( field.value.length > maxlimit ) {
        field.value = field.value.substring( 0, maxlimit );
        return false;
    } else {
        countfield.value = maxlimit - field.value.length;
    }
}


$('.asdffastlink').bind('click', function(e) {
    var url = $(this).attr('href');
    processAjaxData(url);

    e.preventDefault(); // stop the browser from following the link
});
$('#sawesome-sidemenu a').bind('click', function(e) {
    var url = $(this).attr('href');
    processAjaxData(url);


    e.preventDefault(); // stop the browser from following the link
});
function processAjaxData(urlPath){
    var response = 1;
    document.getElementById("mainbody").innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
}
window.onpopstate = function(e){
    if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};

jQuery(function() {
    //jQuery('#showall').click(function(){
    //     jQuery('.targetDiv').show();
    //});
    jQuery('.buttons a').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');

        $(this).addClass('selected').siblings().removeClass('selected');


        var target = $(this).data('target');
        if (target === 'all') {
            jQuery('.targetDiv').show();
        } else {
            jQuery('.targetDiv').hide();



            jQuery('#deliveryoption').val(target);

            jQuery('#div' + target).fadeIn( "fast", function() {
                // Animation complete
            });
            ;
        }

        if(target === 2){
            jQuery('#div4').hide();
        }
    });
});
jQuery(function() {
    //jQuery('#showall').click(function(){
    //     jQuery('.targetDiv').show();
    //});
    jQuery('.buttonsgo a').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');

        $(this).addClass('selected').siblings().removeClass('selected');


        var target = $(this).data('target');
        if (target === 'all') {
            jQuery('.targetDiv2').css("left","-9999px");
            jQuery('.targetDiv2').css("position","");
            jQuery('.targetDiv2').css("display","none");


            jQuery('.targetDiv2').show();
            load();


        } else {
            jQuery('.targetDiv2').hide();

            jQuery('.targetDiv2').css("left","");
            jQuery('.targetDiv2').css("position","");
            jQuery('.targetDiv2').css("display","blocked");


            jQuery('#div' + target).fadeIn( "fast", function() {
                // Animation complete
            });
            ;

            load();
        }



    });



});

$('#tableSelect tr').click(function() {
    $(this).find('td input:radio').prop('checked', true);
})

function myFunction(name)
{
    document.getElementById("peep").innerHTML =  '<img src="images/accepted_48.png">'+name;
}

var elementExists = document.getElementById("showRight");

if(elementExists){

    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeft = document.getElementById( 'showLeft' ),
        showRight = document.getElementById( 'showRight' ),
        showTop = document.getElementById( 'showTop' ),
        showBottom = document.getElementById( 'showBottom' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;


    showRight.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRight' );
    };

    showRightClose.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRight' );
    };
}


function disableOther( button ) {

    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }

}



function clearText(field){
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;

}


function clickclear(thisfield, defaulttext) {
    if (thisfield.value == defaulttext) {
        thisfield.value = "";
    }
}
function clickrecall(thisfield, defaulttext) {
    if (thisfield.value == "") {
        thisfield.value = defaulttext;
    }
}

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}


function whatcvc(){
    Shadowbox.open({
        player: "html",
        title: "",
        content: '<div style="background-color:white;"><img src="images/whatcvc.jpg"></div>',
        height: 625,
        width: 700
    });
}



function validateForm()
{

    $(".formContainer input[type=text]").each(function(){
        var text = $(this).attr("value");

        if (text == "")
        {
            $(this).parent().find(".error2").css("display", "block");
            x=x+1;
        }
    });

    if(x == 0)
    {
        document.getElementById("signupform").submit();
    }

}

function clearForm()
{
    $(".formContainer input[type=text]").each(function(){
        $(this).parent().find(".error2").css("display", "none");
    });
}


/*
 Masked Input plugin for jQuery
 Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.3
 */
(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery)



/* jQuery showPassword Plugin Version 1.0
 * @author Byron Rode
 * @website http://www.prothemer.com/blog/2009/07/02/new-jquery-plugin-targeting-usability-for-password-masking-on-forms
 * @requires jQuery v1.3.x
 * @license GPL/MIT
 */
;(function($){$.fn.showPassword=function(ph,options){var spinput=$(this);$.fn.showPassword.checker=function(cbid,inid){$('input[id="'+cbid+'"]').click(function(){if($(this).attr('checked')){$('input.'+inid).val(spinput.val()).attr('id',spinput.attr('id')).attr('name',spinput.attr('name'));$('input.'+inid).css('display','inline');spinput.css('display','none').removeAttr('id').removeAttr('name');}else{spinput.val($('input.'+inid).val()).attr('id',$('input.'+inid).attr('id')).attr('name',$('input.'+inid).attr('name'));spinput.css('display','inline');$('input.'+inid).css('display','none').removeAttr('id').removeAttr('name');}});}
    return this.each(function(){var def={classname:'class',name:'password-input',text:'Show Password'};var spcbid='spcb_'+parseInt(Math.random()*1000);var spinid=spcbid.replace('spcb_','spin_');if(spinput.attr('class')!==''){var spclass=spinid+' '+spinput.attr('class');}else{var spclass=spinid;}if(typeof ph=='object'){$.extend(def,ph);}if(typeof options=='object'){$.extend(def,options);}var spname=def.name;if(def.classname==''){theclass='';}else{theclass=' class="'+def.clasname+'"';}$(this).before('<input type="text" value="" class="'+spclass+'" style="display: none;" />');var thecheckbox='<label><input'+theclass+' type="checkbox" id="'+spcbid+'" name="'+spname+'" value="sp" />'+def.text+'</label>';if(ph=='object'||typeof ph=='undefined'){$(this).after(thecheckbox);}else{$(ph).html(thecheckbox);}$.fn.showPassword.checker(spcbid,spinid);return this;});}})(jQuery);


/*
 * Image preview script
 * powered by jQuery (http://www.jquery.com)
 *
 * written by Alen Grakalic (http://cssglobe.com)
 *
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.imagePreview = function(){
    /* CONFIG */

    xOffset = 10;
    yOffset = 10;

    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result

    /* END CONFIG */
    $("a.preview").hover(function(e){
            this.t = this.title;
            this.title = "";
            var c = (this.t != "") ? "<br/>" + this.t : "";
            $("body").append("<p id='preview'><img src='images/what-cvc.jpg' alt='what is a cvc' />"+ c +"</p>");
            $("#preview")
                .css("top",(e.pageY - xOffset) + "px")
                .css("left",(e.pageX + yOffset) + "px")
                .fadeIn("fast");
        },
        function(){
            this.title = this.t;
            $("#preview").remove();
        });
    $("a.preview").mousemove(function(e){
        $("#preview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
};




$(document).ready(function(){
    $('#togglecontrol').click(function(){
        $('#toggle').toggle();
    });

    setTimeout(function(){

        $("#message_box").slideUp('slow', function() {$(this).height(0);});
    },3000)



    setTimeout(function(){

        $("#message-green").slideUp('slow', function() {$(this).height(0);});


    },3000)

});




// sign up form stuff
/**/

$(document).ready(function(){
    $(".formContainer input[type=text]").focus(function(){
        /* $(this).parent().find(".error").css("display", "none"); */
        $(this).parent().find(".info").css("display", "block");
    }).blur(function(){
        $(this).parent().find(".info").css("display", "none");
    });



});
/**/



/*

 show credit card type when user finishes on sign up page


 */
$(document).ready(function () {
    var CardIssuers = new function() {
        var issuerInput = $("#cardIssuer");

        function cardIssuer(name, pattern, logo) {
            this.Name = name;
            this.Logo = logo;
            this.Pattern = pattern;
        };

        var issuers = new Array (
            new cardIssuer("amex", /^3[47][0-9]{13}$/, $(".amexLogo")),
            new cardIssuer("visa", /^4[0-9]{12}(?:[0-9]{3})?$/, $(".visaLogo")),
            new cardIssuer("mastercard", /^5[1-5][0-9]{14}$/, $(".mastercardLogo")),
            new cardIssuer("discover", /^6(?:011|5[0-9]{2})[0-9]{12}$/, $(".discoverLogo"))
        );

        function resetIssuer() {
            issuerInput.attr("disabled", "disabled");
            issuerInput.val("");

            for (issuer in issuers) {
                issuers[issuer].Logo.css({opacity: 0.25});
            }
        };

        function validateLuhnChecksum(cardNumber) {
            var sum = 0;
            var mul = 1;

            for (var x = cardNumber.length; x > 0 ; x--) {
                var tproduct = parseInt(cardNumber.charAt(x - 1), 10) * mul;
                if (tproduct >= 10)
                    sum += (tproduct % 10) + 1;
                else
                    sum += tproduct;

                if (mul == 1)
                    mul++;
                else
                    mul--;
            }

            return ((sum % 10) == 0);
        }

        var ValidateNumber = function(cardNumber) {
            resetIssuer();

            if (!validateLuhnChecksum(cardNumber))
                return false;

            for (issuer in issuers) {
                if (issuers[issuer].Pattern.test(cardNumber)) {
                    issuers[issuer].Logo.css({opacity: 1.0});
                    issuerInput.val(issuers[issuer].Name);
                    return true;
                }
            }

            return false;
        };

        resetIssuer();
        return { ValidateNumber : ValidateNumber };
    }

    $("#ccNumber").bind("change keyup", function() {
        CardIssuers.ValidateNumber($(this).val());
    });
});


/*

 add a mask to certain parts of signup page
 $("#zip_code").mask("99999");
 */
$(document).ready(function(){
    $("#phone_number").mask("(999) 999-9999");
});

/*

 mask/unmask the password field

 */
$(document).ready(function(){
    // $('#pass1').showPassword();
    $('#pass1').showPassword('.checker', { text: '&nbsp;&nbsp;Check Password', name: 'showmypass' });

});




// image preview tooltip
$(document).ready(function(){
    imagePreview();
});



$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() {
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

$(function() {
    var button = $('#cartButton');
    var box = $('#cartBox');
    var form = $('#cartForm');
    button.removeAttr('href');
    button.mouseup(function(cart) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() {
        return false;
    });
    $(this).mouseup(function(cart) {
        if(!($(cart.target).parent('#cartButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
/*
 $('#slideshow-div').rsfSlideshow({
 controls: {
 playPause: {auto: true},    //    auto-generate a play/pause control
 previousSlide: {auto: true},    //    auto-generate a "previous slide" control
 nextSlide: {auto: true},    //    auto-generate a "next slide" control
 index: {auto: true}    //    auto-generate a numbered index control
 }
 });	 */


$(window).load(function() {

    var theWindow        = $(window),
        $bg              = $("#bg"),
        aspectRatio      = $bg.width() / $bg.height();

    function resizeBg() {

        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg
                .removeClass()
                .addClass('bgheight');
        } else {
            $bg
                .removeClass()
                .addClass('bgwidth');
        }

    }

    theWindow.resize(function() {
        resizeBg();
    }).trigger("resize");

});

jQuery(document).ready(function() {
    jQuery('#awesome-menu > li').removeClass('noJs');

    jQuery('#awesome-menu > li').hover(function() {
        jQuery(this).find('ul').stop(true, true).slideDown('fast');
    }, function() {
        jQuery(this).find('ul').stop(true, true).fadeOut('fast');
    });
});

if ($(".dropdown-toggle")[0]){
    $(function() {
        // Setup drop down menu
        $('.dropdown-toggle').dropdown();

        // Fix input element click problem
        $('.dropdown input, .dropdown label').click(function(e) {
            e.stopPropagation();
        });
    });
}




Shadowbox.init();

$('#fat-btn')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 30000)
    });

// button state demo
$('#headerloginsubmit')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 30000)
    });

// button state demo
$('#fat-btn2')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        anchor.data("disabled", "disabled");
        setTimeout(function () {
            btn.button('reset')
        }, 30000)
    });

// Sign up page, step 2



// Sign up page, step 2
$('#signupstep2')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        btn.data("disabled", "disabled");

        setTimeout(function () {
            btn.button('reset')
        }, 1000)
    });

// Sign up page, final step
$('#signupstep3')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        anchor.data("disabled", "disabled");
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

// Sign up page check zip code
$('#signupzipcodecheck')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        anchor.data("disabled", "disabled");
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

// Sign up page check zip code
$('#billingsubmit')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        anchor.data("disabled", "disabled");
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

// Sign up page check zip code
$('#submit1')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        //btn.data("disabled", "disabled");
        //setTimeout(function () {
        //    btn.button('reset')
        //}, 12000)
    });

// gift code download certificate button
$('#giftdownload')
    .click(function () {
        var btn = $(this);
        btn.button('loading');

        btn.data("disabled", "disabled");
        setTimeout(function () {
            btn.button('reset')
        }, 4000)
    });


if ($(".simple-ajax-popup-align-top")[0]){
    $(document).ready(function() {

        $('.simple-ajax-popup-align-top').magnificPopup({
            type: 'ajax',
            alignTop: true,
            overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump

        });

        $('.simple-ajax-popup').magnificPopup({
            type: 'ajax'
        });

    });
}

$('#boxchange').change(function () {
    $('#boxchangemodal').modal()
});

div = {
    show: function(elem) {
        document.getElementById(elem).style.visibility = 'visible';
    },
    hide: function(elem) {
        document.getElementById(elem).style.visibility = 'hidden';
    }
}


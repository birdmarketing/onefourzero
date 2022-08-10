/* Collapse/Open side nav + collapse the opened div's on collapse*/
var mini = false;

function toggleSidebar() {
    if (mini) {
        document.getElementById("dash-nav").style.width = "15%";
        document.getElementById("logout").style.width = "15%";
        document.getElementById("main").style.marginLeft = "0%";

        document.getElementById("dash-nav").style.whiteSpace = "pre-wrap";
        document.getElementById("nav-icon").src = "https://360creatives.blob.core.windows.net/navigation/previous.png";
        mini = false;

    } else {
        document.getElementById("dash-nav").style.width = "4.5%";
        document.getElementById("logout").style.width = "4.5%";
        document.getElementById("main").style.marginLeft = "-6%";


        document.getElementById("dash-nav").style.whiteSpace = "nowrap";
        document.getElementById("nav-icon").src = "https://360creatives.blob.core.windows.net/navigation/next.png";

        $('.dropdown-container-more').css("display", "none");
        $('.dropdown-btn-more').css("bottom", "9.5%");

        mini = true;
        var divsToHide = document.getElementsByClassName("dropdown-container");
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.display = "none";
        }

    }
}

/* Open only one side navigation links module at a time */
var dropdown = document.getElementsByClassName("dropdown-btn");
var container = document.getElementsByClassName("dropdown-container");
var i;


for (i = 0; i < dropdown.length; i++) {
    if (mini === true) {
        toggleSidebar()
    }
    ;
    dropdown[i].addEventListener("click", function () {
        document.querySelector(".active").classList.remove("active")
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            dropdown.find('.collapse.in').collapse('hide');

        } else {
            if (mini === true) {
                toggleSidebar()
            }
            ;
            dropdownContent.style.display = "block";

        }

        for (var j = 0; j < container.length; j++) {
            if (container[j].style.display = "block") {
                container[j].style.display = "none";
            }
        }
        dropdownContent.style.display = "block";

    });
}
;


/* Collapse more options menu when dashboard module link gets opened */
$('.dropdown-btn').click(function () {
    $('.dropdown-container-more').css("display", "none");
    $('.dropdown-btn-more').css("bottom", "9.5%");
    $('.dropdown-btn.active').removeClass('active');
    $(this).addClass('active');
});

/* Side navigation more options menu links collapse functionality */
$('.dropdown-btn-more').click(function () {
    $('.dropdown-btn.active').removeClass('active');
    $('.dropdown-container').css("display", "none");
    if (document.getElementById("dash-nav").style.width = "15%") {
        if ($('.dropdown-container-more').css("display") == "none") {
            $('.dropdown-container-more').css("display", "block");
            $('.dropdown-btn-more').css("bottom", "27.5%");
            $('.dropdown-btn.active').removeClass('active')
        } else {
            $('.dropdown-container-more').css("display", "none");
            $('.dropdown-btn-more').css("bottom", "9.5%")
        }
    } else {

        $('.dropdown-container-more').css("display", "block");
        $('.dropdown-btn-more').css("bottom", "27.5%");
        toggleSidebar();

    }
});


/* Landing Page pop-up */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var successform = document.getElementById("successForm");

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == successform) {
        successform.style.display = "none";
    }
}


/*Functions for opening different modals */
function CloseForm() {
    $(".form-close").css("display", "block");
}

function DataRequest() {
    $('#newForm').css("display", "block");
}

function MAForm() {
    $('#MAForm').css("display", "block");
}

function VCForm() {
    $('#VCForm').css("display", "block");
}

function OriginationsForm() {
    $('#Originations').css("display", "block");
}

function FMForm() {
    $('#FMForm').css("display", "block");
}

function Pricing() {
    $('#pricing-packages').css("display", "block");
}

function Glossary() {
    $('#glossary').css("display", "block");
}

function FAQ() {
    $('#faq').css("display", "block");
}

/* Submit function for data and report requests */
function Submit() {
    $('#MAForm').css("display", "none");
    $('#VCForm').css("display", "none");
    $('#successForm').css("display", "block");
    resetForm($('#MAForm'));
    resetForm($('#VCForm'));

}

/* Close any open modals and reset forms on success popup close */
$('.form-close-button2').click(function () {
    $('#MAForm').css("display", "none");
    $('#VCForm').css("display", "none");
    $('#pricing-packages').css("display", "none");
    $('#Originations').css("display", "none");
    $('#FMForm').css("display", "none");
    $('#glossary').css("display", "none");
    $('#faq').css("display", "none");
    resetForm($('#MAForm'));
    resetForm($('#VCForm'));


});
/* Close any open modals and reset forms on success popup close */
$('.form-close-button').click(function () {
    $('#newForm').css("display", "none");
    $('#MAForm').css("display", "none");
    $('#VCForm').css("display", "none");
    $('#Originations').css("display", "none");
    $('#FMForm').css("display", "none");
    $('#pricing-packages').css("display", "none");

});
/* ???????????? - is this needed?????New Data Request Successfull submission Pop-up */
var successform = document.getElementById("successForm");
var successformspan = document.getElementsByClassName("success-close")[0];


successformspan.onclick = function () {
    successform.style.display = "none";
}

/* Reset forms - for project and report modals */
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').prop('checked', false);
}


/* Functionality to remove brands from the project request modal */
function removeBrand(brnd) {
    var idno = brnd.replace(/brand-remove/, '');


    if ($('#brand_' + idno).css('display') == 'none') {
        $('#brand_' + idno).remove();
        $('#brand-header' + idno).remove();
        hideRemove();
    } else {
        $('#brand_' + idno).remove();
        $('#brand-header' + idno).remove();
        var last = $('div.form-brand:last').prop('id')
        var idlst = last.replace(/brand_/, '');
        $('#brand_' + idlst).show();
        hideRemove();
    }
    ;

};

/* Functionality to hide the remove brand option when only one brand is left - when deleting brands */
function hideRemove() {
    var brndsno = $('.form-brand').length;
    if (brndsno == 1) {
        $('div[id ^= "brand-remove"]').css("display", "none");
    }
};

/* Functionality to open the specific brand part of the form and collapse other */
function openBrand(brnd) {
    var idno = brnd.replace(/brand-title/, '');
    if ($('#brand_' + idno).css('display') == 'none') {

        $('div[id ^= "brand_"]').css("border-top", "#03a9f5 solid 0px");
        $('div[id ^= "brand_"]').css("border-bottom", "#03a9f5 solid 0px")
        $('div[id ^= "brand_"]').hide();
        $('#brand-header' + j).css("display", "flex");
        $('div[id ^= "brand-header"]').css("border-bottom", "#03a9f5 solid 1px");
        $('div[id ^= "brand-header"]').css("border-top", "#03a9f5 solid 0px");
        $('#brand-header' + j).css("border-bottom", "#03a9f5 solid 0px");
        $('#brand_' + idno).show();

        $('#brand_' + idno).css("border-top", "#03a9f5 solid 0px");
        $('#brand_' + idno).css("border-bottom", "#03a9f5 solid 1px");

        $('#brand-header' + idno).css("border-bottom", "#03a9f5 solid 0px");

        $('#brand-header1').css("border-top", "#03a9f5 solid 0px");
        $('#brand-name:last').prop('id', 'brand-name' + j);
        var brand = $('#brand-name' + j).val()
        $('#brand-title' + j).text('Brand : ' + brand);


    } else {

        $('div[id ^= "brand_"]').css("border-top", "#03a9f5 solid 0px");
        $('div[id ^= "brand_"]').css("border-bottom", "#03a9f5 solid 0px");
        $('div[id ^= "brand-header"]').css("border-bottom", "#03a9f5 solid 1px");
        $('div[id ^= "brand-header"]').css("border-top", "#03a9f5 solid 0px");
        $('#brand-header1').css("border-top", "#03a9f5 solid 0px");
        $('#brand_' + idno).hide();
        $('#brand_' + j).show();
        $('#brand-header' + j).css("border-bottom", "#03a9f5 solid 0px");
        $('#brand_' + j).css("border-bottom", "#03a9f5 solid 0px");
        $('#brand-name:last').prop('id', 'brand-name' + j);
        var brand = $('#brand-name' + j).val()
        $('#brand-title' + j).text('Brand : ' + brand);


    }
};

/* Functionality to add new brand and make previous brand header visible + max brand limit set */
var i = 2;
var j = 1;
var limit = 11;
$('.add-brand').click(function () {
    if ($('.form-brand').length < limit) {
        $('#brand-header' + j).css("display", "none");
        $('#brand-header' + j).css("border-bottom", "#03a9f5 solid 1px");
        $('.brand-header:last').clone().insertAfter('div.form-brand:last').prop('id', 'brand-header' + i);
        $('.form-brand:last').clone().insertAfter('div.brand-header:last').prop('id', 'brand_' + i);
        $('#brand-name:last').prop('id', 'brand-name' + j);
        $('.brand-title:last').prop('id', 'brand-title' + i);
        $('.brand-remove:last').prop('id', 'brand-remove' + i);
        resetForm($('#brand_' + i));
        $('#brand-header' + j).css("display", "flex");
        var brand = $('#brand-name' + j).val()
        $('#brand-title' + j).text('Brand : ' + brand);
        $('div[id ^= "brand_"]').hide();
        $('#brand_' + i).show();
        $('div[id ^= "brand-remove"]').css("display", "block");
        i++;
        j++;
    }
    if ($('.form-brand').length == limit) {
        $(".add-brand").hide();
    }
});


/* Reset the new project request form - remove all added brands and reset the fields */
function cleanForm() {
    var brndfirst = $('.form-brand:first').attr('id')
    var lowno = brndfirst.replace(/brand_/, '');
    var brndlast = $('.form-brand:last').attr('id')
    var highno = brndlast.replace(/brand_/, '');
    console.log(lowno);
    console.log(highno);
    resetForm($('#form-project'));
    resetForm($('#brand_' + lowno));


    var lowno2 = lowno + 1;
    var highno2 = highno + 1;
    console.log(lowno2);
    console.log(highno2);

    for (var n = parseInt(lowno) + 1; n < parseInt(highno) + 1; ++n) {
        console.log('#brand_' + n);
        $('#brand_' + n).remove();
        $('#brand-header' + n).remove();
    }
    ;

    $('#brand-header' + lowno).hide();
    $('#brand-header' + lowno).attr('id', 'brand-header1');
    $('#brand_' + lowno).attr('id', 'brand_1');
    $('#brand_1').show();
    i = 2;
    $('#newForm').css("display", "none");

};

/* Section for forms input transformation for submitting payload to dunction*/

/* Data transformation for brands dictionary */
function getBrandArray() {
    brands = []
    divs = document.querySelectorAll('.form-brand')
    console.log(divs);

    for (let div of divs) {
        brand = {
            'brand-name': div.querySelector('[name="brand-name"]').value.trim(),
            'twitter-handles': div.querySelector('#brand-handle').value.replace('@', '').trim().split(','),
            'asset': div.querySelector('#brand-asset').checked == true ? 1 : 0,
            'domains': div.querySelector('#brand-domain').value.replace('https://www.', '').replace('http://www.', '').replace('www.', '').replace('/', '').trim().split(','),
            'include-keywords': div.querySelector('#brand-include').value.trim().split(','),
            'exclude-keywords': div.querySelector('#brand-exclude').value.trim().split(',')
        }
        brands.push(brand)
    }
    return brands

}

/* Form submission process */
document.getElementById('btn-submit').addEventListener('click', event => {
    var errors = 0;
    findErrors();
    console.log(window.errors);

    if (window.errors == 0) {

        var client = sessionStorage.getItem("client");
        var demono = sessionStorage.getItem("demono");
        var email = sessionStorage.getItem("email");
        var altemail = sessionStorage.getItem("altemail");


        value = id => {
            return document.getElementById(id).value
        }

        emails = {
            'email': email,
            'alternateemail': altemail
        }

        payload = {
            'project-name': 'DEMO' + demono + '_' + value('project-name').replace(' ', '_').trim(),
            'start-date': value('project-start-date').trim(),
            'end-date': value('project-end-date').trim(),
            'country': value('project-country').trim(),
            'brands': getBrandArray(),
            'email_list': emails
        }

        var str = JSON.stringify(payload, null, 2);
        console.log(str);

        var filename = moment().toISOString().substring(0, 10) + "_" + client + "_" + value('project-name').trim().replace(/\s+/g, '_')
        console.log(filename);
        /* Upload data to azure storage - updated to dummy endpoint for sharing purposes */
        var settings = {
            "url": "https://dummyendpoint" + demono + "_" + filename,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "text/plain"
            },
            "data": str,
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        /* Trigger azure endpoint to run data submitted above - updated to dummy endpoint for sharing purposes */
        var settings = {
            "url": "https://dummyendpoint" + demono + "_" + filename + ".json",
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        cleanForm();
        $('#successForm').css("display", "block");
    }

});

/* Form input validation error messages - can't submit until 0 errors */
function findErrors() {
    errors = 0;


    if ($('#project-name').val().trim() == "") {
        $.toast({
            text: "Please add project name.",
            position: 'top-center',
            hideAfter: 3000,
            loader: false,
            bgColor: '#8b000c',
            showHideTransition: 'slide'
        });
        errors++;
    }
    ;
    if ($('#project-country').val().trim() == "") {
        $.toast({
            text: "Country can't be empty.",
            position: 'top-center',
            hideAfter: 3000,
            loader: false,
            bgColor: '#8b000c',
            showHideTransition: 'fade'
        });
        errors++;
    }
    ;


    if ($('input.cm-toggle[type="checkbox"]:checked').length == 0) {
        $.toast({
            text: "Please select which brand is the asset.",
            position: 'top-center',
            hideAfter: 3000,
            loader: false,
            bgColor: '#8b000c',
            showHideTransition: 'fade'
        });
        errors++;
    }
    ;
    if ($('input.cm-toggle[type="checkbox"]:checked').length > 1) {
        $.toast({
            text: "Only one brand can be an asset - please check your form.",
            position: 'top-center',
            hideAfter: 3000,
            loader: false,
            bgColor: '#8b000c',
            showHideTransition: 'fade'
        });
        errors++;
    }
    ;

    $('.brand-name').each(function () {
        if ($(this).val().trim() == "") {
            $.toast({
                text: "Please check that brand names have been entered for all brands.",
                position: 'top-center',
                hideAfter: 3000,
                loader: false,
                bgColor: '#8b000c',
                showHideTransition: 'fade'
            });
            errors++;
        }
    });

    $('.brand-domain').each(function () {
        if ($(this).val().trim() == "") {
            $.toast({
                text: "Please check that domain names have been entered for all brands.",
                position: 'top-center',
                hideAfter: 3000,
                loader: false,
                bgColor: '#8b000c',
                showHideTransition: 'fade'
            });
            errors++;
        }
    });

    $('.brand-domain').each(function () {
        if ($(this).val().trim().indexOf('.') < 1) {
            $.toast({
                text: "Please check that domain names have been entered correctly.",
                position: 'top-center',
                hideAfter: 3000,
                loader: false,
                bgColor: '#8b000c',
                showHideTransition: 'fade'
            });
            errors++;
        }
    });

    $('.brand-domain').each(function () {
        if ($(this).val().trim().indexOf(' ') >= 0) {
            $.toast({
                text: "Please check that domain names have been entered correctly.",
                position: 'top-center',
                hideAfter: 3000,
                loader: false,
                bgColor: '#8b000c',
                showHideTransition: 'fade'
            });
            errors++;
        }
    });
}


/* For glossary - allow only one section and subsection to be expanded at a time */

$('input.tab[type=checkbox]').on('change', function () {
    $('input.tab[type=checkbox]').not(this).prop('checked', false);
});

$('input.question[type=checkbox]').on('change', function () {
    $('input.question[type=checkbox]').not(this).prop('checked', false);
});

/* For glossary - functions to open the relevant module and tab to what is being displayed in the dashboard */
function GlossaryModule(tabno) {
    $("#tab-" + tabno).prop('checked', true);
    $('input.tab[type=checkbox]').not("#tab-" + tabno).prop('checked', false);
};

function GlossaryTab(questionno) {
    $("#question-" + questionno).prop('checked', true);
    $('input.question[type=checkbox]').not("#question-" + questionno).prop('checked', false);
};

/* Token for embedded dashboard connection */
function newToken() {
    $.get("https://tableauusertoken.azurewebsites.net/api/GetUserToken?code=Hln9dWTbEjxtCkrAC1AT2LsT5HLoWHtP_KpQR_A-SrMMAzFuZObe1g==",
        function (token) {
            $("#tableauViz").attr("token", token);
            console.log(token);
        });
}

/* Send data to endpoint for Value Creation Report Request - updated to dummy endpoint for sharing purposes */
function VCSubmit() {
    var email = sessionStorage.getItem("email");
    var client = sessionStorage.getItem("client");
    var reporttype = $('#vc-report-type').val();
    var projectname = $('#vc-project-select option:selected').text();
    var comments = $('#vc-comments').val();
    var settings = {
        "url": "https://dummyendpoint",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "text/plain"
        },
        "data": "'VC','" + projectname + "','" + reporttype + "','" + comments + "','" + email + "','" + client + "'"
    };
    console.log(settings);
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};

/* Send data to endpoint for M&A Report Request - updated to dummy endpoint for sharing purposes */
function MASubmit() {
    var email = sessionStorage.getItem("email");
    var client = sessionStorage.getItem("client");
    var reporttype = $('#ma-report-type').val();
    var projectname = $('#ma-project-select option:selected').text();
    var comments = $('#ma-comments').val();
    var settings = {
        "url": "https://dummyendpoint",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "text/plain"
        },
        "data": "'M&A','" + projectname + "','" + reporttype + "','" + comments + "','" + email + "','" + client + "'"
    };
    console.log(settings);
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};

/* Reset M&A and VC Form to initial state (after submission/modal close) */
function MAVCReset() {
    $('#ma-report-type option:eq(0)').attr('selected', 'selected');
    $('#vc-report-type option:eq(0)').attr('selected', 'selected');
    $('#ma-project-select option:eq(0)').attr('selected', 'selected');
    $('#vc-project-select option:eq(0)').attr('selected', 'selected');
    $('#ma-comments').val("");
    $('#vc-comments').val("");
};

/* Changing project in the embedded dashboard through the project filter in side navigation*/
$("#project-filter").change(function () {
    var projectname = $("#project-filter option:selected").text();
    console.log(projectname);
    $("#vizFilter").attr("value", projectname);
    $("#2").click();
    createViz('5');
});
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
    }
    else if (event.target == successform) {
        successform.style.display = "none";

    }
}

/* New Data Request Form Pop-up */
var form = document.getElementById("newForm");
var formbtn = document.getElementById("form-button");
var formspan = document.getElementsByClassName("form-close")[0];

formbtn.onclick = function () {
    form.style.display = "block";
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

/*Functions for opening different modals */

function DataRequest() {
    $('#DeleteForm').css("display", "none");
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

function FormDelete() {
    $('#DeleteForm').css("display", "block");
}

/* Submit function for data and report requests */
function Submit() {
    $('#MAForm').css("display", "none");
    $('#VCForm').css("display", "none");
    $('#pricing-packages').css("display", "none");
    $('#Originations').css("display", "none");
    $('#FMForm').css("display", "none");
    $('#successForm').css("display", "block");
    $('#DeleteForm').css("display", "none");
    resetForm($('#MAForm'));
    resetForm($('#VCForm'));
}

/* Check if the user has spaces to add project and either direct them to add new project or delete one to make space */
function ProjectCheck() {
    var maxprojects = sessionStorage.getItem("maxprojects");
    var activeprojects = sessionStorage.getItem("activeprojects");


    if (maxprojects === activeprojects) {
        FormDelete();
    }
    else {
        DataRequest();
    }
};

/* New Data Request Successfull submission Pop-up */
var successform = document.getElementById("successForm");
var successformspan = document.getElementsByClassName("success-close")[0];


successformspan.onclick = function () {
    successform.style.display = "none";
    location.reload();
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
    }
    else {
        $('#brand_' + idno).remove();
        $('#brand-header' + idno).remove();
        var last = $('div.form-brand:last').prop('id')
        var idlst = last.replace(/brand_/, '');
        $('#brand_' + idlst).show();
        hideRemove();
    };

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


    }
    else {

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


/* Temp solution to solve for form request submission - reload page - to be removed when form reset/cleanForm() is solved */
$('.form-close-button').click(function () {
    location.reload();

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
    };

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



        /* Upload data to azure storage - updated to dummy endpoint for sharing purposes*/
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
        $('#newForm').css("display", "none");
        $('#successForm-request').css("display", "block");
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
    };
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
    };


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
    };
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
    };

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

/* Send data to endpoint for Value Creation Report Request - updated to dummy endpoint for sharing purposes*/
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
        "url": "https://summyendpoint",
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
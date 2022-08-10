
/* Date from and to restrictions and defaults for New Project Request Form */
function formatISOLocal(d) {
    let z = n => ('0' + n).slice(-2);
    return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate());
}

window.onload = function () {
    let inp = document.querySelector('#project-start-date');
    let inpe = document.querySelector('#project-end-date');
    let d = new Date();
    if (d.getDate() >= '15') {
        d.setDate(0);
        inp.max = formatISOLocal(d);
        inpe.max = formatISOLocal(d);
        d.setFullYear(d.getFullYear() - 2);
        d.setDate(1);
        d.setMonth(d.getMonth() + 1);
        inp.min = formatISOLocal(d);
        inpe.min = formatISOLocal(d);
        inp.defaultValue = inp.min;
        inpe.defaultValue = inp.max;
        console.log(inp.outerHTML);
    }
    else {
        d.setMonth(d.getMonth() - 1);
        d.setDate(0);
        inp.max = formatISOLocal(d);
        inpe.max = formatISOLocal(d);
        d.setFullYear(d.getFullYear() - 2);
        d.setDate(1);
        d.setMonth(d.getMonth() + 1);
        inp.min = formatISOLocal(d);
        inpe.min = formatISOLocal(d);
        inp.defaultValue = inp.min;
        inpe.defaultValue = inp.max;
        console.log(inp.outerHTML);
    }
    var maxprojects = 3;
    var activeprojects = 3;
    sessionStorage.setItem("maxprojects", maxprojects);
    sessionStorage.setItem("activeprojects", activeprojects);
    console.log(sessionStorage.getItem("maxprojects"));
    console.log(sessionStorage.getItem("activeprojects"));
    /* User information - get user info from session storage else get user info from endpoint and save to session storage*/
    if (window.location.href == 'https://www.360data.io/#') {
        var username = sessionStorage.getItem("username");
        var project = sessionStorage.getItem("project");
        var client = sessionStorage.getItem("client");
        var packagetype = sessionStorage.getItem("packagetype");
        var demono = sessionStorage.getItem("demono");
        var email = sessionStorage.getItem("email");
        var altemail = sessionStorage.getItem("altemail");
        var maxprojects = sessionStorage.getItem("maxprojects");
        var activeprojects = sessionStorage.getItem("activeprojects");


        document.getElementById("username").innerHTML = "<br /><br />" + username + "<br />" + client;
    }
    else {
        let pageurl = window.location.href;

        console.log(pageurl);
        var pageurlfixed = pageurl.replace('#', '');
        console.log(pageurlfixed);




        /* Hardcoded values for static version */
        var username = 'Basic Demo';
        var project = 'OneFourZeroDemo-BASICPACKAGE';
        var client = 'Onefourzero';
        var packagetype = 'basic';
        var email = 'threesixty@onefourzerogroup.com';
        var altemail = 'olivia@onefourzerogroup.com';
        var demono = username.replace(/^\D+/g, '');
        var maxprojects = 3;

        if (demono == null) {
            var demono = "";
        };


        sessionStorage.setItem("username", username);
        sessionStorage.setItem("project", project);
        sessionStorage.setItem("client", client);
        sessionStorage.setItem("packagetype", packagetype);
        sessionStorage.setItem("demono", demono);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("altemail", altemail);
        sessionStorage.setItem("maxprojects", maxprojects);
        sessionStorage.setItem("activeprojects", activeprojects);
        document.getElementById("username").innerHTML = "<br /><br />" + username + "<br />" + client;

    };


};

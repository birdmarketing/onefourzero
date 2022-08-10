/* User information */
var username = sessionStorage.getItem("username");
var project = sessionStorage.getItem("project");
var client = sessionStorage.getItem("client");
var packagetype = sessionStorage.getItem("packagetype");
var demono = sessionStorage.getItem("demono");
var email = sessionStorage.getItem("email");
var altemail = sessionStorage.getItem("altemail");
/* Hardcoded user info for static version*/
var project = "OneFourZeroDemo-BASICPACKAGE"
/* Tableau Dashbaord Visualisation */
var vizList = ["https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/Navigation",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketingEfficiencies-Channels",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketingEfficiencies-SEOPerformance",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketingEfficiencies-PPCPerformance",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketingEfficiencies-SocialReferralTraffic",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketShareSizeandGrowth-TAM",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketShareSizeandGrowth-Headroom",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketShareSizeandGrowth-Size",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/MarketShareSizeandGrowth-Growth",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/CustomerCohortsandSentiment-Cohorts",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/CustomerCohorts-SentimentandMentions",
"https://eu-west-1a.online.tableau.com/#/site/onefourzero/views/" + project + "/CustomerCohortsandSentiment-Profiling"];

var viz,
    vizLen = vizList.length,
    vizCount = 0;

function createViz(vizCount) {

    var vizURL = vizList[vizCount];
    $("#tableauViz").attr("src", vizURL);

}

/* Hide module links from side nav based on package type */
function packageHide(package) {
    const targetDiv = document.getElementById(package);
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

/* Disable, grey out and add lock icons on module links in side nav based on package type */
function packageType(packagetype) {
    if (packagetype === "basic") {
        $('#1').css("background", "rgba(92,117,140,0.5)");
        $('#5').css("background", "rgba(92,117,140,0.5)");
        $('#6').css("background", "rgba(92,117,140,0.5)");
        $('#7').css("background", "rgba(92,117,140,0.5)");

        $('#1 .lockimage').css("display", "flex");
        $('#5 .lockimage').css("display", "flex");
        $('#6 .lockimage').css("display", "flex");
        $('#7 .lockimage').css("display", "flex");
        $('#tabs1 .lockimagemini').css("display", "flex");
        $('#tabs5 .lockimagemini').css("display", "flex");
        $('#tabs6 .lockimagemini').css("display", "flex");
        $('#tabs7 .lockimagemini').css("display", "flex");

        $("#tabs1 .dropdown-option").prop("onclick", null).off('click');
        $("#tabs5 .dropdown-option").prop("onclick", null).off('click');
        $("#tabs6 .dropdown-option").prop("onclick", null).off('click');
        $("#tabs7 .dropdown-option").prop("onclick", null).off('click');

    } else if (packagetype === "standard") {
        $('#7').css("background", "rgba(92,117,140,0.5)");
        $('#7 .lockimage').css("display", "flex");
        $('#tabs7 .lockimage').css("display", "flex");
        $("#tabs7 .dropdown-option").prop("onclick", null).off('click');
    }
};

/* Date from and to restrictions and defaults for New Project Request Form */
function formatISOLocal(d) {
    let z = n => ('0' + n).slice(-2);
    return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate());
}

function DatesDynamic() {
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
};

/*All fuctions that need to be run on page load */
function LoadAll() {
    var projectname = "DEMO_GOOUTDOORS";
    $("#vizFilter").attr("value", projectname);

    $.get("https://tableauusertoken.azurewebsites.net/api/GetUserToken?code=Hln9dWTbEjxtCkrAC1AT2LsT5HLoWHtP_KpQR_A-SrMMAzFuZObe1g==",
        function (token) {
            $("#tableauViz").attr("token", token);
            console.log(token);
        });
    createViz('5');
    packageType(packagetype);
    DatesDynamic();
    document.getElementById("username").innerHTML = "<br /><br />" + username + "<br />" + client;
    GlossaryModule(1);
    GlossaryTab(1);

    var activeprojects = ['DEMO_GOOUTDOORS', 'DEMO_Wonderbly'];
    $.each(activeprojects, function (index, value) {
        $("#project-filter").append(new Option(value, value));
    });

};
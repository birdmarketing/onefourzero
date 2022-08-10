<!DOCTYPE html>
<html lang="en-US" class="wf-opensans-n4-active wf-active">
<!--begin::Head-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="/assets/css/styles_light_dev.css" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/png" href="https://360creatives.blob.core.windows.net/branding/favicon.svg" />
    <script type="module" src="https://online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
    <script src='https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.js"></script>



    <!-- begin::METRONIC ASSETS -->
    <!--begin::Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <!--end::Fonts-->
    <!--begin::Vendor Stylesheets(used by this page)-->
    <!-- <link href="assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" /> -->
    <!-- <link href="assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css" /> -->
    <!--end::Vendor Stylesheets-->
    <!--begin::Global Stylesheets Bundle(used by all pages)-->
   <!-- <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" /> -->
   <!-- <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" /> -->
    <!-- end::METRONIC ASSETS -->


    <!-- begin::Meta Information -->
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta charset="utf-8" />
    <title>360 Dashboard</title>
    <!-- end::Meta Information -->

    <!-- begin::OG Scripts -->  
    <script type='text/javascript' src="/assets/js/og/dashboard-header-script.js"></script>
    <!-- end::OG Scripts -->

</head>
<!--end::Head-->


<!--begin::Body-->
<body data-kt-name="metronic" id="kt_body" onload="LoadAll();">

<!--begin::Theme mode setup on page load-->
<script>
    if ( document.documentElement ) { 
        const defaultThemeMode = "system"; 
        const name = document.body.getAttribute("data-kt-name");
        let themeMode = localStorage.getItem("kt_" + ( name !== null ? name + "_" : "" ) + "theme_mode_value"); 
        
        if ( themeMode === null ) { 
            if ( defaultThemeMode === "system" ) { 
                themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } else { 
                themeMode = defaultThemeMode; 
            } 
        } 
        document.documentElement.setAttribute("data-theme", themeMode); 
    }
</script>
<!--end::Theme mode setup on page load-->


<!--begin::Main-->
<!--begin::Root-->

<div data-kt-name="metronic" id="kt_body" class="container-dashboard">
    <!-- begin::Banner Cell -->
    <?php include_once('./partials/banner-cell.php'); ?>
    <!-- end::Banner Cell -->

    <!-- begin::Side Navigation -->
    <?php include_once ('./partials/dashboard/side-nav.php'); ?>
    <!-- end::Side Navigation -->


    <!--begin::Content-->
    <!-- <div class="content d-flex flex-column flex-column-fluid" id="kt_content"> -->
        <!--begin::Container-->
        <!-- <div class="container-fluid" id="kt_content_container"> -->
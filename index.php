<?php include_once("./partials/landing/head.php"); ?>

<div class="dashboard-content">
    <div class="container-inner">
        <div class="dashboard-main">
            <div class="landing-content" onclick="location.href='main-dashboard.php'">
                <div class="tile-left">
                    <h5>Your Projects</h5>
                </div>
                <div class="tile-right">
                    <img class="img-responsive dashboardimage-main" src="https://360creatives.blob.core.windows.net/creatives/TAM.PNG" alt="Dashboard" />
                </div>
            </div>
        </div>
        <div class="product-second">
            <div class="landing-content2" id="form-button">
                <div class="tile-left">
                    <img class="img-responsive dashboardimage-left" src="https://360creatives.blob.core.windows.net/creatives/360Services.png" alt="Form" />
                </div>
                <div class="tile-right">
                    <h6>New Project Request Form</h6>
                </div>
            </div>
        </div>
        <div class="product-third">
            <div class="landing-content3" onclick="MAForm();">
                <div class="tile-left">
                    <h6>Request M&A Report</h6>
                </div>
                <div class="tile-right">
                    <img class="img-responsive dashboardimage-right" src="https://360creatives.blob.core.windows.net/creatives/MAServices.png" alt="Dashboard" />
                </div>
            </div>
        </div>
        <div class="product-fourth">
            <div class="landing-content4" onclick="VCForm();">
                <div class="tile-left">
                    <img class="img-responsive dashboardimage-left" src="https://360creatives.blob.core.windows.net/creatives/VCServices.png" alt="Dashboard" />
                </div>
                <div class="tile-right">
                    <h6>Request Value Creation Report</h6>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include_once("./partials/landing/footer.php"); ?>
<?php include_once('./partials/dashboard/head.php'); ?>
    <!-- Embedded Dashboard -->
    <div class="dashboard-content" id="main">
        <select id="project-filter" name="project-select" required /></select>
        <div id="vizContainer" style="max-height:86vh;">
            <tableau-viz id="tableauViz"
                         src=""
                         token=""
                         device="default"
                         toolbar="hidden"
                         height= "86vh"
                         hide-tabs>
                <viz-filter id="vizFilter" field="Project" value=""> </viz-filter>
            </tableau-viz>
        </div>
    </div>

<?php include_once('./partials/dashboard/footer.php'); ?>
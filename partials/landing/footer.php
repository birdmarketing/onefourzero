<!-- The Modal -->
<div id="myModal" class="modal">

    <!-- Welcome modal -->
    <div class="modal-content">
        <div class="modal-close"><span class="close">&times;</span></div>
        <div class="modal-text">Welcome to your threesixty dashboard!<br /><br />
            Check out all the cool stuff we have :)</div>

    </div>

</div>
<!-- New Project Request Modal -->
<div id="newForm" name="newForm" class="form">

    <!-- Form content -->
    <div class="form-content" id="form-content">
        <div class="form-close">
            <h6>New Project Request<h6><span class="form-close-button" id="form-close-button">&times;</span>
        </div>
        <div class="form-project" id="form-project">
            <div class="project-details-labels">
                <label for="project-name">Project name:</label>
            </div>
            <div class="project-details-labels2">
                <label for="project-country">Country:</label>
            </div>
            <div class="project-details">
                <input type="text" id="project-name" name="project-name" autocomplete="off" required />
            </div>
            <div class="project-details2">
                <select id="project-country" name="country" required />
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
                </select>
            </div>
            <div class="project-dates-labels">
                <label for="project-start-date">Start date:</label>
            </div>
            <div class="project-dates-labels2">
                <label for="project-end-date">End date:</label>
            </div>
            <div class="project-dates">
                <input class="datepicker" type="date" id="project-start-date" name="start-date" required>
            </div>
            <div class="project-dates2">
                <input type="date" id="project-end-date" name="end-date" required>
            </div>
        </div>
        <!-- Brand header for when multiple brands are added -->
        <div class="brand-header" id="brand-header1">
            <div class="brand-title" id="brand-title1" onclick="openBrand(this.id)">Brand 1</div>
            <div class="brand-remove" id="brand-remove1" onclick="removeBrand(this.id)"> remove brand &#x2573</div>
        </div>
        <!-- Brand portion of the form - gets duplicated when brands are added -->
        <div class="form-brand" id="brand_1">
            <div class="brand-details-labels">
                <label for="brand-name">Brand name:</label>
            </div>
            <div class="brand-details">
                <input type="text" id="brand-name" name="brand-name" class="brand-name" required autocomplete="off" />
            </div>
            <div class="brand-details2-labels">
                <label for="brand-handle">Twitter Handle(s):</label>
            </div>
            <div class="brand-details2">
                <input type="text" id="brand-handle" name="twitter-handles" autocomplete="off" />
            </div>

            <div class="brand-details-labels2">
                <label for="brand-domain">Domain(s):</label>
            </div>
            <div class="brand-details-2">
                <input type="text" id="brand-domain" name="domains" class="brand-domain" required autocomplete="off" />
            </div>
            <div class="brand-details2-labels2">
                <label for="brand-include">Include keywords:<div class="bubblePosition hoverBubble">
                        <p>Please enter any unique keywords for the brand that you would like to include in your search i.e. unique product names that are used without the company name<br /><br />e.g. "AirForce" for Nike
                            <br />For best results please do not enter generic industry keywords.
                        </p>
                    </div></label><img class="img-responsive infoimage" src="https://360creatives.blob.core.windows.net/creatives/question-mark.png" alt="commercial performance" />

            </div>
            <div class="brand-details2-2">
                <input type="text" id="brand-include" name="include-keywords" autocomplete="off" placeholder="comma separated" />

            </div>

            <div class="brand-details-labels3">
                <label for="brand-asset">Asset:</label>
            </div>
            <div class="brand-details-3">
                <input type="checkbox" id="brand-asset" name="asset" class="cm-toggle">
            </div>
            <div class="brand-details2-labels3">
                <label for="brand-exclude">Exclude keywords:<div class="bubblePosition hoverBubble">
                        <p>Please enter any keywords that you would like to ignore i.e. competitor or product that has a similar name or a phrase that helps to exclue irrelevant mentions<br /><br />e.g. "rainforest" for Amazon</p>
                    </div></label><img class="img-responsive infoimage" src="https://360creatives.blob.core.windows.net/creatives/question-mark.png" alt="commercial performance" />

            </div>
            <div class="brand-details2-3">
                <input type="text" id="brand-exclude" name="exclude-keywords" autocomplete="off" placeholder="comma separated" />
            </div>
        </div>

        <!-- Add brand button to duplicate section above -->
        <div class="add-brand">+ Add another brand</div>
        <div class="form-submit">
            <button class="btn-submit" id="btn-submit">Submit</button>
        </div>
    </div>

</div>

<div id="successForm" class="form-success">

    <!-- Successful submission confirmation modal -->
    <div class="success-content">
        <div class="success-close"><span class="form-close-button2" id="form-close-button">&times;</span></div>
        <div class="success-text">
            <h6> </h6>
            Your request has been submitted!
            <h6> </h6>
        </div>
    </div>

</div>

<div id="successForm-request" class="form-success">

    <!-- do we need both????? Successful submission confirmation modal  -->
    <div class="success-content">
        <div class="success-close"><span class="form-close-button" id="form-close-button">&times;</span></div>
        <div class="success-text">
            <h6> </h6>
            Your request has been submitted!
            <h6> </h6>
        </div>
    </div>

</div>


<div id="DeleteForm" name="DeleteForm" class="form">

    <!-- Delete Project Form -->
    <div class="form-content" id="form-content">
        <div class="form-close"><span class="form-close-button2" id="form-close-button">&times;</span></div>
        <div class="form-text">
            <h6> You have reached the maximum number of active projects for your account.<br />
                Please select which project you want to delete before you can add a new one. </h6>
        </div>
        <div class="form-project" id="form-project">

            <div class="project-details-labels">
                <label for="project-name">Project name:</label>
            </div>
            <div class="project-details">
                <select id="project-select" name="project-select" required />
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
                <option value="otherproject">Other</option>
                </select>
            </div>

        </div>

        <div class="form-submit">
            <button class="btn-submit2" id="btn-submit" onclick="DataRequest();">Delete</button>
        </div>
    </div>

</div>


<div id="MAForm" name="MAForm" class="form">

    <!-- M&A Form -->
    <div class="form-content" id="form-content">
        <div class="form-close">
            <h6>M&A Report Request<h6><span class="form-close-button2" id="form-close-button">&times;</span>
        </div>
        <div class="form-project" id="form-project">

            <div class="project-details-labels">
                <label for="project-name">Project name:</label>
            </div>
            <div class="project-details-labels2">
                <label for="project-country">Report type:</label>
            </div>
            <div class="project-details">
                <select id="project-select" name="project-select" required />
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
                <option value="otherproject">Other</option>
                </select>
            </div>
            <div class="project-details2">
                <select id="report-type" name="report-type" required />
                <option value="CDD">Commercial Due Diligence</option>
                <option value="DD">Digital Due Diligence</option>
                <option value="Market Map">Market Map</option>
                </select>
            </div>
            <div class="project-dates-labels">
            </div>
            <div class="project-dates-labels2">
            </div>
            <div class="project-dates">
            </div>
            <div class="project-dates2">
            </div>
        </div>
        <div>
            <label for="project-name">Other comments:</label>
            <textarea id="comments" class="form-comments" cols="40" rows="5"></textarea>
        </div>
        <div class="form-submit">
            <button class="btn-submit2" id="btn-submit" onclick="Submit();">Submit</button>
        </div>
    </div>

</div>


<div id="VCForm" name="VCForm" class="form">

    <!-- VC Form -->
    <div class="form-content" id="form-content">
        <div class="form-close">
            <h6>Value Creation Report Request<h6><span class="form-close-button2" id="form-close-button">&times;</span>
        </div>
        <div class="form-project" id="form-project">

            <div class="project-details-labels">
                <label for="project-name">Project name:</label>
            </div>
            <div class="project-details-labels2">
                <label for="project-country">Report type:</label>
            </div>
            <div class="project-details">
                <select id="project-select" name="project-select" required />
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
                <option value="otherproject">Other</option>
                </select>
            </div>
            <div class="project-details2">
                <select id="report-type" name="report-type" required />
                <option value="DCA">Digital Capabilities Audit</option>
                <option value="CBSR">Competitor Benchmark and Strategy Report</option>
                <option value="BDCR">Bespoke Digital / Commercial Report</option>
                </select>
            </div>
            <div class="project-dates-labels">
            </div>
            <div class="project-dates-labels2">
            </div>
            <div class="project-dates">
            </div>
            <div class="project-dates2">
            </div>
        </div>
        <div>
            <label for="project-name">Other comments:</label>
            <textarea id="comments" class="form-comments" cols="40" rows="5"></textarea>
        </div>
        <div class="form-submit">
            <button class="btn-submit2" id="btn-submit" onclick="Submit();">Submit</button>
        </div>
    </div>

</div>

<!-- Pricing Packages Informational Modal -->
<div id="pricing-packages" name="pricing-packages" class="form">
    <div class="form-content" id="form-content">
        <div class="form-close" style="border-bottom: 0px"><span class="form-close-button2" id="form-close-button">&times;</span></div>
        <div class="pricing-grid">
            <h6> </h6>
            <div class="gradient-button gradient-button-1">Basic</div>
            <div class="gradient-button gradient-button-2">Standard</div>
            <div class="gradient-button gradient-button-3">Premium</div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Market Share Demand Icon Blue.png" alt="Market Share" />Market Share and Demand</div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_basic.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Sales Marketing Performance Icon Blue.png" alt="Headroom" />Sales and Marketing Performance</div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_basic.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Customer Cohorts Loyalty Icon Blue.png" alt="Cohorts" />Customer Cohorts and Loyalty</div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_basic.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Commercial performance Icon Blue.png" alt="commercial performance" />Commercial Performance</div>
            <div class="cell">
                <h6> </h6>
            </div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Platform Engagement Icon Blue.png" alt="Engagement" />Platform Engagement</div>
            <div class="cell">
                <h6> </h6>
            </div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Reputation Icon Blue.png" alt="Reputation" />Sentiment and Reputation</div>
            <div class="cell">
                <h6> </h6>
            </div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_standard.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/modules/threesixty Modelled Headroom Icon Blue.png" alt="Sales" />Modelled Headroom</div>
            <div class="cell">
                <h6> </h6>
            </div>
            <div class="cell">
                <h6> </h6>
            </div>
            <div class="cell"><img class="img-responsive pricingimage" src="https://360creatives.blob.core.windows.net/creatives/check_premium.png" /></div>
            <div class="cell2">
                <h6> </h6>
            </div>
            <div class="cell2">
                <h4>&bull; Benchmarking and<br />Reporting Tool<br />&bull; Data mirrors Maket Map<br /><b>from $5,000/month</b></h4>
            </div>
            <div class="cell2">
                <h4>&bull; Six modules<br />&bull; Multiple datasets<br />&bull; Fully self-managed<br /><b>from $10,000/month</b></h4>
            </div>
            <div class="cell2">
                <h4>Standard features plus:<br />&bull; Forcasting Module<br />&bull; Custom enhamcements<br /><b>from $20,000/month</b></h4>
            </div>
        </div>
    </div>
</div>


<div id="Originations" name="Originations" class="form">

    <!-- Originations Informational Modal -->
    <div class="form-content2" id="form-content">

        <div class="form-close" style="border-bottom: 0px"><span class="form-close-button2" id="form-close-button" style="color: white;">&times;</span></div>
        <div>
            <h3 style="color: white;">Originations</h3>
        </div>
        <div class="padding">
            <h4>Use our freesearch data tool to understand sector and asset performance in real time.</h4>
            <h4>Modelling market share and commercial performance alongside other indicators, you can stay ahead of the curve and our ‘trigger identifier’ helps you make pre-auction approaches with confidence.</h4>
            <h6> </h6>
        </div>
    </div>

</div>

<div id="FMForm" name="FMForm" class="form">

    <!-- Futures Modelling Informational Modal -->
    <div class="form-content2" id="form-content">

        <div class="form-close" style="border-bottom: 0px"><span class="form-close-button2" id="form-close-button" style="color: white;">&times;</span></div>
        <div>
            <h3 style="color: white;">Future Modelling</h3>
        </div>

        <div class="padding">

            <h4>Our modelling tool uses historical data and AI intelligence to identify growth levers that will impact commercial performance.</h4>
            <h4>Essential for Investors and Management teams.</h4>
            <h6> </h6>
        </div>
    </div>

</div>


<div id="glossary" name="glossary" class="form">

    <!-- Glossary Modal -->
    <div class="form-content2" id="form-content">

        <div class="form-close" style="border-bottom: 0px"><span class="form-close-button2" id="form-close-button" style="color: white;">&times;</span></div>
        <div>
            <h3 style="color: white;">Glossary</h3>
        </div>

        <div class="padding">
            <div class="wrap-1">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-1" name="tabs" class="tab">
                <label class="glossary-label" for="tab-1">
                    <div>Market Share and Demand</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-1" name="question" class="question">
                        <label class="glossary-label" for="question-1">
                            <div>TAM</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            <b>Paid Traffic</b> - Traffic from paid promotions or advertisements i.e. Google Ads. <br />
                            <br />
                            <b>Organic Traffic</b> - Any non-paid traffic coming from search engines. <br />
                            <br />
                            <b>Branded Search</b> - Search based on terms including brand names or brand’s unique product names. <br />
                            <br />
                            <b>Generic Search</b> - Non-branded search for generic terms relating to the brand or industry. <br />
                            <br />
                            <b>Competitor’s Share</b> - Competitor Set's total desktop and mobile traffic from all the marketing channels expect from Paid and Organic Search. <br />
                            <br />
                            <b>Asset Share</b> - Asset's total desktop and mobile traffic from all the marketing channels expect from Paid and Organic Search. <br />
                            <br />
                            <b>Total Search Share</b> - Combined search volume originating from branded and generic keywords used in both paid and organic form of Google search. <br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-2" name="question" class="question">
                        <label class="glossary-label" for="question-2">
                            <div>Headroom</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            <b>Headroom</b> – Search demand not captured as traffic by asset or the competitors.<br />
                            <br />
                            <b>Asset Share</b> – Asset's total desktop and mobile traffic from all the marketing channels expect from Paid and Organic Search. <br />
                            <br />
                            <b>Comp Set Total Traffic</b> – Total traffic directed to the competitors websites. <br />
                            <br />
                            <b>Total Search Demand</b> – Total search demand for asset and competitor set. <br />
                            <br />
                            <b>TAM (Total Addressable Market)</b> - The total digital market space comprising of asset's and competitors' total traffic originating from all the marketing channels except for paid and organic search and the total search volume available for driving traffic to asset and/or competitor's website.
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-3" name="question" class="question">
                        <label class="glossary-label" for="question-3">
                            <div>Share</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            <b>Search</b> – Search demand based on branded keywords relating to the brands coming from Google search engine.<br />
                            <br />
                            <b>Traffic</b> - All traffic for the brand's website or relevant app store links.<br />
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrap-2">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-2" name="tabs" class="tab">
                <label class="glossary-label" for="tab-2">
                    <div>Sales and Marketing Performance</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-5" name="question" class="question">
                        <label class="glossary-label" for="question-5">
                            <div>Channels</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            In the Channels Tab, you can discover the leading marketing channels generating traffic for your target asset and each of your chosen competitor set. In the tab you can see: <br />
                            <br />
                            <b>Direct</b> - Traffic from users directly entering the URL, using a bookmark or saved link, etc. Direct traffic can be used as a barometer for brand strength (awareness and demand). <br />
                            <br />
                            <b>Email</b> - Website that receives a large amount of traffic from email is likely to have a large loyal customer base that engages via an owned mailing list. <br />
                            <br />
                            <b>Referrals</b> - Website that receives a large amount of traffic from referrals is likely to have a strong affiliate strategy or enjoy significant media coverage. <br />
                            <br />
                            <b>Social</b> - A website that generates high and consistent traffic from social networks is likely to have a loyal community of users. Note: Traffic from Facebook, via the Facebook Ad Network, is tracked as social traffic. <br />
                            <br />
                            <b>Desktop Organic Search</b> - Refers to the search results of a search engine that cannot be influenced by paid advertising. Is the site well-optimized for SEO? When there’s a correlation with direct traffic, it indicates strong brand awareness as many organic visits are generated by branded terms. <br />
                            <br />
                            <b>Desktop Paid Search</b> - Website that generates a large amount of traffic from paid search is spending advertising budgets on increasing brand awareness or targeting relevant audiences for specific products. <br />
                            <br />
                            <b>Display Ads</b> - Traffic sent from other domains via a known ad-serving platform (i.e., Doubleclick, Taboola). <br />
                            <br />
                            <b>Overall Mobile Search</b> - Mobile website that generates a large amount of traffic from both paid (targeting relevant audiences for specific products) and organic search (search results of a search engine).
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-6" name="question" class="question">
                        <label class="glossary-label" for="question-6">
                            <div>SEO</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            SEO: Search Engine Optimization. This section looks at how findable, relevant and popular the website is in user search queries and how search engines rank them. <br />
                            <br />
                            <b>Top Traffic Originating Keywords</b> - Keywords driving the largest amount of traffic to the website in relation to their search volume. <br />
                            <br />
                            <b>Top Keywords by Search Volume</b> - Keywords driving the largest absolute volume of traffic to the websites. <br />
                            <br />
                            <b>Average Keywords in Position</b> – Number keywords where brands website appears in the top 3 or top 10 Google results. <br />
                            <br />
                            <b>Average Positions</b> - Average ranking of your website URLs for the query or queries.
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-7" name="question" class="question">
                        <label class="glossary-label" for="question-7">
                            <div>PPC</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            <b>CPC</b> - Cost Per Click. Paid advertising through channels such as Google Ads charged based on number of clicks that the ads get.<br />
                            <br />
                            <b>Paid Search Traffic</b> - Traffic from paid promotions or advertisements i.e. Google Ads. <br />
                            <br />
                            <b>Traffic Generating Keywords</b> - Traffic coming to the brand’s website through the paid search by keyword<br />
                            <br />
                            <b>Bounce Rate</b> - Amount of visitors to any given website who navigate off of the site after viewing only one page, expressed as a percentage. <br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-8" name="question" class="question">
                        <label class="glossary-label" for="question-8">
                            <div>Social</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            ‘Social’ Tab investigates traffic coming from Referral and Social channels. <br />
                            <br />
                            <b>Referral</b> - Traffic directed to the website through another source (i.e. not a search engine) <br />
                            <br />
                            <b>Social</b> - Traffic from Social Media platforms, such as YouTube, Facebook, Pinterest, Reddit, Instagram, Twitter and others<br />
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrap-3">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-3" name="tabs" class="tab">
                <label class="glossary-label" for="tab-3">
                    <div>Customer Cohorts and Loyalty</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-9" name="question" class="question">
                        <label class="glossary-label" for="question-9">
                            <div>Cohorts</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            The graph and charts are fully interrogable allowing to view detailed information based on brand, gender or age group.<br />
                            <br />
                            <b>Relative Addressable Market</b> – Indicates relative market share capture by brand, expressed by proportion of traffic driven to a brand's website.<br />
                            <br />
                            <b>Audience Loyalty</b> – Percentage of visitors that only visited one website in the competitor set. The cross-visitation of audiences is used as a proxy for customer loyalty. <br />
                            <br />
                            <b>Split by Gender</b> – Gender distribution based on traffic. <br />
                            <br />
                            <b>Split by Age</b> - Age demographic information based on traffic. <br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-10" name="question" class="question">
                        <label class="glossary-label" for="question-10">
                            <div>Sentiment and Mentions</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            The 'Sentiment and Mentions' tab displays all online mentions that include the brand name or any of the brand's social media handles and/or any specified keywords.<br />
                            <br />
                            <b>Brand Reputation – Mentions by Sentiment</b> – Each mention gets a positive, neutral or negative classification assigned by an algorythm based on the content of the mention and how the brand's name fits in the context.<br />
                            <br />
                            <b>Net Sentiment – </b>The graph shows the balance of sentiment for a quick overview of the online conversation sentiment.<br />
                            <br />
                            <b>Total Mentions </b>- ‘Voice of Customer Trends’ graph to displays over time distribution of mentions with a specific sentiment.<br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-11" name="question" class="question">
                        <label class="glossary-label" for="question-11">
                            <div>Profiling</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            Online mentions profiling is displayed based on the data available.<br />
                            <br />
                            Some websites collect more details or personal information that others (i.e. twitter) where others do not collect any (i.e. Tumblr). <br />
                            <br />
                            Data displayed in this tab includes only the mentions that have profiling information available as opposed to all mentions. All mentions can be found in the ‘Sentiment and Mentions’ Tab.
                            <br />
                            <b>Data Collection </b>– A website might not collect profiling data, such as country, city or age, or the poster has disabled personal data sharing with third parties making that information inaccessible. <br />
                            <br />
                            <b>Mentions by Gender </b>– Due to those data restrictions if a mention has geolocation information assigned (i.e. City) but not demographic information (i.e. gender), the gender of the poster will be assigned as ‘unknown’ in the ‘Mentions by Gender’ doughnut chart.<br />
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-4">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-4" name="tabs" class="tab">
                <label class="glossary-label" for="tab-4">
                    <div>Commercial Performance</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-41" name="question" class="question">
                        <label class="glossary-label" for="question-41">
                            <div>Commercial Benchmarking</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            In the Channels Tab, you can discover the leading marketing channels generating traffic for your target asset and each of your chosen competitor set. In the tab you can see: <br />
                            <br />
                            <b>Direct</b> - Traffic from users directly entering the URL, using a bookmark or saved link, etc. Direct traffic can be used as a barometer for brand strength (awareness and demand). <br />
                            <br />
                            <b>Email</b> - Website that receives a large amount of traffic from email is likely to have a large loyal customer base that engages via an owned mailing list. <br />
                            <br />
                            <b>Referrals</b> - Website that receives a large amount of traffic from referrals is likely to have a strong affiliate strategy or enjoy significant media coverage. <br />
                            <br />
                            <b>Social</b> - A website that generates high and consistent traffic from social networks is likely to have a loyal community of users. Note: Traffic from Facebook, via the Facebook Ad Network, is tracked as social traffic. <br />
                            <br />
                            <b>Desktop Organic Search</b> - Refers to the search results of a search engine that cannot be influenced by paid advertising. Is the site well-optimized for SEO? When there’s a correlation with direct traffic, it indicates strong brand awareness as many organic visits are generated by branded terms. <br />
                            <br />
                            <b>Desktop Paid Search</b> - Website that generates a large amount of traffic from paid search is spending advertising budgets on increasing brand awareness or targeting relevant audiences for specific products. <br />
                            <br />
                            <b>Display Ads</b> - Traffic sent from other domains via a known ad-serving platform (i.e., Doubleclick, Taboola). <br />
                            <br />
                            <b>Overall Mobile Search</b> - Mobile website that generates a large amount of traffic from both paid (targeting relevant audiences for specific products) and organic search (search results of a search engine).
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-42" name="question" class="question">
                        <label class="glossary-label" for="question-42">
                            <div>CAGR</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            SEO: Search Engine Optimization. This section looks at how findable, relevant and popular the website is in user search queries and how search engines rank them. <br />
                            <br />
                            <b>Top Traffic Originating Keywords</b> - Keywords driving the largest amount of traffic to the website in relation to their search volume. <br />
                            <br />
                            <b>Top Keywords by Search Volume</b> - Keywords driving the largest absolute volume of traffic to the websites. <br />
                            <br />
                            <b>Average Keywords in Position</b> – Number keywords where brands website appears in the top 3 or top 10 Google results. <br />
                            <br />
                            <b>Average Positions</b> - Average ranking of your website URLs for the query or queries.
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-43" name="question" class="question">
                        <label class="glossary-label" for="question-43">
                            <div>Year on Year</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            <b>CPC</b> - Cost Per Click. Paid advertising through channels such as Google Ads charged based on number of clicks that the ads get.<br />
                            <br />
                            <b>Paid Search Traffic</b> - Traffic from paid promotions or advertisements i.e. Google Ads. <br />
                            <br />
                            <b>Traffic Generating Keywords</b> - Traffic coming to the brand’s website through the paid search by keyword<br />
                            <br />
                            <b>Bounce Rate</b> - Amount of visitors to any given website who navigate off of the site after viewing only one page, expressed as a percentage. <br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-44" name="question" class="question">
                        <label class="glossary-label" for="question-44">
                            <div>Absolutes</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            ‘Social’ Tab investigates traffic coming from Referral and Social channels. <br />
                            <br />
                            <b>Referral</b> - Traffic directed to the website through another source (i.e. not a search engine) <br />
                            <br />
                            <b>Social</b> - Traffic from Social Media platforms, such as YouTube, Facebook, Pinterest, Reddit, Instagram, Twitter and others<br />
                        </div>
                    </div>
                </div>
            </div>



            <div class="wrap-5">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-5" name="tabs" class="tab">
                <label class="glossary-label" for="tab-5">
                    <div>Platform Engagement</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-51" name="question" class="question">
                        <label class="glossary-label" for="question-51">
                            <div>Web</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            The 'Web' tab displays how the users interact with the website.<br />
                            <b>Pages Per Visit</b> - How many pages of the website the users visit during a single session.<br />
                            <br />
                            <b>Visit Duration in Seconds</b> - How much time users spend on the website during a single session.<br />
                            <br />
                            <b>Bounce Rate</b> - What percentage of users only visit one page during their session.<br />
                            <br />
                            <b>Mobile Traffic %</b> - What percentage of visits are performed on mobile devices (i.e. phones, tablets).<br />
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-52" name="question" class="question">
                        <label class="glossary-label" for="question-52">
                            <div>App</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            App statistics from Google Play Stor<br />
                            <b>Downloads</b> - Total number of app downloads for selected time range.<br />
                            <br />
                            <b>Average Daily Active Users</b> - Average number of daily active app users for selected time range.<br />
                            <br />
                            <b>Average Monthly Active Users</b> – Average number of monthly app users for selected time range. This is a deduplicated number showing the average unique monthly users.<br />
                            <br />
                            <b>Unique Installs</b> - Deduplicated number of downloads, this accounts for any uninstalls and reinstalls that users might perform.
                        </div>
                    </div>
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-53" name="question" class="question">
                        <label class="glossary-label" for="question-53">
                            <div>Web Performance</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            The 'Web Performance' tab displays how well optimised the website is.
                            <b>Time to Interactive</b> - The amount of time it takes for the page to become fully interactive.<br />
                            <br />
                            <b>Load Time</b> - The amount of time it takes for the page to fully load.<br />
                            <br />
                            <b>Structure</b> - Custom score representing how well the page is built for optimal web performance.<br />
                            <br />
                            <b>Performance</b> - Custom score representing how well the page performs from a user perspective. This score takes into account loading performance, interactivity and visual stability. <br />
                        </div>
                    </div>
                </div>
            </div>



            <div class="wrap-7">
                <input style="opacity: 0; margin:0px;" type="checkbox" id="tab-7" name="tabs" class="tab">
                <label class="glossary-label" for="tab-7">
                    <div>Data Limitations</div>
                    <div class="cross"></div>
                </label>
                <div class="questions">
                    <div class="question-wrap">
                        <input style="opacity: 0;" type="checkbox" id="question-7-1" name="question" class="question">
                        <label class="glossary-label" for="question-7-1">
                            <div>Channels</div>
                            <div class="cross"></div>
                        </label>
                        <div class="content">
                            In the Channels Tab, you can discover the leading marketing channels generating traffic for your target asset and each of your chosen competitor set. In the tab you can see: <br />
                            <br />
                            <b>Direct</b> - Traffic from users directly entering the URL, using a bookmark or saved link, etc. Direct traffic can be used as a barometer for brand strength (awareness and demand). <br />
                            <br />
                            <b>Email</b> - Website that receives a large amount of traffic from email is likely to have a large loyal customer base that engages via an owned mailing list. <br />
                            <br />
                            <b>Referrals</b> - Website that receives a large amount of traffic from referrals is likely to have a strong affiliate strategy or enjoy significant media coverage. <br />
                            <br />
                            <b>Social</b> - A website that generates high and consistent traffic from social networks is likely to have a loyal community of users. Note: Traffic from Facebook, via the Facebook Ad Network, is tracked as social traffic. <br />
                            <br />
                            <b>Desktop Organic Search</b> - Refers to the search results of a search engine that cannot be influenced by paid advertising. Is the site well-optimized for SEO? When there’s a correlation with direct traffic, it indicates strong brand awareness as many organic visits are generated by branded terms. <br />
                            <br />
                            <b>Desktop Paid Search</b> - Website that generates a large amount of traffic from paid search is spending advertising budgets on increasing brand awareness or targeting relevant audiences for specific products. <br />
                            <br />
                            <b>Display Ads</b> - Traffic sent from other domains via a known ad-serving platform (i.e., Doubleclick, Taboola). <br />
                            <br />
                            <b>Overall Mobile Search</b> - Mobile website that generates a large amount of traffic from both paid (targeting relevant audiences for specific products) and organic search (search results of a search engine).
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

</div>
<div id="faq" name="faq" class="form">

    <!-- FAQ -->
    <div class="form-content2" id="form-content">

        <div class="form-close" style="border-bottom: 0px"><span class="form-close-button2" id="form-close-button" style="color: white;">&times;</span></div>
        <div>
            <h3 style="color: white;">FAQ</h3>
        </div>
        &nbsp;
        <div class="wrap-1">
            <input style="opacity: 0; margin:0px;" type="checkbox" id="faq-1" name="tabs" class="tab">
            <label class="glossary-label" for="faq-1">
                <div>How do I change my subscription level?</div>
                <div class="cross"></div>
            </label>
            <div class="questions">
                <div class="question-wrap">
                    <div class="faqcontent">
                        To change your subscription level please contact the threesixty team through the support link at the top of your dashboard and a member of our team will reach out to you to change your subscription level as needed.
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-2">
            <input style="opacity: 0; margin:0px;" type="checkbox" id="faq-2" name="tabs" class="tab">
            <label class="glossary-label" for="faq-2">
                <div>How soon can I expect to see my new project on the dashboard?</div>
                <div class="cross"></div>
            </label>
            <div class="questions">
                <div class="question-wrap">
                    <div class="faqcontent">
                        Depending on the number of brands in the request you will see your new project on the dashboard within two hours of request submission.<br />
                        You will receive an email letting you know when it's ready for you to view.
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-3">
            <input style="opacity: 0; margin:0px;" type="checkbox" id="faq-3" name="tabs" class="tab">
            <label class="glossary-label" for="faq-3">
                <div>How long is the turn around for the M&A and Value Creation reports?</div>
                <div class="cross"></div>
            </label>
            <div class="questions">
                <div class="question-wrap">
                    <div class="faqcontent">
                        After submitting a request a member of onefourzero team will reach out to you to discuss the details of your project and will confirm the turn around time depending on the project size and requirements.
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>

</div>

<!-- begin::OG Scripts -->
<script type='text/javascript' src="/assets/js/og/landing-footer-script.js"></script>
<!-- end::OG Scripts -->
</body>
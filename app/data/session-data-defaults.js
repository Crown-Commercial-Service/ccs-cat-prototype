/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "portal_name": "Contract award service",
  "project_name": "Project not saved",
  "contracting_auth": "Department of work and pension",

  "potential_team_members": [
    {
      "fullname": "Andrew Simons",
      "email": "asimons@biz.com",
      "telephone": "070 0489 6010",
      "is_logged_in": false,
      "id": "2"
   },
   {
    "fullname": "Jake Allen",
    "email": "jallen@biz.com",
    "telephone": "070 0489 6040",
    "is_logged_in": false,
    "id": "5"
  },
    {
       "fullname": "John Gough",
       "email": "jgough@biz.com",
       "telephone": "070 0489 6000",
       "is_logged_in": true,
       "id": "1"
    },
  
   {
    "fullname": "Keira Burns",
    "email": "kburns@biz.com",
    "telephone": "070 0489 6020",
    "is_logged_in": false,
    "id": "3"
 },
 {
  "fullname": "Melissa Shah",
  "email": "mshah@biz.com",
  "telephone": "070 0489 6050",
  "is_logged_in": false,
  "id": "6"
},
 {
  "fullname": "Nathan Hill",
  "email": "nhill@biz.com",
  "telephone": "070 0489 6030",
  "is_logged_in": false,
  "id": "4"
}
],

  "agreements": [
    {
      "number": "RM6263",
      "name": "Digital Specialists and Programmes",
      "description": "Individual Digital, Data and Technology (DDaT) specialist roles and end-to-end digital transformation programmes.",
      "startDate": " 20 April 2022", //20/04/2022
      "endDate": " 19 January 2024", //19/01/2024
      "sectors": "Central government and all other UK public sector bodies, including local authorities, health, police, fire and rescue, education and devolved administrations.",
      "longDescHTML": "<p class='govuk-body'><strong>When to use this agreement</strong></p><p class='govuk-body'>You can use this agreement to find people with the full range of Digital, Data and Technology (DDaT) skills needed for a digital transformation/capability project, or to supply individual DDaT staff to work as part of an existing team or new team you’re setting up.</p><p class='govuk-body'>A digital transformation project might include redesigning an existing service, or designing a whole new service for your users or your internal teams, for example. It may involve rethinking about how an organisation could use technology, people or processes to create new business models or new revenue streams for the organisation (for example, building mobile applications or ecommerce platforms)</p><p class='govuk-body'>You might want to hire staff with DDaT skills to integrate into your organisation and help to achieve strategic objectives through a single project or multiple projects that may involve user research, design or building and supporting the service, for example.</p><p class='govuk-body'>You may also need DDaT staff for any strategic objectives or scope of services that have no clearly defined outcomes or deliverables that will enable digital transformation.</p><p class='govuk-body'>Products and services that are out of scope include (but are not limited to)non Digital, Data and Technology roles. <a href='#nottousefor'><strong>You can find out more information about what you cannot use this agreement for</strong></a>.</p><p class='govuk-body'>Buyers can find teams of digital specialists based on Digital, Data and Technology (DDaT) role definitions that meet the skills and competencies in the <a href='#' class='govuk-link--no-visited-state govuk-link' onclick='return false;'><strong>Skills Framework for the Information Age (SFIA).</strong></a></p><br><p class='govuk-body'><strong>Buyers can choose to use the following accountability models in their procurement:</strong></p><ul class='govuk-list govuk-list--bullet'><li><strong>Sole responsibility:</strong> the supplier takes full responsibility to deliver any milestones that the buyer needs to achieve. This is similar to the “outcomes” model available through RM1043.7 DOS 5 (digital outcomes and specialists 5). The supplier will need to accept the full risk or responsibility for delivery.</li><li><strong>Self directed teams:</strong> delivery teams will produce work that is requested by the buyer. This type of accountability model suits buyer-led agile development where the specifics of what will be delivered by the supplier is agreed closer to the point of delivery. Some of the risk is carried by the supplier</li><li><strong>Rainbow teams:</strong> where the supplier (or more than one supplier) provides a team of people to work alongside their existing staff. In this model the people, while managed at a high level by the supplier,may also be given direction at an operational level by someone from another organisation.</li></ul><p class='govuk-body'><strong>Further Information</strong></p><p class='govuk-body'>This agreement complements the future version of RM1043.8 DOS (Digital Outcomes andSpecialists) and Lot 2 Specialists won’t be available from RM1043.8.</p><p class='govuk-body'>You can buy from lot 1 and 2 using a one or two stage further competition. You can only buyusing direct award for lot 2. You cannot use an Auction to buy from this agreement.</p>",
      "notToUseForHtml":'<p class="govuk-body">DSP should not be used for the following types of procurement:</p><p class="govuk-body"><h3 class="govuk-heading-s">Health care sector buyers</h3></p> <p class="govuk-body">Health sector should continue to use <a href="#" onclick="return false;">RM6221 Digital Capability for Health (DCFH)</a> </p><p class="govuk-body"><h3 class="govuk-heading-s">Hosting, Support and Maintenance of Existing Live Applications Services </h3></p><p class="govuk-body">For hosting, support and maintenance of existing live applications you need to use <a class="govuk-link govuk-link--no-visited-state" href="#" onclick="return false;" >RM6100 Technology Services 3 </a> </p><p class="govuk-body"><h3 class="govuk-heading-s">Contingent Labour (Contractors)</h3></p>  <p class="govuk-body">For contingent labour (contractors) you will need to use <a class="govuk-link govuk-link--no-visited-state" href="#" onclick="return false;" > RM3749 Public Sector Resourcing</a> </p> <p class="govuk-body">If you need more information contact our customer service centre on 0345 410 2222</p>',
      "contractLengthHTML": "<p class='govuk-body'><strong>Lot 1:</strong> can be up to 4 years with the option for extension of 1 year or 25% of the original term you agree with the supplier</p><p class='govuk-body'><strong>Lot 2:</strong> can be up to 2 years with the option for extension of 6 months or 25% of the original term you agree with the supplier.</p>",
      "subtitle": "Individual Digital, Data and Technology (DDaT) specialist roles and end-to-end digital transformation programmes",
      "benefits": "<h3 class='govuk-heading-s'>Benefits of using this agreement:</h3><ul class='govuk-list govuk-list--bullet'><li>further competition provides best value for money</li><li>allows customers to buy the most up to date services in the market</li><li>ability to develop strategic partnership relationships with suppliers to improve services</li><li>quicker and simpler procurement process via direct award (Lot 2 only) and further competition (single or two-stage)</li></ul>",
      "updates": [
        {
          "date": "01 October 2021",
          "desc": " This framework has been extended for another 12 months until 7 November 2022"
        },
        {
          "date": "31 July 2021 ",
          "desc": "The General Data Protection Regulation (GDPR) was implemented on 25th May 2018. The Crown Commercial Service has updated all relevant agreements and the call off contract templates to include the necessary GDPR clauses. We have done this through a contract variation. Suppliers who have accepted the contract variation are listed in the Supplier Matrix on the <a href='#documents'>‘Documents’</a> tab below. Find out more about what CCS did to get ready for GDPR."
        },
        {
          "date": "22 June 2021",
          "desc": "<strong>Conference:</strong> Come and meet the team and find out more about this framework at our conference in the Excel centre in London on Tuesday 7 July 2021. To register for your place, <a href='#'>please sign up here.</a>"
        }
      ],
      "documentsLink":"includes/lotdescription/DSP/documents.html",
      "supplierList": "#",
      "lots": [
        {
          "number": "1",
          "name": "Programmes ",
          "startDate": "20 January 2022",
          "endDate": "DD month YYYY",
          "descriptionLink": "includes/lotdescription/DSP/lot1.html",
          "supplier-link":"",
          "offers": [6,7],
          "href" : "agreement/lot?no=1&id=RM6263",
          "hasEOI": false,
          "hasRFI":true,
          "hasOneStageFc":true,
          "hasTwoStageFc":true,
          "hasDirectAward":false      
        },
        {
          "number": "2",
          "name": "Specialists",
          "startDate": "20 January 2022",
          "endDate": "DD month YYYY",
          "descriptionLink": "includes/lotdescription/DSP/lot2.html",
          "supplier-link":"",
          "offers": [1,2,3,4,5,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
          "href" : "agreement/lot?no=2&id=RM6263",
          "hasEOI": false,
          "hasRFI":true,
          "hasOneStageFc":true,
          "hasTwoStageFc":true,
          "hasDirectAward":true
        }
      ]
    },
    {
      "number": "RM6187", //"RM6008",
      "name": "Management Consultancy Framework 3",
      "description": "Access to consultancy including business, strategy and policy, finance, HR, procurement, health/social care and community, infrastructure and environment.",
      "startDate": "24 August 2021",
      "endDate": "23 August 2025",
      "sectors": "Central government, the wider public sector, charities, voluntary and community organisations, education, health, local authorities, blue light (police, fire, ambulance and search and rescue), devolved administrations, social housing organisations.",
      "longDescHTML": "<p class='govuk-body'><strong>When to use this agreement</strong></p><p class='govuk-body css-margin-bottom-10'>You can use this agreement to access cost effective consultancy advice from a range of suppliers across 9 lots, that are split across the following areas of expertise:</p><ul class='govuk-list govuk-list--bullet'><li>business</li><li>strategy and policy</li><li>complex and transformation</li><li>finance </li><li>HR</li><li>procurement and supply chain</li><li>health, social care and community</li><li>infrastructure including transport</li><li>environmental sustainability and socio-economic development</li></ul><p class='govuk-body'>Read the lot descriptions for more detailed information.</p><br><p class='govuk-body'><strong>Further information</strong></p><p class='govuk-body'>This agreement replaces Management Consultancy Framework RM3745 and Management Consultancy Framework 2 RM6008.</p>",
      "notToUseForHtml":'<p class="govuk-body">MCF3 should not be used for the following types of procurement:</p><ul class="govuk-list govuk-list--nobullet ccs-join-schedule-list"><li><strong>Contingent Labour (Contractors)</strong><br>For contingent labour (contractors) you will need to use RM3749 Public Sector Resourcing</li><li><strong> Technology Services 3</strong><br>For hosting, support and maintenance of existing live applications you need to use RM6100 Technology Services 3</li><li><strong> Estate Management Services</strong><br>For end to end property management services including consultancy and disposal use <a class="govuk-link govuk-link--novisitedstate" href="https://www.crowncommercial.gov.uk/agreements/RM6168">RM6168 Estate management services.</a></li><li>  <strong> Project Management and Full Design Team Services </strong><br>  For project management, design, advise and other services to support delivery of property and constructions projects, including environmental services use <a class="govuk-link govuk-link--novisitedstate" href="https://www.crowncommercial.gov.uk/agreements/RM3714">RM3741 Project Management and Full Design Team Services.</a>  </li> <li>  <strong>Non Clinical Temporary and Fixed Term Staff</strong><br> For temporary and fixed term roles in roles like admin, clerical, catering and maintenance use <a class="govuk-link govuk-link--novisitedstate" href="https://www.crowncommercial.gov.uk/agreements/RM6160">RM6160 Non Clinical Temporary and Fixed Term Staff.</a> </li><li><strong>Flexible Resource Pool - Staff Bank</strong><br> For staff bank services for NHS contracting authorities use <a class="govuk-link govuk-link--novisitedstate" href="https://www.crowncommercial.gov.uk/agreements/RM6158">RM6158 Flexible Resource Pool - Staff Bank.</a></li></ul><p class="govuk-body">If you need more information contact our customer service centre on 0345 410 2222</p>',
      "contractLengthHTML": "<p class='govuk-body'>This agreement will run for 4 years and there will be no option to extend.</p><p class='govuk-body'>There is no maximum length for a call off contract under this agreement, but we recommend it should not be longer than 4 years.</p>",
      "subtitle":"Access to consultancy including business, strategy and policy, finance, HR, procurement, health/social care and community, infrastructure and environment.",
      "benefits": "<h3 class='govuk-heading-s'>Benefits of using this agreement:</h3><ul class='govuk-list govuk-list--bullet'><li>wide range of suppliers from SMEs to large multinationals</li><li>all suppliers are <a href='https://www.cyberessentials.ncsc.gov.uk/'>Cyber Essentials accredited</a></li><li>standard terms and conditions</li><li>competitive market rates</li><li>maximum rates fixed for the life of the agreement and your project providing budgetary control</li><li>no minimum or maximum value thresholds this means you can use the agreement regardless of project size</li><li>comprehensive customer guidance and templates</li><li>choice of pricing models including: time and materials, fixed, or risk and reward</li><li>a tool to help you shortlist suitable suppliers</li><li>dedicated and knowledgeable contract management team to support you</li></ul>",
      "updates": [],
      "documentsLink":"includes/lotdescription/MCF/documents.html",
      "supplierList": "https://www.digitalmarketplace.service.gov.uk/g-cloud/suppliers?_ga=2.145983412.1205525347.1596037285-714280332.1585644376",
      "lots": [
        {
          "number": "1",
          "name": "Business",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 1 Business",
          "descriptionLink": "includes/lotdescription/MCF/lot1.html",
          "offers": [30,32,33],
          "href" : "agreement/lot?no=1&id=RM6187",
          "hasEOI": true,
          "hasRFI": true,
          "hasOneStageFc":false,
          "hasTwoStageFc":true,
          "hasDirectAward":true
        },
        {
          "number": "2",
          "name": "Strategy & Policy",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 2 Strategy & Policy",
          "descriptionLink": "includes/lotdescription/MCF/lot2.html",
          "offers": [34],
          "href" : "agreement/lot?no=2&id=RM6187"
        },
        {
          "number": "3",
          "name": "Complex and Transformation",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 3 Complex and Transformation",
          "descriptionLink": "includes/lotdescription/MCF/lot3.html",
          "offers": [35,36],
          "href" : "agreement/lot?no=3&id=RM6187"
        },
        {
          "number": "4",
          "name": "Finance",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 4 Finance",
          "descriptionLink": "includes/lotdescription/MCF/lot4.html",
          "offers": [37],
          "href" : "agreement/lot?no=4&id=RM6187"
        },
        {
          "number": "5",
          "name": "HR(human resources)",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 5 HR",
          "descriptionLink": "includes/lotdescription/MCF/lot5.html",
          "offers": [37],
          "href" : "agreement/lot?no=5&id=RM6187"
        },
        {
          "number": "6",
          "name": "Procurement and Supply Chain",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 6  Procurement & Supply Chain",
          "descriptionLink": "includes/lotdescription/MCF/lot6.html",
          "offers": [37],
          "href" : "agreement/lot?no=6&id=RM6187"
        },
        {
          "number": "7",
          "name": "Health, Social Care and Community",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 7  Health, Social Care & Community",
          "descriptionLink": "includes/lotdescription/MCF/lot7.html",
          "offers": [37],
          "href" : "agreement/lot?no=7&id=RM6187"
        },
        {
          "number": "8",
          "name": "Infrastructure Including Transport",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 8 Infrastructure including Transport",
          "descriptionLink": "includes/lotdescription/MCF/lot8.html",
          "offers": [37],
          "href" : "agreement/lot?no=8&id=RM6187"
        },
        {
          "number": "9",
          "name": "Environmental Sustainability & Socio-Economic Development",
          "startDate": "DD month yyyy",
          "endDate": "3 september 2025",
          "description": "Lot 9 Environmental Sustainability & Socio-Economic Development",
          "descriptionLink": "includes/lotdescription/MCF/lot9.html",
          "offers": [37],
          "href" : "agreement/lot?no=9&&id=RM6187"
        }
      ]
    } /* ,
    {
      "number": "RM1557.12",
      "name": "G-Cloud 12",
      "description": "Purchase cloud-based computing services such as hosting, software and cloud support, including many off-the-shelf, pay-as-you-go cloud solutions.",
      "startDate": "28/09/2020",
      "endDate": "27/09/2022",
      "sectors": "central government, wider public sector, local government, health, charity, bluelight (fire, police, ambulance) and education",
      "longDescHTML": "<p class='govuk-body'>G-Cloud 12 helps customers in the UK public sector find and buy cloud computing services. </p><p class='govuk-body'>This agreement will run for 12 months from 28 September 2020. We may extend the agreement up to a maximum of 12 months after this date. </p><p class='govuk-body'>Any call-off will have an initial maximum duration of 24 months. You are allowed two extension options of up to 12 months each and must specify this in the initial contract terms. </p><p class='govuk-body'>The total call-off length should not be for more than 48 months (4 years). This includes the initial call-off duration plus the two extension options. Certain restrictions apply to central government contract extensions. </p><p class='govuk-body'>Digital Marketplace has a constantly updated <a href='https://www.digitalmarketplace.service.gov.uk/g-cloud/suppliers?_ga=2.145983412.1205525347.1596037285-714280332.1585644376'>list of the suppliers on this framework</a>. </p><p class='govuk-body'>If you would like to see our spend data on how our customers have used this agreement then take a look at our <a href='https://app.powerbi.com/view?r=eyJrIjoiNTEyMTZhZDAtZGNiNi00OWQxLWI5ODYtMjg1ZWNlMmNkODVhIiwidCI6IjlmOGMwZDc5LTNlODctNGNkMy05Nzk5LWMzNDQzMTQ2ZWE1ZSIsImMiOjh9'>online dashboard</a>. For more information <a href='mailto:cloud_digital@crowncommercial.gov.uk'>email the team</a>.</p>",
      "contractLengthHTML": "<p class='govuk-body'>We don\'t seem to have any copy for this. </p>",
      "benefits": [
        "access to over 38,000 services and over 5,200 suppliers",
        "scalable services: pay for what you use, and increase or reduce what you need easily",
        "quick and easy route to market",
        "reduced costs and reduced total cost of ownership compared to running your own service in house",
        "access to the latest technology and innovation with every refresh of the G-cloud agreement",
        "change service provider easily"
      ],
      "updates": [
        {
          "date": "23/04/2021",
          "desc": "We are extending G-cloud 12, the new expiry date is now 27 September 2022."
        }
      ],
      "supplierList": "https://www.digitalmarketplace.service.gov.uk/g-cloud/suppliers?_ga=2.145983412.1205525347.1596037285-714280332.1585644376",
      "lots": [
        {
          "number": "1",
          "name": "Cloud Hosting",
          "startDate": "20/01/2022",
          "endDate": "27/09/2022",
          "description": "Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) that can help you do at least one of the following: deploy, manage and run software and/or provision and use of processing, storage or network resources.",
          "offers": [26,27]
        },
        {
          "number": "2",
          "name": "Cloud Software",
          "startDate": "20/01/2022",
          "endDate": "27/09/2022",
          "description": "Software as a Service (SaaS) applications, usually accessed over the internet or private network and hosted in the cloud.",
          "offers": [28]
        },
        {
          "number": "3",
          "name": "Cloud Support",
          "startDate": "20/01/2022",
          "endDate": "27/09/2022",
          "description": "Cloud support to help set up and maintain cloud software or hosting services.",
          "offers": [29]
        }
      ]
    },*/
  ],

  "locations": [
    {
      "value": 1,
      "text": "North East England"
    },
    {
      "value": 2,
      "text": "North West England"
    },
    {
      "value": 3,
      "text": "Yorkshire and the Humber"
    },
    {
      "value": 4,
      "text": "East Midlands"
    },
    {
      "value": 5,
      "text": "West Midlands"
    },
    {
      "value": 6,
      "text": "East of England"
    },
    {
      "value": 7,
      "text": "London"
    },
    {
      "value": 8,
      "text": "South East England"
    },
    {
      "value": 9,
      "text": "South West England"
    },
    {
      "value": 10,
      "text": "Wales"
    },
    {
      "value": 11,
      "text": "Scotland"
    },
    {
      "value": 12,
      "text": "Northern Ireland"
    },
    {
      "value": 13,
      "text": "No specific location, for example they can work remotely"
    }
  ],

  "suppliers": [
    {
      "id": 1,
      "name": "Accenture (UK) Limited",
      "description": "Accenture embraces the power of change to create 360° value and shared success in the U.K. for our clients, people, shareholders, partners and communities.",
      "offers": [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29],
      "locations": [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
      "id": 2,
      "name": "Actica Consulting",
      "description": "Actica provides a complete range of independent consultancy services to central government departments and agencies.",
      "offers": [1,2,5,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29],
      "locations": [1,2,5,6,7,8,9,11,12]
    },
    {
      "id": 3,
      "name": "Agile Byte Ltd",
      "description": "Agile Byte is a small, dedicated and hard working IT delivery company based in London. We specialise in client side services that help you get the best out of technology and your suppliers. We focus on building effective partnerships, advising our clients on solutions that meet their business needs and deliver real business value.",
      "offers": [2,3,5,16,17,18,25,26,27],
      "locations": [6,7,8]
    },
    {
      "id": 4,
      "name": "Headforwards",
      "description": "Headforwards is an outsource software development company. Using Agile principles and dedicated teams, Headforwards delivers software that creates real value.",
      "offers": [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29],
      "locations": [1,2,3,4,5]
    },
    {
      "id": 5,
      "name": "nFocus Ltd",
      "description": "nFocus is the longest established UK-owned independent test consultancy and we are proud that our clients continue to work with us year after year.",
      "offers": [3,4],
      "locations": [7,8]
    },
    {
      "id": 6,
      "name": "Opencast Software Europe Ltd",
      "description": "We provide solutions, either as an outsourced software engineering team, or by adding horsepower to an existing in-house IT team. Technology consultancy. We help leadership teams to calibrate the nature of the challenges they are facing. We then deliver the strategies, architectures and solutions required to deliver the agreed improvements.",
      "offers": [6,8,9,12,14,15,16,17,22,23,26,27],
      "locations": [4,5,6,7,8,9,10,11,12]
    },
    {
      "id": 7,
      "name": "Channel 3 Consulting",
      "description": "Our services help you harness the power of digital. The digital health and care landscape is changing. With unprecedented demand for health and care, growing workforce pressures and new technologies constantly coming to market, it can be difficult knowing how and where to start with an ambitious transformation programme. Our services are designed to help.",
      "offers": [6,7,16,17,18,19,20,21,22,25],
      "locations": [1,2,3,6,7,8,9,10,11,12]
    },
    {
      "id": 8,
      "name": "Equiniti ICS Ltd",
      "description": "EQ ICS develop innovative case and document management solutions for the UK and Ireland private and public sectors.",
      "offers": [1,2,4,5,6,7,8,9,11,12,13,14,16,17,18,21,22,23,24,25],
      "locations": [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
      "id": 9,
      "name": "Rowe IT Limited",
      "description": "Customer focused teams, helping clients meet their IT challenges head-on We provide software engineering, solution architecture and systems integration to the public and private sectors. Our high quality consultants have a vast resource of experience and are able to make sense of your most difficult IT challenges.",
      "offers": [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
      "locations": [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  ],
  "offers": [
    {
      "id": 1,
      "title": "Agile coach",
      "description": "Help individuals, teams and managers be as effective as possible by embedding an agile culture."
    },
    {
      "id": 2,
      "title": "Content designer",
      "description": "Ensure content is as clear and simple as possible to meet user needs."
    },
    {
      "id": 3,
      "title": "Data architect",
      "description": "Set the vision for the organisation's use of data, through data design, to meet business needs."
    },
    {
      "id": 4,
      "title": "Performance analyst",
      "description": "Specify, collect and present the key performance data and analysis for a service."
    },
    {
      "id": 5,
      "title": "Technical Architect",
      "description": "Break down complex problems and identify steps towards solutions. Coach individuals and engage with non-technical people at all levels of seniority. Write code as a senior member of the development team."
    },
    {
      "id": 6,
      "title": "Software Development",
      "description": "Take a project from concept to delivery with a complete software development team."

    },
    {
      "id": 7,
      "title": "Testing and Auditing",
      "description": "Ensure your software product is defect free and matches your stated requirements."
    },
    {
      "id": 8,
      "title": "Testing Suites",
      "description": "Observe and record users interacting with your software products in a controlled environment."
    },
    {
      "id": 9,
      "title": "Testing Participants",
      "description": "Engage users with varying degrees of experience and ability to test your software product."
    },
    {
      "id": 10,
      "title": "Testing Supivisor",
      "description": "Oversee user testing sessions to ensure that both the participants and the software producer get the most value possible."
    },
    {
      "id": 11,
      "title": "Business analyst",
      "description": "Analyse a service or organisation's business processes and systems. Specify, collect and present findings."
    },
    {
      "id": 12,
      "title": "Communications manager",
      "description": "Develop user-focused messages, measurement techniques and communication approaches. Establish integrated communication plans across a range of digital channels to ensure that communication is ongoing, open and clear."
    },
    {
      "id": 13,
      "title": "Cyber security consultant",
      "description": "Minimise the chance of data or information systems security breaches. Ensure information is protected against unauthorised or unintended access. Put systems in place to prevent data destruction or disruption."
    },
    {
      "id": 14,
      "title": "Data engineer",
      "description": "Design, build, test and maintain data management systems, making sure they meet business requirements and user needs."
    },
    {
      "id": 15,
      "title": "Data scientist",
      "description": "Identify complex business problems while working with policy and operations teams to understand where data can add value."
    },
    {
      "id": 16,
      "title": "Delivery manager",
      "description": "Set up a team for successful delivery. Remove obstacles, track progress, facilitate meetings and help the team organise itself."
      },
      {
      "id": 17,
      "title": "Designer",
      "description": "Provide user-centred interaction design, service design and graphic design expertise."
      },
      {
      "id": 18,
      "title": "Developer",
      "description": "Build software that supports user needs. Continually improve the service by identifying new tools and techniques, removing technical bottlenecks, and adapting and maintaining code."
      },
      {
      "id": 19,
      "title": "Portfolio manager",
      "description": "Lead a digital portfolio of projects and programmes."
      },
      {
      "id": 20,
      "title": "Product manager",
      "description": "Lead the delivery and continuous improvement of one or more digital products or platforms."
      },
      {
      "id": 21,
      "title": "Programme manager",
      "description": "Manage and organise groups of related projects so they work together to achieve a strategic objective."
      },
      {
      "id": 22,
      "title": "Quality assurance analyst",
      "description": "Ensure the quality of the digital service by testing it manually and writing automated tests covering a range of conditions."
      },
      {
      "id": 23,
      "title": "Service manager",
      "description": "Develop and deliver an effective user-focused digital service. Manage the full product lifecycle, including user research, design, delivery and continuous improvement."
      },
      {
      "id": 24,
      "title": "User researcher",
      "description": "Design, conduct and analyse user research using a range of techniques, such as one-to-one interviews or usability tests."
      },
      {
      "id": 25,
      "title": "Web operations engineer",
      "description": "Run the production systems to help the development team build software that is easy to operate, scale and secure."
      },
      {
      "id": 26,
      "title": "Infrastructure as a Service (IaaS)",
      "description": "Run your internally-produced software products on a remote platform that is easy to operate, scale and secure."
      },
      {
      "id": 27,
      "title": "Platform as a Service (PaaS)",
      "description": "Run your internally-produced software products in remote containers that are easy to operate, scale and secure."
      },
      {
      "id": 28,
      "title": "CRM SaaS",
      "description": "Run all your customer relationship mamagement on a remotely-managed system."
      },
      {
      "id": 29,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 30,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 32,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 33,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 34,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 35,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 36,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      },
      {
      "id": 37,
      "title": "Cloud Support",
      "description": "Support for remoted web servers, Docker containers and JamStack."
      }
  ],

  "DDat_roles": [
    {
      "cluster_name":"Data",
      "id":"1",
      "job_families":[
        {
        "name":"Data analyst",
        "description":"[  DDAT family description ]",
        "roles": [
          {
            "name":"Associate analyst"
          },
          {
            "name":"Data analyst"
          },
          {
            "name":"Senior data analyst"
          }, {
            "name":"Principal data analyst"
          }
        ]
        },
        {
          "name":"Data Engineer",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Data engineer"
            },
            {
              "name":"Senior data engineer"
            },
            {
              "name":"Lead data engineer"
            }, {
              "name":"Head of data engineering"
            }
          ]
        },
        {
          "name":"Data Scientist",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Trainee Data Scientist"
            },
            {
              "name":"Data Scientist"
            },
            {
              "name":"Junior Data Scientist"
            },
            {
              "name":"Senior Data Scientist"
            }, {
              "name":"Head of Data Scientist"
            }
          ]
        },
        {
          "name":"Performance analyst",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Associate performance analyst"
            },
            {
              "name":"Performance analyst"
            },
            {
              "name":"Senior performance analyst"
            },
            {
              "name":"Lead performance analyst"
            }, {
              "name":"Head of performance analyst"
            }
          ]
        }
      ]
    },
    {
      "cluster_name":"IT Operations",
      "id":"2",
      "job_families":[
        {
        "name":"Application Operations Engineer",
        "description":"[  DDAT family description ]",
        "roles": [
          {
            "name":"Associate application operations engineer"
          },
          {
            "name":"Application operations engineer"
          },
          {
            "name":"Senior application operations engineer"
          }, 
          {
            "name":"Lead application operations engineer"
          },
          {
            "name":"Principal application operations engineer"
          }
        ]
        },
        {
          "name":"Business Relationship Manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Business relationship manager"
            },
            {
              "name":"Senior business relationship manager"
            },
            {
              "name":"Lead business relationship manager"
            }
          ]
        },
        {
          "name":"Change and Release Manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Configuration analyst"
            },
            {
              "name":"Configuration analyst"
            },
            {
              "name":"Change and release manager"
            }
          ]
        },
        {
          "name":"Command and Control",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Operations analyst"
            },
            {
              "name":"Senior operations analyst"
            },
            {
              "name":"Operational control manager"
            },
            {
              "name":"Head of command and control"
            }
          ]
        },
        {
          "name":"End user computing engineer",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Associate end user computing engineer"
            },
            {
              "name":"End user computing engineer"
            },
            {
              "name":"Senior end user computing engineer"
            },
            {
              "name":"Lead end user computing engineer"
            }, {
              "name":"Principal end user computing engineer"
            }
          ]
        },
        {
          "name":"Infrastructure operations engineer",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Associate infrastructure operations engineer"
            },
            {
              "name":"Infrastructure operations engineer"
            },
            {
              "name":"Senior infrastructure operations engineer"
            },
            {
              "name":"Lead infrastructure operations engineer"
            }, {
              "name":"Principal infrastructure operations engineer"
            }
          ]
        },
        {
          "name":"Incident Manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Incident manager"
            },
            {
              "name":"Major incident manager"
            }
          ]
        },
        {
          "name":"Problem manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Problem analyst"
            },
            {
              "name":"Problem manager"
            }
          ]
        },
        {
          "name":"Service desk manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Service desk analyst"
            },
            {
              "name":"Service desk manager"
            },
            {
              "name":"Senior service desk analyst"
            },
            {
              "name":"Head of service desk"
            }
          ]
        },
        {
          "name":"Service transition manager",
          "description":"[  DDAT family description ]",
          "roles": [
            {
              "name":"Service acceptance analyst"
            },
            {
              "name":"Service readiness analyst"
            },
            {
              "name":"Service transition manager"
            },
            {
              "name":"Lead service transition manager"
            }
          ]
        },

      ]
    }
  ],

  //Supplier size can be SME ( small, medium, micro) or Non-SME
  "agreement_suppliers_list": [
    {
      "id":1,
      "legal_name":"AECOM LIMITED",
      "trading_name":"AECOM Ltd",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/1826/aecom-limited",
    },
    {
      "id":2,
      "legal_name":"Cognizant Worldwide Limited",
      "trading_name":"Cognizant Worldwide Limited",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/352/cognizant-worldwide-limited",
    },
    {
      "id":3,
      "legal_name":"Hippo Digital Limited",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/5308/hippo-digital-limited",
    },
    {
      "id":4,
      "legal_name":"IBM UNITED KINGDOM LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/316/ibm-united-kingdom-limited",
    },
    {
      "id":5,
      "legal_name":"INFORMED SOLUTIONS LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/799/informed-solutions-limited",
    },
    {
      "id":6,
      "legal_name":"KAINOS SOFTWARE LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/64/kainos-software-limited",
    },
    {
      "id":7,
      "legal_name":"MASTEK (UK) LTD.",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/398/mastek-uk-ltd",
    },
    {
      "id":8,
      "legal_name":"NETCOMPANY UK LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/324/netcompany-uk-limited",
    },
    {
      "id":9,
      "legal_name":"Net Consulting Ltd",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/348/net-consulting-ltd",
    },
    {
      "id":10,
      "legal_name":"Networkology Ltd",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/3699/networkology-ltd",
    },
    {
      "id":11,
      "legal_name":"OCO GLOBAL LIMITED",
      "trading_name":"OCO Global",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/9950/oco-global-limited",
    },
    {
      "id":12,
      "legal_name":"OFFICE FOR PUBLIC MANAGEMENT LIMITED",
      "trading_name":"Traverse Ltd",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/305/office-for-public-management-limited",
    },
    {
      "id":13,
      "legal_name":"ORACLE CORPORATION UK LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/2538/oracle-corporation-uk-limited",
    },
    {
      "id":14,
      "legal_name":"P.S. COMPUTER SERVICES LIMITED",
      "trading_name":" Parker Shaw",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/166/ps-computer-services-limited",
    },
    {
      "id":15,
      "legal_name":"PA CONSULTING SERVICES LIMITED",
      "trading_name":"PA Consulting Group",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/318/pa-consulting-services-limited",
    },
    {
      "id":16,
      "legal_name":"PALLADIUM INTERNATIONAL LIMITED",
      "trading_name":"Cognizant Worldwide Limited",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/9644/palladium-international-limited",
    },
    {
      "id":17,
      "legal_name":"PEOPLETOO LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/770/peopletoo-limited",
    },
    {
      "id":18,
      "legal_name":"ROCK I.T. SPECIALISTS LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/8497/rock-it-specialists-limited",
    },
    {
      "id":19,
      "legal_name":"RSM Risk Assurance Services LLP",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/5359/rsm-risk-assurance-services-llp",
    },
    {
      "id":20,
      "legal_name":"SAP (UK) Limited",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/2540/sap-uk-limited",
    },
    {
      "id":21,
      "legal_name":"SBC SYSTEMS (UK) LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/2161/sbc-systems-uk-limited",
    },
    {
      "id":22,
      "legal_name":"SPECIALIST COMPUTER CENTRES PLC",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/330/specialist-computer-centres-plc",
    },
    {
      "id":23,
      "legal_name":"TATA CONSULTANCY SERVICES LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/9699/tata-consultancy-services-limited",
    },
    {
      "id":24,
      "legal_name":"TELEFONICA UK LIMITED",
      "trading_name":"O2",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/1170/telefonica-uk-limited",
    },
    {
      "id":25,
      "legal_name":"TOTAL COMPUTER NETWORKS LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/373/total-computer-networks-limited",
    },
    {
      "id":26,
      "legal_name":"TRINITY IT CONSULTING LIMITED",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/189/trinity-it-consulting-limited",
    },
    {
      "id":27,
      "legal_name":"UKFast.Net Limited",
      "trading_name":"UKFast",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/2632/ukfastnet-limited",
    },
    {
      "id":28,
      "legal_name":"VODAFONE LIMITED",
      "trading_name":"",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/1482/vodafone-limited",
    },
    {
      "id":29,
      "legal_name":"Worldline IT Services UK Limited",
      "trading_name":"fuelGenie (Worldline IT Services UK Limited)",
      "size":"Large",
      "link": "https://www.crowncommercial.gov.uk/suppliers/722/worldline-it-services-uk-limited"
    },
    {
      "id":30,
      "legal_name":"Zellis UK Limited",
      "trading_name":"",
      "size":"SME",
      "link": "https://www.crowncommercial.gov.uk/suppliers/1225/zellis-uk-limited"
    }
  ]
}

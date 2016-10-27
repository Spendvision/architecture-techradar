//This is the title for your window tab, and your Radar
document.title = "Fraedom Architecture Team Technology Radar (October 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    { "r": 100, "name": "Communicate" }
    , { "r": 200, "name": "Collaborate" }
    , { "r": 300, "name": "Assess" }
    , { "r": 400, "name": "Hold" }
    // ,{"r":500,"name":"Possible Extra if you want it"}
];



//This is your raw data
//
// Key
//
//movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there"s no "avoid" ring, but throw things in the hold ring that people shouldn"t use.

var h = 1000;
var w = 1200;

// r for the start of each ring (+5 so we're not right on the line)
var communicate =  5;
var collaborate = 105;
var assess = 205;
var hold = 305;

//  t for the start and end of each quadrant
var tools_start = 0;
var techniques_start = 90;
var platforms_start = 180;
var plans_start = 270;

//                        90
//                        +
//                    %%% |  %%%
//  Techniques   %%%      |       %%%
//                        |               Tools
//           %%%          |           %%%
//                        |
//          %%%           |             %%%
//                        |
//  180 +-------------------------------------+ 0
//                        |
//          %%%           |            %%%
//                        |
//             %%%        |         %%%
//                        |             Plans
//       Platforms   %%%  |  %%%
//                        +
//                       270




var radar_data = [
    {
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [                      
            { "name": "Build Pipelines", "pc": { r: communicate + 5, t: techniques_start + 5 }, "movement": "c" },
            { "name": "Actors", "pc": { "r": collaborate + 10, "t": techniques_start + 10 }, "movement": "c" },
            { "name": "Database-based integration", "pc": { "r": assess + 15, "t": techniques_start + 15 }, "movement": "c" },
            { "name": "DevOps", "pc": { "r": hold + 20, "t": techniques_start + 20 }, "movement": "c" },
            { "name": "Continuous Deployment", "pc": { "r": communicate + 25, "t": techniques_start + 25 }, "movement": "c" },
            { "name": "Platform Roadmaps", pc: { r: collaborate + 30, t: techniques_start + 30 }, "movement": "c" },
            { "name": "Microservices", "pc": { "r": assess + 35, "t": techniques_start + 35 }, "movement": "c" },
            { "name": "Reactive Programming", "pc": { "r": hold + 40, "t": techniques_start + 40 }, "movement": "c" },
            { "name": "Backends For Frontends", "pc": { "r": communicate + 45, "t": techniques_start + 45 }, "movement": "c" } 
        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            { "name": "Structurizr", pc: { r: communicate + 5, t: tools_start + 5 }, "movement": "t" },
            { "name": "Docker", pc: { r: collaborate + 10, t: tools_start + 10 }, "movement": "c" },
            { "name": "Akka", pc: { r: assess + 15, t: tools_start + 15 }, "movement": "c" },
            { "name": "Chef", pc: { r: hold + 20, t: tools_start + 20 }, "movement": "c" },
            { "name": "Octopus Deploy in Production", pc: { r: communicate + 25, t: tools_start + 25 }, "movement": "c" },
            { "name": "Team City", pc: { r: collaborate + 30, t: tools_start + 30 }, "movement": "c" },
            {"name": "Concourse.ci", pc: { r: assess + 35, t: tools_start + 35 }, "movement": "c" },
            { "name": "Pact", pc: { r: hold + 40, t: tools_start + 40 }, "movement": "c" },
            { "name": "Swagger", pc: { r: communicate + 45, t: tools_start + 45 }, "movement": "c", "domain": "mobile" },
            { "name": "Linux", pc: { r: collaborate + 50, t: tools_start + 50 }, "movement": "t" },
            { "name": "XSLT", pc: { r: assess + 55, t: tools_start + 55 }, "movement": "c" },
            { "name": "New functionality added via Keystone", pc: { r: hold + 60, t: tools_start + 60 }, "movement": "c" },
            { "name": "New Stored Procedures", pc: { r: communicate + 65, t: tools_start + 65 }, "movement": "c", "domain": "back-end" },
            { "name": "Consul", pc: { r: collaborate + 70, t: tools_start + 70 }, "movement": "c" },
            { "name": "Redis", pc: { r: assess + 75, t: tools_start + 75 }, "movement": "c" }            
        ]
    },
    {
        "quadrant": "Platforms",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [            
            { "name": "Azure", "pc": { "r": communicate + 10, "t": platforms_start + 10 }, "movement": "c" },
            { "name": "AWS", "pc": { "r": collaborate + 20, "t": platforms_start + 20 }, "movement": "c" },
            { "name": "App Containers", "pc": { "r": assess + 30, "t": platforms_start + 30 }, "movement": "c" }
        ]
    },
    {
        "quadrant": "Plans",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            { "name": "Go", pc: { r: communicate + 20, t: plans_start + 45 }, "movement": "c" },
            { "name": ".NET Core", "pc": { "r": collaborate + 40, "t": plans_start + 45 }, "movement": "t" },                        
            { "name": "Public API", pc: { r: assess + 60, t: plans_start + 45 }, "movement": "c" },
            { "name": "Event Storming", "pc": { "r": communicate + 80, "t": plans_start + 45 }, "movement": "c" },                                    
        ]
    }
];

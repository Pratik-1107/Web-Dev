const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const AllmatchObj = require("D:\\PRATIK\\WEB DEV\\Activity 3\\AllMatches.js");

//home page
const iplPath = path.join(__dirname,"ipl");
dirCreator(iplPath);
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        // console.log(html);
        extractLink(html);
    }
}

function extractLink(html){
    let $ = cheerio.load(html);  // $ = searchTool
    let anchorElem = $("a[data-hover='View All Results']");
    let link = anchorElem.attr("href");
    //console.log(link);
    let fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);
    AllmatchObj.gAlmatches(fullLink);
}

function dirCreator(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath);
    }
}

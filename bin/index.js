const getTime = (timeInput) => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    
    if (timeInput) {
    	today  = new Date("2021-01-01 " + timeInput);
      h = today.getHours();
    	m = today.getMinutes();
    }
  	
    if (convertHourToName(h) == "unknown" || convertHourToName(m) == "unknown"  ) {
        console.log("Invalid time provided")
    } else {
        let time = `It's ${convertHourToName(h)} ${returnOh(m) && returnOh(m)} ${convertNumberToName(m) && convertNumberToName(m)} ${returnMeridiem(h)}`
        return time.replace(/\s+/g, ' ').trim()
    }
}

const returnMeridiem = (hour) => {
    if (hour <= 11) {
        return "am";
    }
    return "pm";
}

const returnOh = (minutes) => {
    if (minutes >= 1 && minutes <= 9) {
        return "oh";
    }
    return "";
}

const  convertHourToName = (num) => {
    if (num > 12) {
        num -= 12;
    }
    // default to 12 when conversion returns 0
    if (num == 0) {
    	num = 12
    }
    return convertNumberToName(num);
}

const  convertNumberToName = (num) => {
    var lowNames = [
      "zero", 
      "one", 
      "two", 
      "three",
      "four", 
      "five", 
      "six", 
      "seven", 
      "eight", 
      "nine", 
      "ten", 
      "eleven", 
      "twelve", 
      "thirteen", 
      "fourteen", 
      "fifteen", 
      "sixteen", 
      "seventeen", 
      "eighteen", 
      "nineteen"
    ];
    var tensNames = [
      "twenty", 
      "thirty", 
      "forty", 
      "fifty", 
      "sixty", 
      "seventy", 
      "eighty", 
      "ninety"
    ];
    
    var tens, ones, result;
    
    if (num < lowNames.length) {
        result = lowNames[num] == "zero" ? "":lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
}

module.exports = {
    convertNumberToName,
    getTime
}


const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <time>")
 .option("t", { alias: "time", describe: "Enter time", type: "string" })
 .argv;

console.log(getTime(options.time));

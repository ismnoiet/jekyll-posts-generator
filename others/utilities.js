var fs = require('fs');

function getCurrentDate(){
	var today = new Date(),
		dd = today.getDate(),
		mm = today.getMonth()+1, //January is 0!
		yyyy = today.getFullYear();

	// because if day < 10 then we add a leading 0 to get the format 09 instead of 9
	if(dd<10) {
	    dd='0'+dd
	} 
	//same reason as previously said
	if(mm<10) {
	    mm='0'+mm
	} 	
	today = [yyyy,mm,dd];
	return today;	
}

function fromObjToHeader(obj){
	var str  = '---,' + JSON
		  			.stringify(obj)
		                        .replace('{','')
		                        .replace(/":"/g,' : ')
		                        .replace(/"/g,'')
		                        .replace('}','') + ',---';

    return str.split(',')
  			  .join('\n');		                        
}


function write(filename,content){
	fs.writeFile(filename, content, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	}); 	
}


function fileExists(filename){	
	try{
		fs.accessSync(filename, fs.F_OK);
		return true;
	}
	catch(e){
		// inaccesible file
		return false;
	}	
}

module.exports = {
	getCurrentDate:getCurrentDate,
	fromObjToHeader:fromObjToHeader,
	fileExists:fileExists,
	write:write
}
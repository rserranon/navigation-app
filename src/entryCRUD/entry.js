export class Entry{
	// Related to Entry visuals
	heading = 'Entry'
	entryType = 'Visit'
	fontAwesomeIcon = 'fa fa-hospital-o'
	isVisit		 = false
	isDiagnose   = false
	isStudy	  	 = false
	isTreatment  = false
	isProcedure  = false

//  to store Form Files
	filesArray = []
	selectedFiles;


	constructor() {
      this.file = ''	
    }

	resetEntries () {
		this.isVisit	  = false
		this.isDiagnose   = false
		this.isStudy	  = false
		this.isTreatment  = false
		this.isProcedure  = false
	}

	activate(){
		this.resetEntries()
		this.isVisit = true
		this.imageLoading = false
	}

	toggleVisit () {
		this.resetEntries();
		this.isVisit = true;
		this.entryType = 'Visit';
		this.fontAwesomeIcon = 'fa fa-hospital-o';	
	};

	toggleDiagnose () {
		this.resetEntries();
		this.isDiagnose = true;
		this.entryType = 'Diagnose';
		this.fontAwesomeIcon = 'fa fa-user-md';		
	};

	toggleStudy () {
		this.resetEntries();
		this.isStudy = true;
		this.entryType = 'Study';
		this.fontAwesomeIcon = 'fa fa-medkit';
	};

	toggleTreatment () {
		this.resetEntries();
		this.isTreatment = true;
		this.entryType = 'Treatment';
		this.fontAwesomeIcon = 'fa fa-medkit';	
	};

	toggleProcedure () {
		this.resetEntries();
		this.isProcedure = true;
		this.entryType = 'Procedure';
		this.fontAwesomeIcon = 'fa fa-ambulance';	
	};	

	multipleFileSelected() {
	    this.imageLoading = true;
	    this.filesArray = [];
	    this.filesArray = this.$event.target.files;
	    
	    for (var i = 0; i < this.filesArray.length; i++) {
	    	let reader = new FileReader();
		    let file = this.filesArray[i];
		    reader.readAsDataURL(file);
		    console.log ("File Name: " + file.name);
		    reader.onload = () => {
		        this.filesArray[i] = reader.result;
		        console.log (this.filesArray[i]);
		        console.log ("filesArray: " + this.filesArray); // console ouput: filesArray: [object FileList]
		    };
		}
		this.imageLoading = false;
	}    

	fileSelected() {
	    this.imageLoading = true;
	    let reader = new FileReader();
	    let file = this.$event.target.files[0];
	    reader.readAsDataURL(file);
	    this.fileName = file.name;
	    console.log ("File Name: " + this.fileName);
	    reader.onload = () => {
	        this.file = reader.result;
	        console.log ("File Content: " + this.file);
	        this.imageLoading = false;  // we need to find a place later in the flow to deactivate imageLoad
    };
    
	}
}
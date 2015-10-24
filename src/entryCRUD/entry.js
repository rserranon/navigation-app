export class Entry{
	heading = 'Entry';

	entryType = 'Visit';
	fontAwesomeIcon = 'fa fa-hospital-o';

	isVisit		 = false;
	isDiagnose   = false;
	isStudy	  	 = false;
	isTreatment  = false;
	isProcedure  = false;

	resetEntries () {
		this.isVisit	  = false;
		this.isDiagnose   = false;
		this.isStudy	  = false;
		this.isTreatment  = false;
		this.isProcedure  = false;
	};

	activate(){
		this.resetEntries();
		this.isVisit = true;
	};

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

	fileSelected() {
    let reader = new FileReader();
    let file = this.$event.target.files[0];
    reader.readAsDataURL(file);
    this.fileName = file.name;
    console.log ("File Name: " + this.fileName);
    reader.onload = () => {
        this.file = reader.result;
    };
    console.log ("File Content: " + this.file);
}
}
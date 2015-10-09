export class Entry{
	heading = 'Entry';

	isVisit		= false;
	isDiagnose  = false;
	isTreatment  = false;
	isProcedure  = false;

	resetEntries () {
		this.isVisit		 = false;
		this.isDiagnose   = false;
		this.isTreatment  = false;
		this.isProcedure  = false;
	}

	activate(){
		this.resetEntries();
	}

	toggleDiagnose () {
		this.resetEntries();
		this.isDiagnose = !this.isDiagnose;
	}
	toggleVisit () {
		this.resetEntries();
		this.isVisit = !this.isVisit;
	}
}
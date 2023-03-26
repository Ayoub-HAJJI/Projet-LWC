import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
  accounts;

  @wire(getAccounts)
  wiredAccounts({ error, data }) {
    if (data) {
      //this.accounts = data;
      console.log(data);
      this.accounts = data.map(record => {
        return { ...record, RT: record.RecordType.Name };
    });
    } else if (error) {
      console.error(error);
    }
  }

 
  searchTerm = '';
  searchTerm1 = '';
  searchTerm2 = '';
  searchTerm3 = '';
  searchTerm4 = '';
  searchTerm5 = '';


  get filteredAccounts() {
    if (this.searchTerm) {
      return this.accounts.filter(account => account.Name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else if(this.searchTerm1) {

        return this.accounts.filter(account => account.ASAIDPRS__c.toLowerCase().includes(this.searchTerm1.toLowerCase()));
    }else if(this.searchTerm2){
        return this.accounts.filter(account => account.BIL_ID__c.toLowerCase().includes(this.searchTerm2.toLowerCase()));
    }  else if(this.searchTerm3){
        return this.accounts.filter(account => account.RC__c.toLowerCase().includes(this.searchTerm3.toLowerCase()));
    }else if(this.searchTerm4){
        return this.accounts.filter(account => account.ICE__c.toLowerCase().includes(this.searchTerm4.toLowerCase()));
    }else if(this.searchTerm5){

      return this.accounts.filter(account => account.RT.toLowerCase().includes(this.searchTerm5.toLowerCase())); 
    }
    
    
    else {
      return this.accounts;
    }
  }

  handleSearch(event) {
    this.searchTerm = event.target.value;
  }
  handleSearch1(event) {
    this.searchTerm1 = event.target.value;
  }
  handleSearch2(event) {
    this.searchTerm2 = event.target.value;
  }
  handleSearch3(event) {
    this.searchTerm3 = event.target.value;
  }
  handleSearch4(event) {
    this.searchTerm4 = event.target.value;
  }
  handleSearch5(event) {
    this.searchTerm5 = event.target.value;
  }
}
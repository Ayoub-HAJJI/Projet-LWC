public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

  /*  return [SELECT Name, ASAIDPRS__c, BIL_ID__c, RC__c, ICE__c FROM Account

                
                
           WHERE ASAIDPRS__c LIKE '219%' AND BIL_ID__c != null
        ];
    }*/

    return [SELECT Name, ASAIDPRS__c, BIL_ID__c, RC__c, ICE__c,RecordType.Name FROM Account

                
                
    WHERE ASAIDPRS__c LIKE '219%' AND BIL_ID__c != null and RecordType.Name In ('Business_Account',  'Prospect_Entreprise' , 'Client_Entreprise')
         
   
        ];
    }

}
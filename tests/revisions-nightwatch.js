const config = require('config')
const baseUrl = config.baseUrl
const creds = config.creds.regularUser
module.exports = {
  'ConversationOne' : {
    'revisions': {
      before: (browser) => browser.maximizeWindow(),
      //after: (browser) => browser.end(),
       'Sign-in successfully leads to the Editor': (browser) => {
        browser
        .url(baseUrl + '/user/login')
        .waitForElementVisible('body', 4000)
        .setValue('#edit-name', 'larisa@zuznow.com')
        .setValue('#edit-pass', 'Lastweek1')
        .click('#edit-submit')
        .pause(15000)
        .assert.visible('#s2id_domain_selection > a > span')
      },
	  
	  'Clicking the new app button opens the Create new app screen': (browser) => {
        browser
		.click('#menu_new')
		.pause(3000)
		.assert.visible('s2id_industry_select')
	    
	     .pause(3000)
		 .click('#s2id_industry_select b')
		 .click('body > div.select2-drop.select2-drop-active > ul > li:nth-child(6)')
		 .click('#btnNext')
		 .setValue('#org-name', 'My')
		 .pause(4000)
		 .click('#organizationTab > div.form-horizontal > div > ul > li:nth-child(1) > a')
		 .click('#btnNext')
		 .pause(4000)
		 .click('.device-chatbot')
		 .pause(4000)
		 .getLocationInView('#btnNext')
         .assert.visible('#btnNext')
  		 .click('#btnNext')
		 
		 .getLocationInView('#closeTopMessageBar')
         .assert.visible('#closeTopMessageBar')
  		 .click('#closeTopMessageBar')
		 .pause(3000)
		 .click('.publish-btn.btn.editor')
	  },
	  
	'Clicking the Add button opens the New intent window' : (browser) => {
        browser
	    .click('#bigNewIntentBtn')
		.pause(3000)
		.assert.visible('.preintent[name="OpeningHours"]')
	},
	'Selecting a certain predefined intent adds it to the list' : (browser) => {
        browser
	   .click('.preintent[name="OpeningHours"]')
	   .pause(3000)
	   .click('btnSave')
	   .pause(40000)
	   .assert.visible('.intent-link[name="OpeningHours"]')
	},
	'Clicking the Interaction Rules Revisions button opens the Revisions screen' : (browser) => {
        browser
	   .click('.revision-group button')
	   .click('//a[text()="Interaction Rules Revisions"]')
	   .assert.visible('#btnRevertInteractionRevision')
	   .pause(3000)
	},
	
	'Clicking the Revert revision button reverts revision': (browser) => {
        browser
	   .click('.revisionsDataTable_tr_selected+tr')
	   .click('#btnRevertInteractionRevision')
	   .click('#revertRevisionModal > div > div > div.modal-footer > button')
	   .pause(30000)
	   .assert.elementNotPresent('.intent-link[name="OpeningHours"]')
	  }
	}
  }
}
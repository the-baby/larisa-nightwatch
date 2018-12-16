const config = require('config')
const baseUrl = config.baseUrl
const creds = config.creds.regularUser
module.exports = {
  'ConversationOne' : {
    'faq-generator': {
      before: (browser) => browser.maximizeWindow(),
      //after: (browser) => browser.end(),
       'Sign-in successfully leads to the Editor': (browser) => {
        browser
        .url(baseUrl + '/user/login')
        .waitForElementVisible('body', 4000)
        .setValue('#edit-name', 'larisa@zuznow.com')
        .setValue('#edit-pass', 'Lastweek1')
        .click('#edit-submit')
        .pause(6000)
        .assert.visible('#s2id_domain_selection > a > span')
      },
	  'Clicking the next button should open the Add sample screen': (browser) => {
        browser
		 .click('#menu_new')
		 .pause(3000)
		 .click('#s2id_industry_select b')
		 .click('body > div.select2-drop.select2-drop-active > ul > li:nth-child(6)')
		 .click('#btnNext')
		 .pause(4000)
		 .setValue('#org-name', 'school')
		 .click('#btnNext')
		 .pause(2000)
		 .click('.device.device-chatbot')
		 .getLocationInView('#btnNext')
         .assert.visible('#btnNext')
  		 .click('#btnNext')
		 .pause(3000)
		 .assert.visible('.form-control.newIntentSample.first')
	  },
	  'Checking that it is possible to add samples to the app': (browser) => {
        browser
		.setValue('.form-control.newIntentSample.first', 'How old are you')
		.getLocationInView('#btnNext')
		.click('#btnNext')
		.pause(3000)
		.assert.visible('.form-control.newTextResponse.first')
	},
	'Clicking the Customize button opens the Editor': (browser) => {
        browser
	   .setValue('.form-control.newTextResponse.first', 'I am 20')
	   .pause(3000)
	   .getLocationInView('#btnNext')
       .assert.visible('#btnNext')
  	   .click('#btnNext')
	   .click('#closeTopMessageBar')
	   .pause(25000)
	   .click('.publish-btn.btn.editor')
	   .assert.elementPresent('#btnSave')
		
		
	},
	
	'Clicking the Plus button adds a rules set': (browser) => {
       browser
	  .pause(8000)
	  .click('#btnAddRulesSet')
	  .pause(10000)
	  .assert.visible('.setName[set="1"]')
	  
	},
	'Clicking the Edit button enables the editing of the set name': (browser) => {
       browser
	   .click('.btnRenameSet.btn')
	   .pause(5000)
	   .assert.visible('.setRenameInput')
	},
	'It is possible to enter a new name for the Set': (browser) => {
       browser
	  .clearValue ('.setRenameInput')
	  .setValue('.setRenameInput', 'Test set')
	  .pause(5000)
	  .click('.btnSaveSetInfo.btn')
	  .pause(5000)
	  .click('#btnReset')
	  .pause(3000)
	  .assert.visible('#rulesSetTableBody > tr:nth-child(2) > td.setName')
	  .pause(3000)
	},
	'Clicking Delete button deletes the set': (browser) => {
       browser
	  .click('#rulesSetTableBody > tr.dd-handle.selected > td.setActions > div > button.btnDeleteSet.btn > i')
      .acceptAlert()
      .pause(3000)
      .assert.elementNotPresent('//*[@id="rulesSetTableBody"]/tr[2]/td[2]')
	}	  
  }
}
}  
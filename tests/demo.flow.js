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
        .pause(10000)
        .assert.visible('#s2id_domain_selection > a > span')
      },
	  
	   'Clicking the Customize button opens the Editor': (browser) => {
        browser
        .url(baseUrl + '/new')
        .waitForElementVisible('body', 1000)
        .click('#menu_new')
        .pause(4000)
        .assert.elementPresent('#org-name')
        .pause(4000)
        .click('#closeTopMessageBar')
        .click('#s2id_industry_select b')
		.pause(2000)
        .click('body > div.select2-drop.select2-drop-active > ul > li:nth-child(6)')
        .click('#btnNext')
        .pause(2000)
        .setValue('#org-name', 'MyTest')
        .pause(4000)
        .assert.visible('#btnNext')
        .click('#btnNext')
        .pause(2000)
        .assert.visible('.device-chatbot')
        .click('.device-chatbot')
        .assert.visible('#btnNext')
        .click('#btnNext')
		.pause(2000)
        .assert.visible('.preintent[name="Contact"]')
        .click('.preintent[name="Contact"]')
        .pause(25000)
		.frame("chatbot-preview")
		//.setValue('#input', 'how can I call you?')
		//.pause(8000)
		//.click('.submitBtn.form-control.c1Icon. c1Icon-paper-plane')
		//.pause(8000)
		//.assert.containsText('#conv-wrap', 'at +1800-000-000')
	   },
	   
	   'Clicking the Customize button leads to the Editor': (browser) => {
        browser
		.frame(null)
        .assert.visible('.publish-btn.btn.editor')
        .click('.publish-btn.btn.editor')
        .assert.elementPresent('#bigNewIntentBtn')
       },       
        'It is possible to change phone number in text response':  (browser) => {
        browser
        .click('.intent-link[name="Contact"]')
		.click('.panel[name="Contact"]  .action-link[action-name="PhoneCall"]')
		.pause(4000)
		.clearValue ('.modal-content input.param_value.form-control[name="phoneNumber"]')
		.setValue('.modal-content input.param_value.form-control[name="phoneNumber"]', "+1 (646) 869-2931")
		.click('#updateAction')
		.click('#btnSave')
		.pause(5000)
		},
	   'The new answer is displayed in the Chatbot':  (browser) => {
        browser
		.pause(2000)
		.url(function(result) { 
		console.log(result)})
		.frame('chatbot_simulator')
		.url(function(result) { 
		console.log(result)})
		.setValue('#input', 'how can I call you?')
		.pause(5000)
		.click('.submitBtn.form-control.c1Icon. c1Icon-paper-plane')
		.pause(5000)
		.assert.containsText('#conv-wrap', '+1 (646) 869-2931.')
      }
	 }
	}
  }
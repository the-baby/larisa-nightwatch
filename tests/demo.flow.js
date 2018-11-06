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
        .pause(8000)
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
              
                 
      }
	 }
	}
  }
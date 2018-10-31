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
        .waitForElementVisible('body', 1000)
        .setValue('#edit-name', creds.user)
        .setValue('#edit-pass', creds.password)
        .click('#edit-submit')
        .pause(3000)
        .assert.visible('#s2id_domain_selection > a > span')
      },
      'Clicking the Customize button opens the Editor': (browser) => {
        browser
        .url(baseUrl + '/new')
        .waitForElementVisible('body', 1000)
        .click('#menu_new')
        .pause(4000)
        .assert.elementPresent('#org-name')
        .pause(3000)
        .click('#closeTopMessageBar')
        .click('#s2id_industry_select b')
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
        .pause(15000)
        .assert.visible('.publish-btn.btn.editor')
        .click('.publish-btn.btn.editor')
        .assert.elementPresent('#bigNewIntentBtn')
              
      },
	     
      'Clicking the FAQ button opens the faq part in the Editor': (browser) => {
        browser
	    .pause(4000)
		.click('#bigNewFaqBtn')
		.pause(2000)
      	.assert.visible('#faq_gen_generate')  
     },
	'Clicking the Generate button generates the list of questions asked by users': (browser) => {
        browser
		.pause(3000)
		.setValue('#faq_url', 'https://www.ikea.com/ms/en_US/customer_service/faq/index.html')
		.setValue('#wrap_selector', '.contentModule')
		.pause(3000)
		.setValue('#question_selector', 'h5')
		.setValue('#answer_selector', 'span')
		.click('#faq_gen_generate')
		.pause(20000)
		.assert.visible('.faqResult:nth-child(2) .question') 
		
  
     },
  'An error message appears when no intent is selected': (browser) => {
        browser
		.click('#faq_gen_import')
		.pause(4000)
		.assert.elementPresent('.jGrowl-notification') 
     },
	
	'the selected intent is exported to the model': (browser) => {
        browser
		.pause(10000)
		.click('.faqResult:nth-child(2) .faqChecker input')
		.pause(8000)
		.click('#faq_gen_import')
		.assert.visible('.faqResult:nth-child(2) .question')
		.pause(3000)
		.click('#btnSave')
		.pause(35000)
		.click('#btnReset')
		.pause(7000)
		.assert.elementPresent('.folder-link[name="FAQ"]')
	},
	'It is possible to use the intent I added': (browser) => {
        browser
		.pause(2000)
		.frame('chatbot_simulator')
		.setValue('input', 'Do you have a delivery service')
		.pause(3000)
		.click('.submitBtn.form-control.c1Icon.c1Icon-paper-plane')
		.pause(4000)
		.assert.containsText('#conv-wrap', 'IKEA offers a flat rate online delivery service to your home or business starting at $9 for small item shipping and $39 for large item delivery.')
	},
	'It is possible to select all intents and import them into a newly created folder':(browser) => {
        browser
		.frame(null)
		.click('#bigNewFaqBtn')
		.pause(3000)
		.click('#faq_gen_header_selectAll>input')
		.click('#faqFolderSelect')
		.setValue('faq_new_folder', 'Test')
		.pause(3000)
		.click('#faq_gen_import')
		.pause(20000)
		.click('#bigNewFaqBtn')
		.pause(5000)
		.assert.elementNotPresent('.faqResult:nth-child(2)')
		.assert.visible('.folder-link[name="Test"]')
	
	},
	'Clicking Delete button deletes the app':(browser) => {
        browser
		.click('#btnMyApps')
		.pause(1000)
		.click('#btnDelete')
		.pause(1000)
		.acceptAlert()
		.pause(5000)
	}
	}
  } 
};


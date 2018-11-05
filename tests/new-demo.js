const config = require('config')
const baseUrl = config.baseUrl
const creds = config.creds.regularUser
module.exports = {
  'ConversationOne' : {
    'log-in': {
      before: (browser) => browser.maximizeWindow(),
      //after: (browser) => browser.end(),
       'Sign-in successfully leads to the Editor': (browser) => {
        browser
        .url(baseUrl + '/user/login')
        .waitForElementVisible('body', 1000)
		.setValue('#edit-name', 'Tom@zuznow.com')
		.click('#edit-submit')
        .pause(5000)
        .assert.containsText('.messages.error a', 'Have you forgotten your password')
		
	},
			
	    'Log in with wrong password should show an error message': (browser) => {
        browser	
	   .url(baseUrl + '/user/login')
	   .waitForElementVisible('body', 1000)
	   .pause(2000)
	   .setValue('#edit-name', 'Tom@zuznow.com')
	   .setValue('#edit-pass', 'Computer1')
	   .click('#edit-submit')
	   .pause(5000)
	   .assert.containsText('.messages.error a', 'Have you forgotten your password')
	},
	
	  'Log in with wrong username should show an error message': (browser) => {
        browser	
	   .url(baseUrl + '/user/login')
	   .waitForElementVisible('body', 1000)
	   .pause(2000)
	   .setValue('#edit-name', 'Tim@zuznow.com')
	   .setValue('#edit-pass', 'Adminuser1')
	   .click('#edit-submit')
	   .pause(5000)
	   .assert.containsText('.messages.error a', 'Have you forgotten your password')
	},
	'successful log in of admin user with applications should show editor' : (browser) => {
        browser	
	   .deleteCookies()
	   .url(baseUrl + '/user/login')
	   .waitForElementVisible('body', 1000)
	   .pause(2000)
	   .setValue('#edit-name', 'Tom@zuznow.com')
	   .setValue('#edit-pass', 'Adminuser1')
	   .click('#edit-submit')
	   .pause(5000)
	   .assert.elementPresent('#menu_new')
	},
	'successful log in of users without applications should show New app screen': (browser) => {
	  browser	
	 .deleteCookies()
	 .url(baseUrl + '/user/login')
	 .waitForElementVisible('body', 1000)
	 .pause(2000)
	 .setValue('#edit-name', 'Polly@zuznow.com')
	 .setValue('#edit-pass', 'Newuser1')
	 .click('#edit-submit')
	 .pause(5000)
	 .assert.elementPresent('#s2id_industry_select')
	 	 
	},
	'successful log in of non-admin user with applications should show Editor': (browser) => {
	 browser	
	 .deleteCookies()
	 .url(baseUrl + '/user/login')
	 .waitForElementVisible('body', 1000)
	 .pause(2000)
	 .setValue('#edit-name', 'Polly@zuznow.com')
	 .setValue('#edit-pass', 'Newuser1')
	 .click('#edit-submit')
	 .pause(5000)
	 .assert.elementPresent('#menu_new')
	
    }
	}
  } 
};
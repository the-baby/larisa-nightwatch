const config = require('config')
const baseUrl = config.baseUrl
const creds = config.creds.regularUser
module.exports = {
<<<<<<< Updated upstream
  'ConversationOne' : {
    'faq-generator': {
      before: (browser) => browser.maximizeWindow(),
      //after: (browser) => browser.end(),
=======
  'ZuzNow' : {
    'google': { 
>>>>>>> Stashed changes
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
        .pause(3000)
        .assert.elementPresent('#org-name')
        .pause(3000)
        .click('#closeTopMessageBar')
        .click('#s2id_industry_select b')
        .click('body > div.select2-drop.select2-drop-active > ul > li:nth-child(6)')
        .click('#btnNext')
        .pause(2000)
        .setValue('#org-name', 'MyTest')
        .pause(4000)
        .assert.elementPresent('#btnNext')
        .click('#btnNext')
        .pause(2000)
        .assert.elementPresent('.device-chatbot')
        .click('.device-chatbot')
        .assert.elementPresent('#btnNext')
        .click('#btnNext')
        .assert.elementPresent('.preintent[name="Contact"]')
        .click('.preintent[name="Contact"]')
        .pause(10000)
        .assert.elementPresent('.publish-btn')
        .click('.publish-btn')
        .assert.elementPresent('#bigNewIntentBtn')
        
        
        
      }    
    }
  }
};


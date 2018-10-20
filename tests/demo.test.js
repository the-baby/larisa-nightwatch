module.exports = {
  'ZuzNow' : {
    'faq-generator': { 
      'Sign-in successfully leads to the Editor': (browser) => {

        browser.url("https://www.google.com")
        .waitForElementVisible('body', 1000)
        .setValue('input[name=q]', 'nightwatch')
        .click('input[name=btnK]')
        .pause(3000)
        .end()
      }
    }
  }
};
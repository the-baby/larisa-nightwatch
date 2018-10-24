const cfg = module.exports = {
  src_folders : ["tests"],
  output_folder : "reports",
  custom_commands_path : "",
  custom_assertions_path : "",
  page_objects_path : "",
  globals_path : "",

  selenium : {
    "start_process" : true,
    "server_path" : "bin/selenium-server-standalone-3.14.0.jar",
    "log_path" : "logs",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "bin/chromedriver.exe",
      "webdriver.gecko.driver" : "bin/geckodriver.exe",
      "webdriver.edge.driver" : "bin/MicrosoftWebDriver.exe"
    }
  },

  test_settings : {
    default: {
      launch_url:     "http://localhost",
      selenium_port:  4444,
      selenium_host:  "localhost",
      silent:         true,
      screenshots : {
        enabled :     true,
        on_failure:   true,
        on_error:     true,
        path :        "screenshots"
      },
      desiredCapabilities: {
        browserName: "firefox"
      }
    }
  }
}


const def = cfg.test_settings.default;
cfg.test_settings.production = Object.assign( {}, def, {
  launch_url: "http://www.conversation1.com"
})
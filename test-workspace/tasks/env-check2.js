"use strict";

var appendResult = require("../../test/lib/util").appendResult;
appendResult(process.env.npm_package_config_test + "\n" + process.env.npm_package_config_test2 + "\n" + process.env.npm_package_config_test3);

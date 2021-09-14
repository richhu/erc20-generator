// const fs = require('fs');
const Migrations = artifacts.require("PowerfulERC20");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "MYpowertoken", "PTK", 8, 2000000000000000, 100000000000, "0xF45DDcB4f6c22D8aBccB2D74059D57631b362e79");
};

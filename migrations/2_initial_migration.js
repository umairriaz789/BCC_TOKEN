const PIAICToken = artifacts.require("PIAICToken");

module.exports = function (deployer) {
  deployer.deploy(PIAICToken);
};

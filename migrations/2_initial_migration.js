const SocialContract = artifacts.require('SocialContract')

module.exports = function (deployer) {
  deployer.deploy(SocialContract)
}

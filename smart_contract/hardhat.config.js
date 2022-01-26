require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UjWqXkHQ1IF5tQ3q1l0o40L3Szyjnhya',
      accounts: ['3b214df8cdda85cced1f127289df8183113afe58a950803e2a95daf671d85e41']
    }
  }
}
const { assert } = require('chai');
const { wallet1 } = require('./wallets');
const { Wallet } = require('ethers');

describe('wallets', () => {
    describe('wallet 1', () => {
        it('should be an instance of wallet', () => {
            assert(wallet1 instanceof Wallet);
        });

        it('should have an address', () => {
            assert(wallet1.address);
        });
    });
});

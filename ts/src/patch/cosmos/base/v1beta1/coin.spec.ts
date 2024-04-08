import { Reader } from 'protobufjs/minimal';

import * as coin from './coin';

describe('DecCoin', () => {
  describe('prototype.decode', () => {
    it('should decode amount with a floating point', () => {
      const encodedCoin = coin.DecCoin.encode({
        $type: 'cosmos.base.v1beta1.DecCoin',
        denom: '',
        amount: '1000000000000000000',
      }).finish();
      const reader = new Reader(encodedCoin);
      const result = coin.DecCoin.decode(reader);

      expect(result.amount).toEqual('1.00000000000000000');
    });
  });
});

import { _ } from 'kira-pure';

import { Field, Spec } from './type/mod.g';

const field = Field.Count.newWith({
  data: BigInt(10),
  spec: Spec.Count.newWith({
    countedCol: 'x',
    groupByRef: 'z',
  }),
});

_(field)
  ._(
    Field.Count.copy({
      data: () => BigInt(11),
      spec: Spec.Count.copy({
        countedCol: () => '10',
      }),
    })
  )
  ._(
    Field.map({
      Count: () => 10,
      CreationTime: () => 11,
    })
  )
  ._v();

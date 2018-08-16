/**
 * For Examples, see:
 * https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
 * https://github.com/alm-tools/alm/blob/master/src/common/types.ts
 */
import { Size as _s, AllSizes as _as } from './size'
import { Position as _p, IPositionXY as _pxy } from './position'

// tslint:disable-next-line:no-namespace
namespace Props {
  export import Size = _s
  export type AllSizes = _as
  export import Position = _p
  export type IPositionXY = _pxy
}

export {
  Props
}

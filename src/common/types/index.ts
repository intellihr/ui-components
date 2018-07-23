/**
 * For Examples, see:
 * https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
 * https://github.com/alm-tools/alm/blob/master/src/common/types.ts
 */
import { Size as _s, AllSizes } from './size'

namespace Props {
  export import Size = _s
}

export {
  Props,
  AllSizes
}

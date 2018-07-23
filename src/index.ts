/**
 * Import Foundation individually will cause conflict
 * with the global Foundation (i.e. lapis) if settings are different.
 *
 * We import Foundation and use it globally to void it
 */
import 'foundation-sites'

export * from './domain'
export * from './common'

import {/*eslint-disable@typescript-eslint/ban-types*/ColRefer} from '../mod.s';
import { SyncedFields } from '../alias'



export type Type = {
readonly _type: 'Ref'
refedCol: string,syncedFields: SyncedFields,thisColRefers: readonly}
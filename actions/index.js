import * as types from '../constants/ActionTypes'

export function sampleAction(text) {
    return { type: types.SAMPLE_ACTION, text }
}

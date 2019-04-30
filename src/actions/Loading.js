import { LOADING_POSTS, LOADING_FINISHED } from './types';

export const loadingState = () => {
    return {
        type:LOADING_POSTS
    }
}
export const loadingFinished = () => {
    return {
        type:LOADING_FINISHED
    }
}
// Account:
export const loginUrl = 'account/login/';

// Game:
export const getPlayerUrl = 'game/player/';
export const userNotificationsUrl = 'game/notification/'

export const allExchangesUrl = 'game/exchange/all/'
export const playerExchangesUrl = 'game/exchange/'
export const createNewExchangesUrl = 'game/exchange/create/'


// Problem:
export const getProblemFromGroupUrl = ({ problemGroupId }) => `game/getproblemfromgroup/${problemGroupId}/`;
export const hasPlayerGotProblemUrl = ({ problemGroupId }) => `game/isproblemgotenfromgroup/${problemGroupId}/`; // todo: fix غلط املایی
export const submitProblemUrl = ({ submitId, problemId }) => `game/submitanswer/${submitId}/${problemId}/`;


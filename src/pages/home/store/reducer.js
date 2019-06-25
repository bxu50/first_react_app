import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	subscribe: false,
	topicList: [],
	articleList: [],
	recommendList: [],
	writterList: [{
		id: 1,
		writterName: 'lostdays',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 2,
		writterName: 'lostdays',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 2,
		writterName: 'lostdays',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 2,
		writterName: 'lostdays',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	}],
	articlePage: 1,
	showScroll: false
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		case constants.CHANGE_SUB:
			return state.set('subscribe', action.value)
		default:
			return state;
	}
}
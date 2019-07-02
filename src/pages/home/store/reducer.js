import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writterList: [{
		id: 1,
		writterName: 'lostdays',
		subscribe: false,
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 2,
		writterName: 'infinity monkey',
		subscribe: false,
		imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 3,
		writterName: 'happyLemon',
		subscribe: false,
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
		desc: 'wrote 111.5k word. 23.1k likes'
	},{
		id: 4,
		writterName: 'Coco',
		subscribe: false,
		imgUrl: '//upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
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
			return state.setIn(['writterList', action.index, 'subscribe'], fromJS(action.value));
		case constants.CHANGE_UNSUBS:
			return state.setIn(['writterList', action.index, 'subscribe'], fromJS(action.value));
		default:
			return state;
	}
}
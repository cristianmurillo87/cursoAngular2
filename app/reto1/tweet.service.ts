export class TweetService{
	getTweets(): any {
		return [
			{
				"id": Math.floor((Math.random() * 10) + 1),
				"author": "Windward",
				"handle": "@windwardstudios",
				"comment": "Looking for a better company reporting or docgen app?",
				"likes" : 1
			}, 
			{
				"id": Math.floor((Math.random() * 10) + 1),
				"author": "AngularJS News",
				"handle": "@angularjs_news",
				"comment": "Right Relevance: Influences, Articles and Conversations",
				"likes" : 5
			}, 
			{
				"id": Math.floor((Math.random() * 10) + 1),
				"author": "UX & Bootstrap",
				"handle": "@3dwave",
				"comment": "10 Reasons Why Projects Fail",
				"likes" : 0
			}
		];
	}
}
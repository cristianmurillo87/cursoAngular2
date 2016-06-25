import {Component} from 'angular2/core';
import {HeartComponent} from './heart.component';
import {TweetService} from './tweet.service';

@Component({
	selector:'tweet',
	templateUrl:'app/tweet.template.html',
	styles: [`
		.media-object{
			border-radius: 10px;
		}
	`],
	directives: [HeartComponent],
	providers: [TweetService]
})
export class TweetComponent{

	tweets;

	constructor(tweetService: TweetService){
		this.tweets = tweetService.getTweets();
	}

}
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
	selector:'voter',
	templateUrl:'app/voter.template.html',
	styles:[`
		.container{
			width: 20px;
		}

		.glyphicon-menu-up{
			cursor: pointer;
			color : #ccc;
		}

		.glyphicon-menu-down{
			cursor: pointer;
			color : #ccc;
		}

		.highlighted{
			color: yellow;
		}
	`]
})
export class VoterComponent{

	@Input() voteCount: number = 10;
	@Input() myVote: number = 0;
	votedUp: boolean = false;
	votedDown: boolean = false;

	onUpClick(){
		this.votedUp = !this.votedUp;
		this.votedDown = false;
		this.myVote = this.voteCount > 10 ? 0 : 1;
		this.voteCount += this.myVote;

	}

	onDownClick() {
		this.votedDown = !this.votedDown;
		this.votedUp = false;
		this.myVote = this.voteCount < 10 ? 0 : -1;
		this.voteCount += this.myVote;
	}


}
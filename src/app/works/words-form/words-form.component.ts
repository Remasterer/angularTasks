import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words-form',
  templateUrl: './words-form.component.html',
})
export class WordsFormComponent implements OnInit {
  badWords: Array<string> = [];
  badWordInput: string;
  userText: string;
  badWordInputEmpty = false;
  userTextEmpty = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  addBadWord(): void {
    if (this.badWordInput){
        this.badWords.push(this.badWordInput);
        this.badWordInput = '' ;
        this.badWordInputEmpty = false;
    }else{
      this.badWordInputEmpty = true;
    }
  }
  resetBadWords(): void{
    this.badWords = [];
  }
  cenzorBadWords(): void{
    if (this.userText){
      console.log(this.userText);
      this.userText = this.userText.split(' ').map(word => (this.badWords.includes(word)) ? '*'.repeat(word.length) : word).join(' ');
      this.userTextEmpty = false;
    }else{
      this.userTextEmpty = true;
    }
  }
}

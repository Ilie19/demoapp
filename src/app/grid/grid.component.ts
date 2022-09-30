import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {


  like:boolean = true

  likee:boolean = true

  likeee:boolean = true

  likeeee:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.like = !this.like; //not equal to condition
    this.visible = !this.visible
  }

  onclick1()
  {
    this.likee = !this.likee; //not equal to condition
    this.visible = !this.visible
  }

  onclick2()
  {
    this.likeee = !this.likeee; //not equal to condition
    this.visible = !this.visible
  }

  onclick3()
  {
    this.likeeee = !this.likeeee; //not equal to condition
    this.visible = !this.visible
  }

  
  constructor() { }

  ngOnInit(): void {

    const styles = (theme: "&#10003; Liked") => {
      return ({
        test: {
          fontWeight: 400
        }
      });
    };

  }

}


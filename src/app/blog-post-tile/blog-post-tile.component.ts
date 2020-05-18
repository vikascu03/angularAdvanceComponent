import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post:BlogPost
  postsummary:String;
  

  constructor(private truncatePipe : TruncatePipe) { }

  ngOnInit(): void {
    this.postsummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary,30);
   
  }

  showFullSummary(){
    this.post.summary =this.postsummary;
  }

}

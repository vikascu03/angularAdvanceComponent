import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts:BlogPost [][];
  currentPage:number;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;
  

  constructor() { }

  ngOnInit(): void {
    this.currentPage=0;
    this.blogPosts = [
      [
        {
          title : 'post1',
          summary:'hererxkskfssdfsdfdsfdsfdsfsdfcvxcvdfldkfjs'
        },
        {
          title : 'post2',
          summary:'hererxksdfssdfdfnskldfsdfnsdfmdsf cx.v dfgfkfsldkfjs'
        },
        {
          title : 'post3',
          summary:'sdfsfssfesfjpotietkvxcvcvxcvxcvxvvertkire[ykrdfsd'
        }
        
      ],
      [
        {
          title : 'post11',
          summary:'hererxkskfsldksdfsdfsdfsdfdsfsdfwerfjs'
        },
        {
          title : 'post22',
          summary:'hererxksdfsskfsldkfjs'
        },
        {
          title : 'post33',
          summary:'sdfsfsdfsd'
        }
        
      ],
      [
        {
          title : 'post111',
          summary:'hererxkskfsldkfjs'
        },
        {
          title : 'post222',
          summary:'hererxksdfsskfsldkfjs'
        },
        {
          title : 'post333',
          summary:'sdfsfsdfsd'
        }
        
      ]
    ]
  }
  updatePage(newPage){
    console.log("new page clicked ");
    this.currentPage=newPage;
  }
  expandAll(){
    this.blogPostTileComponents.forEach(x=>x.showFullSummary());

  }

}

import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts:BlogPost [][];
  currentPage:number;
  

  constructor() { }

  ngOnInit(): void {
    this.currentPage=0;
    this.blogPosts = [
      [
        {
          title : 'post1',
          summary:'hererxkskfsldkfjs'
        },
        {
          title : 'post2',
          summary:'hererxksdfsskfsldkfjs'
        },
        {
          title : 'post3',
          summary:'sdfsfssfesfjpotietkertkire[ykrdfsd'
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

}

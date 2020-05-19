import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }
  getData():BlogPost[][]{
    return  [
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
}

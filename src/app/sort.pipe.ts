import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "./post";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(posts: Post[], property: string, isAscending: boolean): Post[] {
          return posts.sort(function (a, b) {
              const A = a[property];
              const B = b[property];

              let comparison = 0;
              if (isAscending) {
                  if (A > B) {
                      comparison = 1;
                  } else if (A < B) {
                      comparison = -1;
                  }
                  return comparison;
              } else {
                  if (A < B) {
                      comparison = 1;
                  } else if (A > B) {
                      comparison = -1;
                  }
                  return comparison;
              }

          });
  } 

}
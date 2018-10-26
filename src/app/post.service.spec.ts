import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {getTestBed, inject, TestBed} from '@angular/core/testing';
import {PostService} from './post.service';

describe('PostService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [PostService]
        });
    });

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    it('#getAllPosts should return array of Posts', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            const postService = getTestBed().get(PostService);
            postService.getAllPosts().subscribe(
                post => {
                    expect(post).toBeTruthy();
                }
            );
            const req = httpMock.expectOne(postService.httpUrl);
            expect(req.request.method).toEqual('GET');

            httpMock.verify();
        })
    );
});

import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../post';
import {GlobalsService} from '../globals.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {Cross} from '../cross';

@Component({
    selector: 'app-crosspost',
    templateUrl: './crosspost.component.html',
    styleUrls: ['./crosspost.component.css']
})
export class CrosspostComponent implements OnInit {

    @Input() selectedPost: Post;
    addCrossPostForm: FormGroup;

    constructor(public globals: GlobalsService,
                private formBuilder: FormBuilder,
                private postService: PostService) {
        this.addCrossPostForm = formBuilder.group({
            'postTitle': [''],
            'Visible': [''],
            'Domain': ['']
        });
    }

    ngOnInit() {
        console.log(this.selectedPost);
    }

    addPost(post: Post) {
        this.postService.addPost(post);
        console.log('Post: ' + post);
    }

    submitCrossPostForm() {
        const post = new Post();
        const submittedPost = this.addCrossPostForm.value;
        const crossPost = new Cross();

        console.log(submittedPost);
        console.log(this.selectedPost);

        post.postTitle = submittedPost.postTitle;

        if (this.selectedPost.Content === 'text') {
            post.postBody = this.selectedPost.postBody;
            post.Summary = this.selectedPost.Summary;
        } else {
            post.url = this.selectedPost.url;
        }

        post.Content = (this.selectedPost.Content + 'CrossPost');
        post.Rank = 0;
        post.Domain = submittedPost.Domain;
        post.Author = 'Harrison';
        post.Visible = submittedPost.Visible;

        crossPost.isCrossPost = true;
        crossPost.post = this.selectedPost._id;
        console.log('hello');
        crossPost.user = 'Harrison2';

        post.CrossPost = crossPost;

        this.addPost(post);

        console.log(post);

    }

}

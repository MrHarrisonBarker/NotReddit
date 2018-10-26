import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../comment';
import {PostService} from '../post.service';
import {Post} from '../post';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

    @Input() comment: Comment;

    addCommentForm: FormGroup;
    post: Post;
    user;
    params;

    constructor(private formBuilder: FormBuilder,
                private postService: PostService,
                private authService: AuthService,
                private route: ActivatedRoute) {
        this.addCommentForm = formBuilder.group({
            'Body': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.authService.user.subscribe(user => this.user = user);
        this.route.params.subscribe(params => this.params = params);
        this.getPost(this.params['_id']);
    }

    submitComment() {
        const comment = new Comment();
        const submittedComment = this.addCommentForm.value;

        console.log(submittedComment);
        console.log('POST');
        console.log(this.post);

        comment.Body = submittedComment.Body;
        comment.Author = this.user.DisplayName;
        comment.Rank = 0;

        console.log('hello hello');
        console.log(this.comment);

        if (this.comment) {
            const currentComment = this.post.Comments.find(value => value._id === this.comment._id);
            console.log('currentComment: ');
            console.log(currentComment);
            currentComment.Comments.push(comment);
            console.log('new comment pushed: ');
            console.log(currentComment);
        } else {
            this.post.Comments.push(comment);
        }


        // if (this.comment) {
        //     this.post.Comments.push(this.post.Comments.find(value => value._id === this.comment._id));
        //     console.log(this.post);
        // } else {
        //     this.post.Comments.push(comment);
        // }

        // try {
        //     // this.post.Comments.push(comment);
        //     this.post.Comments.push(this.comment);
        // } catch (e) {
        //     console.log(e);
        // }


        console.log('bye bye');
        console.log(comment);
        console.log(this.post);

        this.updatePost(this.post);

    }

    updatePost(post) {
        this.postService.updatePost(post);
    }

    getPost(id) {
        this.postService.getPost(id).subscribe(post => {
            console.log(post);
            this.post = post;
        });
    }

}

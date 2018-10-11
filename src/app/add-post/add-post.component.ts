import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

    addPostForm: FormGroup;
    addImageForm: FormGroup;
    addLinkForm: FormGroup;

    formState: String;

    domains: Domain[];

    constructor(private postService: PostService,
                private formBuilder: FormBuilder,
                private domainService: DomainService,
                public globals: GlobalsService) {
        this.addPostForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'postBody': [''],
            'Visible': [''],
            'Domain': ['']
        });
        this.addImageForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
            'Domain': [''],
            'url': ['']
        });
        this.addLinkForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
            'Domain': [''],
            'url': ['']
        });
    }

    ngOnInit() {
        this.formState = 'post';
        // this.getAllDomains();
    }

    setFormState(state) {
        this.formState = state;
        console.log(state);
    }

    addPost(post: Post) {
        this.postService.addPost(post);
        console.log('Post: ' + post);
    }

    getAllDomains() {
        this.domainService.getAllDomains().subscribe(data => this.domains = data);
        console.log(this.domains);
    }

    submitPostForm() {
        const post = new Post();
        const submittedPost = this.addPostForm.value;

        post.postTitle = submittedPost.postTitle;
        post.postBody = submittedPost.postBody;
        post.Author = 'Harrison';
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.Summary = submittedPost.postBody.substr(0, 98);
        post.Content = 'text';

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);
    }

    submitImageForm() {
        const post = new Post();
        const submittedPost = this.addImageForm.value;

        post.postTitle = submittedPost.postTitle;
        post.Author = 'Harrison';
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.url = submittedPost.url;

        if (post.url.includes('.gifv')) {
            post.Content = ('imgurGif');
        }

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);
    }

    submitLinkForm() {
        const post = new Post();
        const submittedPost = this.addLinkForm.value;

        post.postTitle = submittedPost.postTitle;
        post.Author = 'Harrison';
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.Content = 'link';
        post.url = submittedPost.url;

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

}

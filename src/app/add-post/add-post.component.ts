import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';
import {AuthService} from '../auth.service';

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
    user;

    constructor(private postService: PostService,
                private formBuilder: FormBuilder,
                private domainService: DomainService,
                public globals: GlobalsService,
                private authService: AuthService) {
        this.addPostForm = formBuilder.group({
            'postTitle': ['', Validators.required, Validators.minLength(5), Validators.maxLength(140)],
            'postBody': ['', Validators.required, Validators.maxLength(134217727)],
            'Visible': [''],
            'isNSFW': [''],
            'Tags': [''],
            'Domain': ['', Validators.required]
        });
        this.addImageForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
            'isNSFW': [''],
            'Tags': [''],
            'Domain': ['', Validators.required],
            'url': ['', Validators.required]
        });
        this.addLinkForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
            'isNSFW': [''],
            'Tags': [''],
            'Domain': ['', Validators.required],
            'url': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.formState = 'post';
        this.getAllDomains();
        this.getUser();
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
        this.domainService.getAllDomains().subscribe(data => {
            this.domains = data.filter(function(element, index, array) {
                return (element.Name !== 'all');
            });
            console.log(data);
        });
    }

    getUser() {
        this.authService.user.subscribe(data => this.user = data);
    }

    submitPostForm() {

        const post = new Post();
        const submittedPost = this.addPostForm.value;
        const Tags = new Array<String>();

        console.log(submittedPost.Tags);

        /*if (this.addPostForm.dirty && this.addPostForm.valid) {
            alert('Error');
        }*/

        post.postTitle = submittedPost.postTitle;
        post.postBody = submittedPost.postBody;
        post.Author = this.user.displayName;
        post.Rank = 0;
        if (submittedPost.Visible === null || submittedPost.Visible === undefined) {
            post.Visible = false;
        } else {
            post.Visible = true;
        }
        post.Domain = submittedPost.Domain;
        post.Summary = submittedPost.postBody.substr(0, 98);
        submittedPost.Tags.forEach(tag => {
           console.log(tag.value);
           Tags.push(tag.value);
        });
        post.Tags = Tags;
        post.Reports = 0;
        if (submittedPost.isNSFW === null || submittedPost.isNSFW === undefined) {
            post.isNSFW = false;
        } else {
            post.isNSFW = true;
        }
        post.viewCount = 0;
        post.isRemoved = false;
        post.ContentType = {Name: 'text', Source: 'none'};

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);

        this.formState = 'success';
    }

    submitImageForm() {

        const post = new Post();
        const submittedPost = this.addImageForm.value;
        const Tags = new Array<String>();

        /*if (this.addImageForm.dirty && this.addImageForm.valid) {
            alert('Error');
        }*/

        post.postTitle = submittedPost.postTitle;
        post.Author = this.user.displayName;
        post.Rank = 0;
        if (submittedPost.Visible === null || submittedPost.Visible === undefined) {
            post.Visible = false;
        } else {
            post.Visible = true;
        }
        post.Domain = submittedPost.Domain;
        if (!(submittedPost.Tags === undefined || submittedPost.Tags.length == 0)) {
            submittedPost.Tags.forEach(tag => {
                console.log(tag.value);
                Tags.push(tag.value);
            });
        }
        post.Tags = Tags;
        post.Reports = 0;
        if (submittedPost.isNSFW === null || submittedPost.isNSFW === undefined) {
            post.isNSFW = false;
        } else {
            post.isNSFW = true;
        }
        post.url = submittedPost.url;
        post.viewCount = 0;
        post.isRemoved = false;
        post.ContentType = {Name: 'image', Source: 'none'};

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);

        this.formState = 'success';
    }

    submitLinkForm() {

        const post = new Post();
        const submittedPost = this.addLinkForm.value;
        const Tags = new Array<String>();

        /*if (this.addImageForm.dirty && this.addImageForm.valid) {
            alert('Error');
        }*/

        post.postTitle = submittedPost.postTitle;
        post.Author = this.user.displayName;
        post.Rank = 0;
        if (submittedPost.Visible === null || submittedPost.Visible === undefined) {
            post.Visible = false;
        } else {
            post.Visible = true;
        }
        post.Domain = submittedPost.Domain;
        if (!(submittedPost.Tags === undefined || submittedPost.Tags.length == 0)) {
            submittedPost.Tags.forEach(tag => {
                console.log(tag.value);
                Tags.push(tag.value);
            });
        }
        post.Tags = Tags;
        post.Reports = 0;
        if (submittedPost.isNSFW === null || submittedPost.isNSFW === undefined) {
            post.isNSFW = false;
        } else {
            post.isNSFW = true;
        }
        post.url = submittedPost.url;
        post.viewCount = 0;
        post.isRemoved = false;
        post.ContentType = {Name: 'link', Source: 'none'};

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);

        this.formState = 'success';
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

}

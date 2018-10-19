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
            'postTitle': ['', Validators.required],
            'postBody': ['', Validators.required],
            'Visible': [''],
            'Domain': ['', Validators.required]
        });
        this.addImageForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
            'Domain': ['', Validators.required],
            'url': ['', Validators.required]
        });
        this.addLinkForm = formBuilder.group({
            'postTitle': ['', Validators.required],
            'Visible': [''],
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
        this.domainService.getAllDomains().subscribe(data => this.domains = data.filter(function(element, index, array) {
            return (element.Name !== 'all');
        }));
        console.log(this.domains);
    }

    getUser() {
        this.authService.user.subscribe(data => this.user = data);
    }

    submitPostForm() {

        //if (this.addPostForm.dirty && this.addPostForm.valid) {
        //    alert('Error');
        //}

        const post = new Post();
        const submittedPost = this.addPostForm.value;

        post.postTitle = submittedPost.postTitle;
        post.postBody = submittedPost.postBody;
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.Summary = submittedPost.postBody.substr(0, 98);
        post.ContentType.Name = 'text';

        post.Author = this.user.displayName;

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);

        this.formState = 'success';
    }

    submitImageForm() {

        //if (this.addImageForm.dirty && this.addImageForm.valid) {
        //    alert('Error');
        //}

        const post = new Post();
        const submittedPost = this.addImageForm.value;

        post.postTitle = submittedPost.postTitle;
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.url = submittedPost.url;
        post.ContentType.Name = 'image';

        post.Author = this.user.displayName;

        console.log(submittedPost);
        console.log(post);

        this.addPost(post);

        this.formState = 'success';
    }

    submitLinkForm() {

        if (this.addLinkForm.dirty && this.addLinkForm.valid) {
            alert('Error');
        }

        const post = new Post();
        const submittedPost = this.addLinkForm.value;

        post.postTitle = submittedPost.postTitle;
        post.Rank = 0;
        post.Visible = submittedPost.Visible;
        post.Domain = submittedPost.Domain;
        post.ContentType.Name = 'link';
        post.url = submittedPost.url;

        console.log(submittedPost);
        console.log(post);

        post.Author = this.user.displayName;

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

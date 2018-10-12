import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    startForm: FormGroup;
    contentTypes = ['images', 'links', 'text', 'all'];
    domains: Domain[];
    displayError: Boolean;

    constructor(private formBuilder: FormBuilder,
                private domainService: DomainService) {
        this.startForm = formBuilder.group({
            'Title': ['', Validators.required],
            'Name': ['', Validators.required],
            'Topic': ['', Validators.required],
            'Description': [''],
            'Colour': [''],
            'Content': [''],
            'Icon': ['']
        });
    }

    ngOnInit() {
        this.displayError = false;
        this.getAllDomains();
    }

    startDomain(domain: Domain) {
        this.domainService.startDomain(domain);
        console.log(domain);
    }

    getAllDomains() {
        this.domainService.getAllDomains().subscribe(domains => this.domains = domains);
    }

    submitForm() {
        const domain = new Domain();
        const submittedDomain = this.startForm.value;

        this.domains.forEach(publicDomain => {
            if (submittedDomain.Name === publicDomain.Name) {
                console.log('error: name exists');
                this.displayError = true;
                return error;
            }
        });

        domain.Title = submittedDomain.Title;
        domain.Name = submittedDomain.Name;
        domain.Topic = submittedDomain.Topic;
        domain.Description = submittedDomain.Description;
        domain.Colour = submittedDomain.Colour;
        domain.Content = submittedDomain.Content;
        domain.Icon = submittedDomain.Icon;

        domain.Subscribers = 0;

        this.startDomain(domain);
    }

}

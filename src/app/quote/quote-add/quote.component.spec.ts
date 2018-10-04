import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuoteDataImpl } from '@app/quote-data-impl';

describe('QuoteComponent', () => {
let component: QuoteComponent;
let fixture: ComponentFixture<QuoteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ QuoteComponent ],
        imports: [ReactiveFormsModule, FormsModule,NgbModule.forRoot(), NgSelectModule],

    })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.getTheForm().valid).toBeFalsy();
    });

    it('tags field validity', () => {
        let errors = {};
        let fld = component.getTheForm().controls['tags'];

        expect(fld.valid).toBeFalsy();

        //  field is required
        errors = fld.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set field to something
        fld.setValue("to");
        errors = fld.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Set field to something correct
        fld.setValue("toronto");
        errors = fld.errors || {};
        expect(errors).toEqual({});

        });

it('text field validity', () => {
        let errors = {};
        let fld = component.getTheForm().controls['text'];

        expect(fld.valid).toBeFalsy();

        //  field is required
        errors = fld.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set field to something
        fld.setValue("to");
        errors = fld.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Set field to something correct
        fld.setValue("toronto");
        errors = fld.errors || {};
        expect(errors).toEqual({});

        });

it('explanation field validity', () => {
        let errors = {};
        let fld = component.getTheForm().controls['explanation'];

        expect(fld.valid).toBeFalsy();

        //  field is required
        errors = fld.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set field to something
        fld.setValue("to");
        errors = fld.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Set field to something correct
        fld.setValue("toronto");
        errors = fld.errors || {};
        expect(errors).toEqual({});

        });

it('page field validity', () => {
        let errors = {};
        let fld = component.getTheForm().controls['page'];

        expect(fld.valid).toBeFalsy();

        //  field is required
        errors = fld.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set field to something
        fld.setValue("to");
        errors = fld.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Set field to something correct
        fld.setValue("toronto");
        errors = fld.errors || {};
        expect(errors).toEqual({});

        });




    it('submitting a form emits a user', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['password'].setValue("123456789");
        expect(component.form.valid).toBeTruthy();

        let user: User;
        // Subscribe to the Observable and store the user in a local variable.
        component.stepComplete.subscribe((value) => user = value);

        // Trigger the login function
        component.submit();

        // Now we can check to make sure the emitted value is correct
        expect(user.email).toBe("test@test.com");
        expect(user.password).toBe("123456789");
    });
});
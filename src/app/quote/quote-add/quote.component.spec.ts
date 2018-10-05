import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { QuoteAddComponent } from './quote.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuoteAddComponent } from '@app/quote/quote-add/quote-add.component';
import { Quote } from '@app/quote/quote';
import { CommonModule } from '@angular/common';
//import { QuoteDataImpl } from '@app/quote-data-impl';

fdescribe('QuoteAddComponent', () => {
    let component: QuoteAddComponent;
    let fixture: ComponentFixture<QuoteAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuoteAddComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule,
                NgbModule,

            ],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.getForm().valid).toBeFalsy();
    });

    it('tags field validity', () => {
        let errors = {};
        let fld = component.getForm().controls['tags'];

        expect(fld.valid).toBeFalsy();

        //  field is required
        errors = fld.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set field to something
        fld.setValue("to");
        errors = fld.errors || {};
        expect(errors['required']).toBeFalsy();
        

        // Set field to something correct
        fld.setValue("toronto");
        errors = fld.errors || {};
        expect(errors).toEqual({});

    });

    // it('text field validity', () => {
    //     let errors = {};
    //     let fld = component.getForm().controls['text'];

    //     expect(fld.valid).toBeFalsy();

    //     //  field is required
    //     errors = fld.errors || {};
    //     expect(errors['required']).toBeTruthy();

    //     // Set field to something
    //     fld.setValue("to");
    //     errors = fld.errors || {};
    //     expect(errors['required']).toBeFalsy();
       
    //     // Set field to something correct
    //     fld.setValue("toronto");
    //     errors = fld.errors || {};
    //     expect(errors).toEqual({});

    // });

    // it('explanation field validity', () => {
    //     let errors = {};
    //     let fld = component.getForm().controls['explanation'];

    //     expect(fld.valid).toBeFalsy();

    //     //  field is required
    //     errors = fld.errors || {};
    //     expect(errors['required']).toBeTruthy();

    //     // Set field to something
    //     fld.setValue("to");
    //     errors = fld.errors || {};
    //     expect(errors['required']).toBeFalsy();
    //     //expect(errors['minlength']).toBeTruthy();

    //     // Set field to something correct
    //     fld.setValue("toronto");
    //     errors = fld.errors || {};
    //     expect(errors).toEqual({});

    // });

    // it('page field validity', () => {
    //     let errors = {};
    //     let fld = component.getForm().controls['page'];

    //     expect(fld.valid).toBeTruthy();

    //     //  field is required
    //     errors = fld.errors || {};
        
    //     // Set field to something
    //     fld.setValue("to");
    //     errors = fld.errors || {};
    //     expect(errors['required']).toBeFalsy();
    //     expect(errors['minlength']).toBeTruthy();

    //     // Set field to something correct
    //     fld.setValue("toronto");
    //     errors = fld.errors || {};
    //     expect(errors).toEqual({});

    // });




    // it('submitting a form emits entity', () => {
    //     expect(component.getForm().valid).toBeFalsy();

    //     component.f.text.setValue("test@test.com, sdfd");
    //     component.f.tags.setValue("gurmat, equanitmity");
    //     component.f.explanation.setValue("test@test.com");
    //     component.f.page.setValue(200);
        

    //     expect(component.getForm().valid).toBeTruthy();

    //     let entity: Quote;
    //     // Subscribe to the Observable and store the user in a local variable.
    //     component.formSubmitted.subscribe((value:any) => entity = value);

    //     // Trigger the login function
    //     component.submit();

    //     // Now we can check to make sure the emitted value is correct
    //     expect(entity.text).toBe("test@test.com, sdfd");
    //     expect(entity.tags).toBe("gurmat, equanitmity");
    // });
});
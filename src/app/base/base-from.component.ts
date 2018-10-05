import { Output, EventEmitter, Input } from "@angular/core";
import { BaseEntity } from "@app/base/base";
import * as _ from 'lodash';

export abstract class BaseFormComponent<T extends BaseEntity> {
    @Output() formSubmitted: EventEmitter<BaseEntity> = new EventEmitter
    @Input() entity:T = null;
     
    errorMessage: string;
    id: any


    public compareFn(e1: BaseEntity, e2: BaseEntity) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }

    /**
  * Boolean used in telling the UI
  * that the form has been submitted
  * and is awaiting a response
  */
    submitted = false;

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.getForm().invalid) {
            return;
        }
        console.log(this.getForm().value)
        _.assign(this.entity, this.getForm().value)
        this.formSubmitted.emit(this.entity)

    }

    get f() { return this.getForm().controls; }


    /* TODO abstract getForm(): any */
    getForm(): any { return null}

}
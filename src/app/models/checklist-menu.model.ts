import { Form } from './checklist-form.interf';
import { FormDesc } from './checklist-form-desc.interf';

export class ChecklistMenu{

    constructor(public form: Array<Form>,
                public formDesc: Array<FormDesc>
    ){}
}
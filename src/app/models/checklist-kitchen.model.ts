import { Form } from './checklist-form.interf';

export class ChecklistKitchen{

    constructor(public nameCook: string,
                public form : Array<Form>,
                public foodRatio : string    
    ){}
}
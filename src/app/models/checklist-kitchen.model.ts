import { Form } from './form.interf';

export class ChecklistKitchen{

    constructor(private nameCook: string,
                private form : Array<Form>,
                private foodRatio : string    
    ){}
}
import { ResponsibleInformation } from './responsible-information.interf';
//This class represents the question form. It includes the three sectors.
export class ChecklistModel{

    constructor(private idChecklist: number,
                private date: Date,
                private responsibleInformation: ResponsibleInformation,
                private idSchool
    ){}
}

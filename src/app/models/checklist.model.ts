import { ResponsibleInformation } from './checklist-responsible-information.interf';
import { ChecklistKitchen } from './checklist-kitchen.model';
import { ChecklistMenu } from './checklist-menu.model';

//This class represents the question form. It includes the three sectors.
export class ChecklistModel{

    private _idChecklist: number;
    private _date: Date;
    private _responsibleInformation: ResponsibleInformation;
    private _idSchool : number;
    private _checklistKitchen: ChecklistKitchen;
    private _checklistMenu: ChecklistMenu;

    constructor(){}

    get idChecklist(): number{
        return this._idChecklist;
    }

    set idChecklist(idChecklist: number){
        this._idChecklist = idChecklist;
    }

    get date(): Date{
        return this._date;
    }

    set date(date: Date){
        this._date = date;
    }

    get responsibleInformation(): ResponsibleInformation{
        return this._responsibleInformation;
    }

    set responsibleInformation(responsibleInformation: ResponsibleInformation){
        this._responsibleInformation = responsibleInformation;
    }

    get idSchool(): number{
        return this._idChecklist;
    }

    set idSchool(idSchool: number){
        this.idSchool = idSchool;
    }

    get checklistMenu(): ChecklistMenu{
        return this._checklistMenu;
    }

    set checklistMenu(checklistMenu: ChecklistMenu){
        this._checklistMenu = checklistMenu;
    }

    get checklistKitchen(): ChecklistKitchen{
        return this._checklistKitchen;
    }

    set checklistKitchen(checklistKitchen : ChecklistKitchen){
        this._checklistKitchen = checklistKitchen;
    }

}


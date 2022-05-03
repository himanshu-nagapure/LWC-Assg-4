import { LightningElement } from 'lwc';

export default class OppForm extends LightningElement {
    handleError(){
        alert("An error occured ");
    }
    handleSuccess(){
        alert("Success in submission");
    }
    handleSubmit(){
        alert("Successfully Submitted");
    }
}
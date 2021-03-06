import React from 'react';
import {Form} from 'formsy-react';
const FormWrapper = (props) => (
 <Form onSubmit={props.onSubmit}>
   <fieldset disabled={props.disabled}>
    {props.children}
   </fieldset>
   <button id="button-right">{props.buttonName}</button>
</Form>)
export default FormWrapper;

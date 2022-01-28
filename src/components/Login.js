import React, { useRef, useEffect, useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom'
import { useFragment, usePreloadedQuery, commitMutation } from "react-relay";
import RelayEnvironment from '../RelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

export default function Login() {

    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    
    



    const questionMutation = graphql`
    mutation LoginMutation(
        $name: String,
        $password: String
      ) {
        readUser(name: $name,password: $password) {
          name
          fname
         
        }
    }
  `;



    const onPostLogin = () => {


        var userName = inputUserName;
        var password = inputPassword;

        if (userName != "" && password !="" ){

            commitMutation(RelayEnvironment, {
                mutation: questionMutation,
                variables: { name: userName, password: password },
                updater: store => {
    
                },
                onCompleted: response => {
                    console.log("response" + response);
                    response.readUser ? console.log('ok') : console.log("error");
    
    
    
    
                },
    
                onError: error => { console.log("error"); }
    
    
            });

        }else{
            console.log("error");
        }

        

    }

    return (<>

            <label>Helloworld</label>

    </>);
}

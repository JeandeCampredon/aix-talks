import React, { useState } from 'react';

import { css } from '@emotion/core';

import defaultUserSrc from '../../resources/icons/default-user-image.png';
import { colors, screenSizes, spacing } from '../theme';
import { LinkButton } from './UI/Button';

const container = css`
  overflow: auto;
  flex: 1;
`;
const titleStyle = css`
  text-align: center;
  margin: 1rem auto!important;
`;

const form = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
  
  label{
    display: inline-block;
    font-weight: 500;
    margin-right: 10px;
    white-space: nowrap;
    margin-bottom: 0.5rem;
    width : 150px;
  }
  
  input, textarea{
    vertical-align: baseline;
    padding: 1rem 2rem;
    margin: 1rem auto;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 20px 1px;
    min-width : 300px;
  }
  
  > * {
    margin: ${spacing.m} ${spacing.sm};
  }
  
  [type="submit"]{
    color: ${colors.typographic.violet};
    border-color: ${colors.typographic.violet};
    padding: .5rem 1rem;
    border-radius: 50px;
    height: 53px;
    width: 320px;
    
    &:hover{
      background-color: ${colors.typographic.violet};
      color: ${colors.typographic.white};
      border-color: ${colors.typographic.violet};
    }
  }
`;

const formContainer = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

const formField = css`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
`;

const confirmLabel = css`
  margin : 1rem;
  border: 1px solid green;
  color : green;
  border-radius: 5px;
  padding: .8rem 1rem;
  width: 320px;
`;

const errorLabel = css`
  margin : 1rem;
  border: 1px solid red;
  color : red;
  border-radius: 5px;
  padding: .8rem 1rem;
  width: 320px;
`;

const Contact = () => {
  const [ state, setState ] = useState({
    name : '',
    email : '',
    message : '',
    emailSent : false,
    error : 'sfsfs'
  });

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    state[name] = value;
    setState(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateID = "aixtalks_contact_form";
    sendMail(templateID, {
      message: state.message,
      from_name: state.name,
      user_name: state.name,
      reply_to: state.email,
      user_email : state.email,
      from_email : state.email
    });
  };

  const sendMail = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      setState({...state, emailSent : true });
    }).catch(err => {
      setState({...state, error : true });
    })
  };

  return (
    <div css={container}>
      <h1 css={titleStyle}>CONTACT</h1>
      <form css={form} onSubmit={handleSubmit} method="POST">
        <div css={formContainer}>
          <div css={formField}>
            <label>Nom / Prénom</label>
            <input
              type="text"
              name="name"
              required
              onChange={onFieldChange}
            />
          </div>

          <div css={formField}>
            <label>Email de contact</label>
            <input
              type="email"
              name="email"
              required
              onChange={onFieldChange}
            />
          </div>

          <div css={formField}>
            <label>Message</label>
            <textarea
              name="message"
              rows="10"
              required
              onChange={onFieldChange}
            />
          </div>

          <LinkButton type="submit" >Envoyer</LinkButton>
          { state.emailSent &&
            <p css={confirmLabel}> Email bien envoyé</p>
          }
          { state.error &&
          <p css={errorLabel}> Une erreur est survenue</p>
          }
        </div>
      </form>
    </div>
  );
};

export default Contact;

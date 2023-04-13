import React from 'react';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const openNewWindowAndSendRequest = (initialData:any) =>{
  const STRAPI_PREVIEW_FRONT = 'http://localhost:3000/api';
  const STRAPI_PREVIEW_SECRET = '4d5cad15-03eb-428a-a491-0d0ca4f4ac3e';

  const url = `${STRAPI_PREVIEW_FRONT}?slug=${initialData.slug}`;
  const headers = new Headers();
  headers.append('Authorization', 'Bearer '+STRAPI_PREVIEW_SECRET);
  console.log(`${STRAPI_PREVIEW_FRONT}?slug=${initialData.slug}`);

  let newWindow = window.open(STRAPI_PREVIEW_FRONT); // Open a new window
  if(newWindow === null)
    return;

  newWindow.onload = () => {
    if(newWindow === null)
      return;
    newWindow.document.cookie = 'STRAPI_PREVIEW_FRONT='+STRAPI_PREVIEW_FRONT
    fetch(url, {
      headers: headers
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Handle the response in the new window
        newWindow?.document.write(data);
      })
      .catch(error => {
        console.error('Error fetching URL:', error);
      });
  };



  /*fetch(`${STRAPI_PREVIEW_FRONT}?slug=${initialData.slug}`,options) // Send a GET request to retrieve the HTML
    .then(response => response.text()) // Convert response to text
    .then(html => {
      // Once the HTML is retrieved, you can manipulate it as needed
      // For example, you can use DOM manipulation to render it in the new window
      newWindow?.document.open();
      newWindow?.document.write(html);
      newWindow?.document.close();
    })
    .catch(error => console.error('Error:', error));*/
};

const PreviewLink = () => {
  const {initialData} = useCMEditViewDataManager();
  if (!initialData.slug) {
    return null;
  }

  return (
    <button
      style={{width: '100%'}}
      rel="noopener noreferrer"
      title="page preview"
      onClick={()=>{openNewWindowAndSendRequest(initialData)}}
    >Preview
    </button>
  );
};

export default PreviewLink;

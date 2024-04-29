
import { generateClient } from "aws-amplify/api";
import { getTemplates, listTemplates } from '../graphql/queries';
import { createTemplates } from '../graphql/mutations';
import config from "../aws-exports.js";
import { BoardTemplate } from './TemplateClass.js';
import { Amplify } from 'aws-amplify';

Amplify.configure(config);
const client = generateClient();

export async function queryTemplates(){

  const response = await client.graphql({
      query: listTemplates  
  });

  let boardTemplates = response.data.listTemplates.items.map(item => {
      return new BoardTemplate(
        item.colorGrid,
        item.numGrid,
        item.creator,
        item.timeCreated,
        item.creator,
        item.creationMessage
    );
  });

  return boardTemplates;
}
function BoardSquare({square}) {
  return(
    <div
      style={{backgroundColor: square.color}} 
     >
    </div>
  );
};

export function CreateBoard({squares}) {
  var boardSizes = "";
  for (let index = 0; index < Math.sqrt(squares.length); index++) {
      boardSizes += "1fr ";
  }

  return (
    <div id="displayTemplate" style={{gridTemplateColumns: boardSizes}}>
      {squares.map((square, index) => (
        <BoardSquare key={index} square={square} />  // Using index as key to solve some weird error in the console 
      )
      )}
    </div>
  );
}

// function to get the AWS time
function getCurrentAWSDateTime() {
  const currentDate = new Date();

  const year = currentDate.getUTCFullYear();
  const month = ('0' + (currentDate.getUTCMonth() + 1)).slice(-2); // Add leading zero if month is less than 10
  const day = ('0' + currentDate.getUTCDate()).slice(-2); // Add leading zero if day is less than 10
  const hours = ('0' + currentDate.getUTCHours()).slice(-2); // Add leading zero if hours is less than 10
  const minutes = ('0' + currentDate.getUTCMinutes()).slice(-2); // Add leading zero if minutes is less than 10
  const seconds = ('0' + currentDate.getUTCSeconds()).slice(-2); // Add leading zero if seconds is less than 10

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
}


// queries for the specific template in use for paint board utils
export async function getSpecificTemplate(templateId){
  // queries for the id
  let myTemplate = await client.graphql({
    query: getTemplates, 
    variables:  {id: templateId}
  });

  // log query result
  console.log(myTemplate.data.getTemplates);  
  return myTemplate.data.getTemplates;
}

export async function submit(numGrid, colorGrid, tempProps){
  return await client.graphql({
    query: createTemplates,
    variables: {
      input: { 
      "timeCreated": getCurrentAWSDateTime(), // Date.now(),//this might be bad
      "numGrid":  numGrid,
      "colorGrid":  colorGrid,
      "artName": tempProps.artName,
      "creator": tempProps.creator,
      "creationMessage": tempProps.creationMessage,
      "tags": tempProps.tags
      }
    }
  });
}


// custom queries below
    // search query queries the keywords that the user chooses. 
export async function searchQuery(keyWord) {
  return await client.graphql({
    query: listTemplates,
    variables: {
      filter: { 
        or: [
        {tags: {contains: keyWord}}, 
        {artName: {contains: keyWord}},
        {creationMessage: {contains: keyWord}}
      ]}
    }

  });
}

export async function getUserTemplate(userId) {
  return await client.graphql({
    query: listTemplates,
    variables: {
      filter: { 
        userID: {eq: userId}
      }
    }

  });
}

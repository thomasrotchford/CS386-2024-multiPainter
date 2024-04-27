

import { generateClient } from "aws-amplify/api"; // imports a function that creates a driver for the DB
                                                    // this allows us to run commands on the database essentially with the client object
import { getTemplates, listTemplates } from '../graphql/queries';      // this imports a pre-defined query
import { createTemplates } from '../graphql/mutations';
import config from "../aws-exports.js"; // this imports our configuration file, (actual file should not be
// uploaded to the database "aws-exports.js")

import { Amplify } from 'aws-amplify';  // imports Amplify functions needed to start connection
// configures the set up with an imported config file
Amplify.configure(config);
// generates a client object that allows us to run query scripts and actually mutate
// and read the data base
const client = generateClient();

function BoardSquare({square}) {
  return(
    <div
      style={{backgroundColor: square.color}} 
     >
    </div>
  );
};

export function CreateBoard({squares}) {
  // maybe put the board square stuff all in this function so it does stuff? Or maybe remove that for modularity. 
  // this could potentially help with rendering or it will do the exact opposite lol. Takes away a layer
  // if we render the board always. 

    var boardSizes = "";
    for ( let index = 0; index < Math.sqrt(squares.length); index++) {
      boardSizes = boardSizes + "1fr ";
    }

    return(
      <div id="displayTemplate" style={{gridTemplateColumns: boardSizes}}>
        {squares.map(square => (
          <BoardSquare square={square}/>
        ))}
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


// used apart of Home right now, can be modified for broader use
export async function queryTemplates(){
  
  let multipleSquares = [];

  const allTemplates = await client.graphql({
    query: listTemplates  
  });

  let numGrid = allTemplates.data.listTemplates.items[0].numGrid
  let colorGrid = allTemplates.data.listTemplates.items[0].colorGrid

  let squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);

  numGrid = allTemplates.data.listTemplates.items[1].numGrid
  colorGrid = allTemplates.data.listTemplates.items[1].colorGrid

  squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);

  numGrid = allTemplates.data.listTemplates.items[3].numGrid
  colorGrid = allTemplates.data.listTemplates.items[3].colorGrid

  squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);


  return multipleSquares;
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
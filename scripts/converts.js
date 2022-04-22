// convert csv to json
import fs from 'fs'
import path from 'path'
import consola from 'consola'
import { v4 as uuidv4 } from 'uuid';


const __dirname = path.resolve()
const recipeCsvFile = path.resolve(__dirname,'./src/data/recipes.csv');
const recipeJsonFile = path.resolve(__dirname,'./src/data/recipes.json');

function run(){
    const csvData = fs.readFileSync(recipeCsvFile,'utf-8')
    const lines = csvData.split(/\r?\n/)
    if(lines[0].trim() !=='name,stuff,tools'){
        consola.warn(`Headers Changed:${lines[0]}`)
        return
    }
    const recipeJson =[];
    const sep ='、'
    console.log(lines)
    lines.slice(1).forEach(line=>{
        if(line){
            const attrs = line.split(',')
            const stuff = attrs[1].trim().split(sep)
            recipeJson.push({
                uuid:uuidv4(),
                name:attrs[0].trim(),
                stuff,
                tools:attrs[2].trim(),
            })
        }
    })
    fs.writeFileSync(recipeJsonFile,JSON.stringify(recipeJson))
    consola.success(`Generate file: ${recipeJsonFile}`)
}
run();
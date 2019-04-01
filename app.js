
const container = document.querySelector('.container');

let gridSquareDivs = document.createElement('div');
let iterableSquares;
let secondContainerDiv = document.createElement('div');
container.appendChild(secondContainerDiv);
let secondContainerReference = document.getElementById('secondContainerDivId');
secondContainerDiv.id = 'secondContainerDivId';
let getInputFromUser;

    


function createNewGrid(){
    container.innerHTML= '';
    
    
    getInputFromUser = parseInt(prompt('Please select a number from 1 to 64 in order to create the new grid columns and rows'));
        

        if (getInputFromUser >= 1 && getInputFromUser <= 64){ 
            
            for (i = 0; i < 1; i++) {
                let secondContainerDiv = document.createElement('div');
                container.style.cssText = 'display: inline-grid; margin: 10% 35% 5%  ';
                secondContainerDiv.style.cssText = `display: inline-grid; grid-template-columns: repeat(${getInputFromUser}, 1fr); grid-template-rows: repeat(${getInputFromUser}, 1fr); width: 30rem; height: 30rem`;
                container.appendChild(secondContainerDiv);
                
                
                for (i = 0; i < getInputFromUser * getInputFromUser; i++) {
                    gridSquareDivs = document.createElement('div');
                    gridSquareDivs.classList.add('gridSquareDivsClass')
                    secondContainerDiv.appendChild(gridSquareDivs);
                    
                    gridSquareDivs.style.cssText = 'display: inline-grid; border: 1px solid black; ';
                    coloredSquares();
                    iterableSquares = document.querySelectorAll('.gridSquareDivsClass');
                    
                    
                }
            }              
            
        }else if (getInputFromUser < 1 || getInputFromUser > 64 || getInputFromUser === NaN) {
            confirm('Please enter a number beetwen 1 and 64');
            createStandardGrid();
            
        } else {
            createStandardGrid();
        }
}

function createStandardGrid() {
    
    
    
    for (i = 0; i <1; i ++) {

        let secondContainerDiv = document.createElement('div');
        container.style.cssText = 'display: inline-grid; margin: 10% 35% 5%;';
        container.appendChild(secondContainerDiv);
        
        secondContainerDiv.style.cssText = 'display: inline-grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); grid-row-gap: 0; grid-column-gap: 0; height: 30rem; width: 30rem';
        
         
        
            for (i = 0; i < 16 * 16; i ++) {
                
            gridSquareDivs = document.createElement('div');
            gridSquareDivs.classList.add('gridSquareDivsClass')
            
            gridSquareDivs.style.cssText =' border: 1px solid black;  ';
            secondContainerDiv.appendChild(gridSquareDivs);
            coloredSquares(); 
            iterableSquares = document.querySelectorAll('.gridSquareDivsClass');
            
              
            
            
            
            
            
                
                
            }
            
    }
    
    
}

function coloredSquares() {
    gridSquareDivs.addEventListener('mouseover', function(){
        
        this.classList.add('coloredSquares')
    
    });

}
function randomRgbColoredSquares () {
   
  for (let i = 0; i < iterableSquares.length; i ++) {
    iterableSquares[i].addEventListener('mouseover', function(){
      let r, g, b, color;
          // generating rgb color 0-255
          r = Math.floor(Math.random() * 255);
          g = Math.floor(Math.random() * 255);
          b = Math.floor(Math.random() * 255);
          color =  "rgb(" + r + "," + g + "," + b + ")";
          //manipulating the css variable background by passing the generated color to it
          
          this.style.setProperty('--background', color);
    
  
    })
    
  }  
  
}      
        
function resetGrid () {
  let resetDivs = document.querySelectorAll('.gridSquareDivsClass');
   for (let i = 0; i < resetDivs.length; i++) {
     resetDivs[i].classList.remove('coloredSquares');
   }
}
        
        
        
        
        
    
    
    


function eventListeners () {
    
    const NEW_GRID_BUTTON = document.getElementById('new-grid-button');
    NEW_GRID_BUTTON.addEventListener('click', createNewGrid);

    const RGBCOLOREDSQUARES = document.getElementById('rgb-colored-button');
            RGBCOLOREDSQUARES.addEventListener('click', randomRgbColoredSquares);
    
            const RESET_GRID_BUTTON = document.getElementById('reset');
            RESET_GRID_BUTTON.addEventListener('click', resetGrid );
}

eventListeners ();
createStandardGrid();












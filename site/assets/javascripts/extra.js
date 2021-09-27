
let metroColors = ["#E16710","#D11242","#0072BC","#EB131B"]


document.querySelectorAll('.md-tag').forEach(thisElement => customizeTags(thisElement));



// function to set the tag styles
function customizeTags(thisElement){
    let thisTag = thisElement.innerHTML
    if(thisTag == 'draft'){
        setCSS(thisElement,{
            'background-color': metroColors[0],
            color: '#000000'
        })
    }
    else if(thisTag == 'Metro.net'){
        setCSS(thisElement,{
            'background-color': metroColors[2],
            color: '#000000'
        })
    }
    console.log(thisElement.innerHTML)
    console.log(thisElement)
   }

// helper function to set CSS styles
function setCSS(thisElement, style) {
    for (const property in style)
        thisElement.style[property] = style[property];
}
let metroColors = ["#E16710","#D11242","#13EBE3","#0072BC","#EB131B"]
let tagList = {'draft':metroColors[0],"Metro.net":metroColors[1],'GIS':metroColors[2],'internal':metroColors[3]}

document.querySelectorAll('.md-tag').forEach(thisElement => customizeTags(thisElement));

// function to set the tag styles
function customizeTags(thisElement){
    let thisTag = thisElement.innerHTML
    console.log(tagList[thisElement])
    if (thisTag) {
        setCSS(thisElement,{
            'background-color': tagList[thisTag],
            color:'#000000'
        })
    }
   }

// helper function to set CSS styles
function setCSS(thisElement, style) {
    for (const property in style)
        thisElement.style[property] = style[property];
}
let metroColors = ["#E16710","#D11242","#13EBE3","#0072BC","#EB131B"]
let tagList = {'DRAFT':metroColors[0],"Metro.net":metroColors[1],'GIS':metroColors[2],'internal':metroColors[3],'external':metroColors[4]}
const elementToObserve = document.querySelector('.md-search-result__list');


function changeTheTags(){

    document.querySelectorAll('.md-tag').forEach(thisElement => customizeTags(thisElement));
}

changeTheTags()

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    changeTheTags()
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {subtree: true, childList: true});

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
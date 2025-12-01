function submit(){


        let  selectedBatchTiming =[];
        document
        
        .querySelectorAll("input[name='batch']:checked")
        .forEach((Element)=>{
            selectedBatchTiming.push(Element.value);


        }
   }



   console.log(selectedBatchTiming);

   const selectedBatch= document.querySelector(
      
      "input[name='timing']:checked"

   ).value;

   console.log(selectedBatch);


function clearFrom(){
      window.location.reload();
}
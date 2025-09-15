import React from "react";




function Comunicado(){



return(

<div className="flex flex-col md:flex justify-items-center p-4 ml-2">
<p className="text-blue-950 text-center p-4 text-sm sm:text-base md:text-lg lg:text-xl transition-opacity" style={{ animation:'fade 4s linear infinite'}}>
    E eis que vos digo estas coisas para que aprendais sabedoria; 
   para que saibais que, quando estais a serviço de vosso próximo,
   estais somente a serviço de vosso Deus.<br/>
   O Livro de Mormon : MOSIAH 2:17
</p>
<style>
  {`
    @keyframes fade {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `}
</style>
</div>


)
}


export default Comunicado;
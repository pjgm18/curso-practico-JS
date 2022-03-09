export function startVideo(id){
    const urlSecreta= "https://platziultrasecreto"+ id
    console.log("Se esta reproduciendo desde la url "+ urlSecreta)

}
function stopVideo(id){
    const urlSecreta= "https://platziultrasecreto"+ id
    console.log("Pausamos desde la url "+ urlSecreta)

}


export class ClasesPlatzi{
    constructor({
        name,
        videoId
    })
    {
        this.name = name;
        this.videoId= videoId;
    }
    
      reproducir(){

        startVideo(this.videoId)
            
        }

        pausar(){
        
        stopVideo(this.videoId)
        
    }

    
}
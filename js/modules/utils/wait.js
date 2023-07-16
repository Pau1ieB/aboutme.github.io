export const Wait = async delay=>{
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });    
}
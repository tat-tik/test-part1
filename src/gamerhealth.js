  
export function gamerHealth(gamer) {
    let healthTotal = (gamer.health < 15) ? "critical": 
    (gamer.health >= 15 && gamer.health <= 50) ? "wounded":
    "healthy";            
    return healthTotal;
};

       




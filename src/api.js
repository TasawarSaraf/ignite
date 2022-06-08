const base_url = `https://api.rawg.io/api/`

// https://api.rawg.io/api/games?key=4ba926d34b194ca49e4d743acfbfbe9d



const getCurrentMonth = () =>{
    const month = new Date().getMonth()+ 1;

    if(month < 10){
        return `0${month}`;
    } else{
        return month;
    }
}




const getCurrentDay = () =>{
    const day = new Date().getDay();

    if(day < 10){
        return `0${day}`;
    } else{
        return day;
    }
}


const getCurrentYear = new Date.getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const lastYear = `${getCurrentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${getCurrentYear+1}-${currentMonth}-${currentDay}`;


const currentDate = `${getCurrentYear}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;





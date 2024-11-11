// Task 1: Time object and operations
let timeObject = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    
    setCurrentTime() {
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },
    
    addSeconds(s) {
        let date = new Date();
        date.setHours(this.hours, this.minutes, this.seconds + s);
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    },
    
    addMinutes(m) {
        this.addSeconds(m * 60);
    },
    
    addHours(h) {
        this.addSeconds(h * 3600);
    },
    
    toString() {
        return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }
};

function displayCurrentTime() {
    timeObject.setCurrentTime();
    document.getElementById('currentTime').textContent = timeObject.toString();
}

function addSeconds() {
    const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
    timeObject.addSeconds(seconds);
    document.getElementById('modifiedTime').textContent = timeObject.toString();
}

function addMinutes() {
    const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
    timeObject.addMinutes(minutes);
    document.getElementById('modifiedTime').textContent = timeObject.toString();
}

function addHours() {
    const hours = parseInt(document.getElementById('hoursInput').value) || 0;
    timeObject.addHours(hours);
    document.getElementById('modifiedTime').textContent = timeObject.toString();
}

// Task 2: Date operations
const displayCurrentDate = () => {
    const now = new Date();
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const months = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];

    
    const formatted = `Дата: ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}\n` +
                            `День: ${days[now.getDay()]}\n` +
                            `Час: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    document.getElementById('currentDate').innerHTML = formatted.replace(/\n/g, '<br>');
};

function getDayInfo(date) {
    const days = ['Sunday', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\`ятниця', 'Saturday'];
    const dayNumber = date.getDay() === 0 ? 7 : date.getDay();
    const dayName = days[date.getDay()];
    return { dayNumber, dayName };
}

function setDayInfo() {
    const now = new Date();
    const dayInfo = getDayInfo(now);

    document.getElementById('dayInfo').innerHTML = `
        Номер дня тижня: ${dayInfo.dayNumber} <br>
        Назва дня тижня: ${dayInfo.dayName}
    `;
}

function calculateDate() {
    const daysOffset = parseInt(document.getElementById('daysOffset').value) || 0;
    const now = new Date();
    const targetDate = new Date(now.getTime() + daysOffset * 24 * 60 * 60 * 1000);
    
    const type = daysOffset < 0 ? 'Минула' : 'Майбутня';
    document.getElementById('calculatedDate').textContent = 
        `${type} дата: ${targetDate.toLocaleDateString()}`;
}

function getLastDayOfMonth() {
    const year = parseInt(document.getElementById('yearInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    
    if (year && month >= 1 && month <= 12) {
        const lastDay = new Date(year, month, 0).getDate();
        document.getElementById('lastDay').textContent = 
            `Останній день місяця: ${lastDay}`;
    }
}

function getSecondsCounts() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);
    
    const secondsPassed = Math.floor((now - startOfDay) / 1000);
    const secondsUntil = Math.floor((endOfDay - now) / 1000);
    
    document.getElementById('secondsCounts').innerHTML = 
        (`Кількість секунд, яка пройшла від початку сьогоднішнього дня: ${secondsPassed} \n` +
        `кількість секунд до початку наступного дня: ${secondsUntil}`).replace(/\n/g, '<br>');
}

function formatDate() {
    const dateStr = document.getElementById('dateString').value;
    const [datePart, timePart] = dateStr.split(' ');
    const [day, month, year] = datePart.split('.');
    const [hours, minutes] = timePart.split(':');
    
    const date = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    let result;
    if (diff < 60) {
        result = `${diff} сек. назад`;
    } else if (diff < 3600) {
        result = `${Math.floor(diff / 60)} хв. назад`;
    } else {
        result = dateStr;
    }
    
    document.getElementById('formattedDate').textContent = result;
}
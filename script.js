let currentYear = null;
let currentMonth = 0;

const events = {
  "2023-4-26": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-27": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-28": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-5-29": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-5-30": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-5-31": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  // ... (필요한 이벤트 계속 추가)
};

// 대한민국 공휴일 2023~2026
const holidays = {
  "2023-1-1": "신정",
  "2023-3-1": "삼일절",
  "2023-5-5": "어린이날",
  "2023-6-6": "현충일",
  "2023-8-15": "광복절",
  "2023-10-3": "개천절",
  "2023-10-9": "한글날",
  "2023-12-25": "크리스마스",
  // ... (필요한 휴일 계속 추가)
};

// 연속 이벤트 계산
function getAdjacentEvent(date, offset){
  const d = new Date(date);
  d.setDate(d.getDate() + offset);
  const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  return events[key];
}

// 연속 이벤트 테두리 계산
function getBorderStyle(date, event){
  const prev = getAdjacentEvent(date, -1);
  const next = getAdjacentEvent(date, 1);

  let style = "border-top:1px solid #ccc;border-bottom:1px solid #ccc;";

  // 왼쪽 테두리
  if(prev && prev.borderColor === event.borderColor){
    style += "border-left:1px solid #ccc;";
  } else {
    style += `border-left:2px solid ${event.borderColor};`;
  }

  // 오른쪽 테두리
  if(next && next.borderColor === event.borderColor){
    style += "border-right:1px solid #ccc;";
  } else {
    style += `border-right:2px solid ${event.borderColor};`;
  }

  return style;
}

// ======================= 기존 기능 ========================
function chooseYear(year){
  currentYear = year;
  currentMonth = 0;
  document.getElementById('year-select').style.display = 'none';
  document.getElementById('calendar-container').style.display = 'block';
  renderCalendar();
}

function backToYearSelect(){
  document.getElementById('calendar-container').style.display = 'none';
  document.getElementById('year-select').style.display = 'flex';
  document.getElementById('event-content').innerHTML = "날짜를 클릭하면 행사가 표시됩니다.";
}

function prevMonth(){
  if(currentMonth>0) currentMonth--;
  renderCalendar();
}

function nextMonth(){
  if(currentMonth<11) currentMonth++;
  renderCalendar();
}

function renderCalendar(){
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = "";
  const date = new Date(currentYear, currentMonth,1);
  const month = date.getMonth();
  const year = date.getFullYear();
  document.getElementById('current-month').innerText = `${year}년 ${month+1}월`;

  const table = document.createElement('table');
  const header = table.insertRow();
  const days = ['일','월','화','수','목','금','토'];
  for(let d of days){
    const th = document.createElement('th');
    th.innerText = d;
    header.appendChild(th);
  }

  let row = table.insertRow();
  for(let i=0;i<date.getDay();i++) row.insertCell();

  while(date.getMonth()===month){
    const cell = row.insertCell();
    const key = `${year}-${month+1}-${date.getDate()}`;
    const eventData = events[key];

    if(eventData){
      cell.innerHTML = `<span style="color:${eventData.textColor}; font-weight:bold;">${date.getDate()}</span>`;
      cell.innerHTML += `<div class="display-text" style="color:${eventData.textColor}; font-size:0.8em;">${eventData.displayText}</div>`;
      cell.style = getBorderStyle(date, eventData);
    } else {
      cell.innerHTML = `<span>${date.getDate()}</span>`;
      cell.style = "border:1px solid #ccc;";
    }

    const day = date.getDay();
    const holidayName = holidays[key];
    if(day===0 || holidayName){
      cell.classList.add('sunday','holiday');
      if(holidayName){
        cell.innerHTML += `<span class="event-preview">${holidayName}</span>`;
      }
    }
    if(day===6) cell.classList.add('saturday');

    // 클릭 시 title, 이미지, 설명 표시
    cell.onclick = () => {
      if(eventData){
        const e = eventData;
        document.getElementById('event-content').innerHTML = `<h3>${e.title}</h3><img src="${e.img}" alt="${e.title}" style="max-width:100%;"><p>${e.desc}</p>`;
      } else {
        document.getElementById('event-content').innerHTML = "선택한 날짜에 이벤트가 없습니다.";
      }
    }

    if(date.getDay()===6) row = table.insertRow();
    date.setDate(date.getDate()+1);
  }

  calendar.appendChild(table);
}

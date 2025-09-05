let currentYear = null;
let currentMonth = 0;

const events = {
  "2023-4-26": { displayText:"중간고사", title:"1학기 중간고사", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-27": { displayText:"중간고사", title:"1학기 중간고사", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-28": { displayText:"중간고사", title:"1학기 중간고사", textColor:"#990000", borderColor:"#FF0000" },
  "2023-5-4": { displayText:"체육한마당", title:"달여울 체육 한마당", textColor:"#CC6600", borderColor:"#FF9933" },
  "2023-5-17": { displayText:"모의고사", title:"모의고사 (1,2학년)", textColor:"#0066CC", borderColor:"#00CCFF" },
  // … 나머지 이벤트 동일하게 유지
};

// 공휴일
const holidays = {
  "2023-1-1": "신정",
  "2023-1-21": "설날",
  "2023-1-22": "설날",
  "2023-1-23": "설날",
  "2023-3-1": "삼일절",
  "2023-5-5": "어린이날",
  // … 나머지 공휴일 동일하게 유지
};

// 연속 날짜 그룹 생성 (학교 행사 + 공휴일)
function buildContinuousGroups() {
  const allDates = {...events};
  for (const key in holidays) {
    if (!allDates[key]) allDates[key] = { displayText: holidays[key], title: holidays[key], textColor:"#000000", borderColor:"#666666" };
  }

  // 날짜 키 정렬
  const sortedKeys = Object.keys(allDates).sort((a,b) => new Date(a) - new Date(b));

  let groups = [];
  let currentGroup = [];

  sortedKeys.forEach((key, idx) => {
    if (currentGroup.length === 0) {
      currentGroup.push(key);
    } else {
      const prevDate = new Date(currentGroup[currentGroup.length - 1]);
      const thisDate = new Date(key);
      const diff = (thisDate - prevDate) / (1000*60*60*24);
      if (diff === 1 && allDates[key].borderColor === allDates[currentGroup[currentGroup.length-1]].borderColor) {
        currentGroup.push(key);
      } else {
        groups.push([...currentGroup]);
        currentGroup = [key];
      }
    }
    if (idx === sortedKeys.length -1) groups.push([...currentGroup]);
  });
  return { allDates, groups };
}

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

  const { allDates, groups } = buildContinuousGroups();

  while(date.getMonth()===month){
    const key = `${year}-${month+1}-${date.getDate()}`;
    const eventData = allDates[key];
    const cell = row.insertCell();
    cell.innerHTML = `<span>${date.getDate()}</span>`;

    if(eventData){
      cell.innerHTML = `<span style="color:${eventData.textColor}; font-weight:bold;">${date.getDate()}</span>`;
      cell.innerHTML += `<div class="display-text" style="color:${eventData.textColor}; font-size:0.8em;">${eventData.displayText}</div>`;
      // 연속 그룹 찾기
      const group = groups.find(g => g.includes(key));
      if(group){
        const idx = group.indexOf(key);
        if(group.length===1){
          cell.style.border = `2px solid ${eventData.borderColor}`;
          cell.style.borderRadius = '6px';
        } else if(idx===0){
          cell.style.border = `2px solid ${eventData.borderColor}`;
          cell.style.borderRight = 'none';
          cell.style.borderRadius = '6px 0 0 6px';
        } else if(idx === group.length -1){
          cell.style.border = `2px solid ${eventData.borderColor}`;
          cell.style.borderLeft = 'none';
          cell.style.borderRadius = '0 6px 6px 0';
        } else {
          cell.style.border = `2px solid ${eventData.borderColor}`;
          cell.style.borderLeft = 'none';
          cell.style.borderRight = 'none';
        }
      }
    }

    const day = date.getDay();
    if(day===6) row = table.insertRow();

    // 클릭 시 그룹 전체 이벤트 표시
    cell.onclick = () => {
      if(eventData){
        const group = groups.find(g => g.includes(key));
        let html = '';
        group.forEach(k=>{
          const e = allDates[k];
          html += `<h3>${e.title} (${k})</h3>`;
        });
        document.getElementById('event-content').innerHTML = html;
      } else {
        document.getElementById('event-content').innerHTML = "선택한 날짜에 이벤트가 없습니다.";
      }
    }

    date.setDate(date.getDate()+1);
  }

  calendar.appendChild(table);
}

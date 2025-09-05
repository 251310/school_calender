let currentYear = null;
let currentMonth = 0;

const events = {
   "2023-3-2": { displayText:"입학/시업식", title:"입학/시업식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2023-3-23": { displayText:"3월평가", title:"3월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2023-4-26": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-27": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-4-28": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-5-4": { displayText:"체육한마당", title:"달여울 체육 한마당", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2023-5-17": { displayText:"모의고사", title:"모의고사 (1,2학년)", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2023-5-29": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-5-30": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-5-31": { displayText:"체험학습", title:"현장체험학습 (1학년)", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-6-1": { displayText:"6월평가", title:"6월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2023-6-27": { displayText:"기말고사", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-6-28": { displayText:"기말고사", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-6-29": { displayText:"기말고사", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-6-30": { displayText:"기말고사", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-7-19": { displayText:"여름방학", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2023-8-14": { displayText:"여름방학", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2023-9-6": { displayText:"9월평가", title:"9월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2023-9-22": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-9-23": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-9-24": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-9-25": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-9-26": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-9-27": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-10-24": { displayText:"플리마켓", title:"악동 플리마켓", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2023-10-31": { displayText:"모의기구", title:"모의국제기구회의", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2023-11-16": { displayText:"수능", title:"대학수학능력시험", img:"", desc:"", textColor:"#000000", borderColor:"#666666" },
  "2023-12-5": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-12-6": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-12-7": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-12-8": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2023-12-19": { displayText:"연합평가", title:"전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2023-12-29": { displayText:"방학식", title:"겨울방학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },

   "2024-2-5": { displayText:"개학식", title:"개학식(1,2학년)", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-2-6": { displayText:"개학식", title:"개학식(3학년)", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-2-8": { displayText:"졸업식", title:"졸업/종업식", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-3-4": { displayText:"입학/시업", title:"입학/시업식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-3-28": { displayText:"3월평가", title:"3월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2024-4-3": { displayText:"수학여행/봉사", title:"수학여행 (1학년) / 꽃동네 봉사활동 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-4-4": { displayText:"수학여행/봉사", title:"수학여행 (1학년) / 꽃동네 봉사활동 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-4-5": { displayText:"수학여행/봉사", title:"수학여행 (1학년) / 꽃동네 봉사활동 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-5-1": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-5-2": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-5-3": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-5-10": { displayText:"체육한마당", title:"달여울 체육한마당", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-5-30": { displayText:"모의기구", title:"모의국제기구회의", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
  "2024-6-4": { displayText:"6월평가", title:"6월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2024-6-28": { displayText:"개교기념일", title:"개교기념일", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-7-2": { displayText:"기말고사", title:"기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-7-3": { displayText:"기말고사", title:"기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-7-4": { displayText:"기말고사", title:"기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-7-5": { displayText:"기말고사", title:"기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-7-9": { displayText:"진로페스티벌", title:"진로진학페스티벌", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-7-19": { displayText:"여름방학", title:"여름방학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-7-20": { displayText:"여름방학", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-8-12": { displayText:"여름방학", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-8-13": { displayText:"개학", title:"개학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2024-9-4": { displayText:"9월평가", title:"9월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2024-9-30": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-10-1": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-10-2": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-10-3": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-10-4": { displayText:"중간고사", title:"2학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-10-15": { displayText:"10월평가", title:"10월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2024-10-25": { displayText:"동아리발표회", title:"동아리 발표회", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-10-31": { displayText:"진로체험", title:"진로문화체험학습", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-11-14": { displayText:"수능", title:"대학수학능력시험", img:"", desc:"", textColor:"#000000", borderColor:"#666666" },
  "2024-12-10": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-12-11": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-12-12": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-12-13": { displayText:"기말고사", title:"2학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2024-12-24": { displayText:"달여울축제", title:"달여울 축제", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
  "2024-12-26": { displayText:"선배만남", title:"선배와의 만남", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
  "2024-12-31": { displayText:"방학식", title:"겨울방학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },

    "2025-2-4": { displayText:"개학식", title:"개학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2025-2-7": { displayText:"졸업/종업", title:"졸업/종업식", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
  "2025-3-4": { displayText:"입학/시업", title:"입학/시업식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
  "2025-3-26": { displayText:"3월평가", title:"3월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-4-9": { displayText:"수학여행/봉사", title:"수학여행(1학년) / 꽃동네 봉사활동(2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-4-10": { displayText:"수학여행/봉사", title:"수학여행(1학년) / 꽃동네 봉사활동(2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-4-11": { displayText:"수학여행/봉사", title:"수학여행(1학년) / 꽃동네 봉사활동(2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-4-30": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-5-1": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-5-2": { displayText:"중간고사", title:"1학기 중간고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-5-9": { displayText:"체육한마당", title:"달여울 체육한마당", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-5-13": { displayText:"버스킹", title:"5월 버스킹", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-5-26": { displayText:"건강검진", title:"학생건강검진", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-5-27": { displayText:"모의기구", title:"모의국제기구회의", img:"", desc:"", textColor:"#990066", borderColor:"#FF33CC" },
"2025-5-30": { displayText:"플리마켓", title:"악동 플리마켓", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-6-4": { displayText:"6월평가", title:"6월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-6-28": { displayText:"개교기념일", title:"개교기념일", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-1": { displayText:"기말고사", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-7-2": { displayText:"", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-7-3": { displayText:"", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-7-4": { displayText:"", title:"1학기 기말고사", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-7-7": { displayText:"2학년 배구대회", title:"반대항 배구대회 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-8": { displayText:"", title:"반대항 배구대회 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-9": { displayText:"", title:"반대항 배구대회 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-10": { displayText:"", title:"반대항 배구대회 (2학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-11": { displayText:"총선<br>1학년 배구대회", title:"학생회 총선 / 반대항 배구대회 (1학년)", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-7-14": { displayText:"", title:"반대항 배구대회 (1학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-15": { displayText:"", title:"반대항 배구대회 (1학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-16": { displayText:"", title:"반대항 배구대회 (1학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-17": { displayText:"", title:"반대항 배구대회 (1학년)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-7-18": { displayText:"여름방학식", title:"여름방학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-19": { displayText:"여름방학", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-20": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-21": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-22": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-23": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-24": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-25": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-26": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-27": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-28": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-29": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-30": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-7-31": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-1": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-2": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-3": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-4": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-5": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-6": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-7": { displayText:"", title:"", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-8": { displayText:"", title:"여름방학", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-8-5": { displayText:"전야제", title:"전야제", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-8-11": { displayText:"개학", title:"개학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2025-9-3": { displayText:"9월평가", title:"9월전국연합학력평가", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-9-4": { displayText:"9월버스킹", title:"9월 버스킹", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-9-30": { displayText:"중간고사", title:"2학기 중간고사 (1,2학년) / 학기말고사 (3학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-10-1": { displayText:"중간고사", title:"2학기 중간고사 (1,2학년) / 학기말고사 (3학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-10-2": { displayText:"중간고사", title:"2학기 중간고사 (1,2학년) / 학기말고사 (3학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-10-3": { displayText:"중간고사", title:"2학기 중간고사 (1,2학년) / 학기말고사 (3학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-10-29": { displayText:"체험학습", title:"진로문화체험학습", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-10-31": { displayText:"학술제", title:"동아리 학술제", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-11-13": { displayText:"수능", title:"전국수학능력시험", img:"", desc:"", textColor:"#000000", borderColor:"#666666" },
"2025-12-9": { displayText:"기말고사", title:"2학기 기말고사 (1,2학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-12-10": { displayText:"기말고사", title:"2학기 기말고사 (1,2학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-12-11": { displayText:"기말고사", title:"2학기 기말고사 (1,2학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-12-12": { displayText:"기말고사", title:"2학기 기말고사 (1,2학년)", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" },
"2025-12-24": { displayText:"달여울축제", title:"달여울 축제 (예상)", img:"", desc:"", textColor:"#CC6600", borderColor:"#FF9933" },
"2025-12-26": { displayText:"선배만남", title:"선배와의 만남", img:"", desc:"", textColor:"#0066CC", borderColor:"#00CCFF" },
"2025-12-30": { displayText:"방학식", title:"겨울방학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },

"2026-2-4": { displayText:"개학식", title:"개학식", img:"", desc:"", textColor:"#006600", borderColor:"#00CC00" },
"2026-2-6": { displayText:"종업/졸업", title:"종업/졸업식", img:"", desc:"", textColor:"#990000", borderColor:"#FF0000" }
};

// 대한민국 공휴일 2023~2026 (날짜: 'YYYY-M-D')
const holidays = {
  // 2023년
  "2023-1-1": "신정",
  "2023-1-21": "설날",
  "2023-1-22": "설날",
  "2023-1-23": "설날",
  "2023-3-1": "삼일절",
  "2023-5-5": "어린이날",
  "2023-5-27": "석가탄신일",
  "2023-6-6": "현충일",
  "2023-8-15": "광복절",
  "2023-9-28": "추석",
  "2023-9-29": "추석",
  "2023-9-30": "추석",
  "2023-10-3": "개천절",
  "2023-10-9": "한글날",
  "2023-12-25": "크리스마스",

  // 2024년
  "2024-1-1": "신정",
  "2024-2-9": "설날",
  "2024-2-10": "설날",
  "2024-2-11": "설날",
  "2024-3-1": "삼일절",
  "2024-5-5": "어린이날",
  "2024-5-15": "석가탄신일",
  "2024-6-6": "현충일",
  "2024-8-15": "광복절",
  "2024-9-16": "추석",
  "2024-9-17": "추석",
  "2024-9-18": "추석",
  "2024-10-3": "개천절",
  "2024-10-9": "한글날",
  "2024-12-25": "크리스마스",

  // 2025년
  "2025-1-1": "신정",
  "2025-1-28": "설날",
  "2025-1-29": "설날",
  "2025-1-30": "설날",
  "2025-3-1": "삼일절",
  "2025-5-5": "어린이날",
  "2025-5-5": "석가탄신일",
  "2025-6-6": "현충일",
  "2025-8-15": "광복절",
  "2025-10-6": "추석",
  "2025-10-7": "추석",
  "2025-10-8": "추석",
  "2025-10-3": "개천절",
  "2025-10-9": "한글날",
  "2025-12-25": "크리스마스",

  // 2026년
  "2026-1-1": "신정",
  "2026-2-16": "설날",
  "2026-2-17": "설날",
  "2026-2-18": "설날",
  "2026-3-1": "삼일절",
  "2026-5-5": "어린이날",
  "2026-5-5": "석가탄신일",
  "2026-6-6": "현충일",
  "2026-8-15": "광복절",
  "2026-9-26": "추석",
  "2026-9-27": "추석",
  "2026-9-28": "추석",
  "2026-10-3": "개천절",
  "2026-10-9": "한글날",
  "2026-12-25": "크리스마스"
};

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

// 연속 날짜 그룹 찾기
function getGroups(dates, dataObj){
  dates.sort((a,b)=>new Date(a)-new Date(b));
  const groups = [];
  let temp = [];
  for(let i=0;i<dates.length;i++){
    const cur = new Date(dates[i]);
    const prev = i>0 ? new Date(dates[i-1]) : null;
    const sameColor = prev && dataObj[dates[i]].borderColor === dataObj[dates[i-1]].borderColor;
    if(prev && ((cur - prev) === 86400000) && sameColor){
      temp.push(dates[i]);
    } else {
      if(temp.length) groups.push(temp);
      temp = [dates[i]];
    }
  }
  if(temp.length) groups.push(temp);
  return groups;
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

  // 날짜 전체 배열
  const allDates = [];
  const lastDate = new Date(year, month+1, 0).getDate();
  for(let d=1; d<=lastDate; d++){
    allDates.push(`${year}-${month+1}-${d}`);
  }

  // 학교 행사 + 공휴일 합치기
  const combinedData = {};
  allDates.forEach(key=>{
    if(events[key]){
      combinedData[key] = events[key];
    } else if(holidays[key]){
      combinedData[key] = { displayText: holidays[key], title: holidays[key], img:"", desc:"", textColor:"#FF0000", borderColor:"#FF0000" };
    }
  });

  const groups = getGroups(Object.keys(combinedData), combinedData);

  // 셀 생성
  for(let d=1; d<=lastDate; d++){
    const cellDate = `${year}-${month+1}-${d}`;
    const eventData = combinedData[cellDate];

    // 그룹 안에서 위치 찾기
    let groupInfo = null;
    for(let g of groups){
      const idx = g.indexOf(cellDate);
      if(idx !== -1){
        groupInfo = { group:g, idx:idx };
        break;
      }
    }

    const cell = row.insertCell();
    cell.innerHTML = `<span>${d}</span>`;
    if(eventData){
      cell.innerHTML = `<span style="color:${eventData.textColor}; font-weight:bold;">${d}</span>`;
      cell.innerHTML += `<div class="display-text" style="color:${eventData.textColor}; font-size:0.8em;">${eventData.displayText}</div>`;
      
      // 테두리 설정
      if(groupInfo){
        const g = groupInfo.group;
        const idx = groupInfo.idx;
        if(g.length===1){
          cell.style.border = `2px solid ${eventData.borderColor}`;
          cell.style.borderRadius = '6px';
        } else if(idx===0){
          cell.style.borderTop = `2px solid ${eventData.borderColor}`;
          cell.style.borderBottom = `2px solid ${eventData.borderColor}`;
          cell.style.borderLeft = `2px solid ${eventData.borderColor}`;
          cell.style.borderRight = 'none';
          cell.style.borderRadius = '6px 0 0 6px';
        } else if(idx===g.length-1){
          cell.style.borderTop = `2px solid ${eventData.borderColor}`;
          cell.style.borderBottom = `2px solid ${eventData.borderColor}`;
          cell.style.borderLeft = 'none';
          cell.style.borderRight = `2px solid ${eventData.borderColor}`;
          cell.style.borderRadius = '0 6px 6px 0';
        } else {
          cell.style.borderTop = `2px solid ${eventData.borderColor}`;
          cell.style.borderBottom = `2px solid ${eventData.borderColor}`;
          cell.style.borderLeft = 'none';
          cell.style.borderRight = 'none';
        }
      }
    }

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

export const COLORS = {
  RED: 0xff0000,
}

export const CENSOR = [
  {
    name: '씨발',
    regex:
      '([시쉬스슈싯싰씨씻씼쒸씺씹앂싸쓔취씌야ㅅへ人ㅆ⩘入八㉦㈆∧c]|//^|//^ㅣ|ㅇㅑ|di|si|she|shi|shu|syu|shyu|ya|se|tl|//^ㅣ)[ㄱ-ㅎㅏ-ㅣ0-9이으ㅣieㅡ-]*(빠|밠|밟|밣|밡|뿔|불|발|뱔|팔|펄|벌|뻘|빨|뿰|붤|봘|뷀|벨|벩|풜|밦|밟|밠|밢|㈅|㉥|ㅂ|8|ㅃ|var|bar|val|bal|vul|bul|bel|qkf)|[쉬쒸씨](바|ba)|[시씨띠][바파][아ㅏ]*[알랄]|^[시씨스ㅅㅆ][바ㅂ㈓]$|[씹쓉씝십쉽][할알팔발핧팛팙팘핤붤벨밸]|tlqk|ㅽ|18[놈넘]',
  },
  { name: '씨발 (초성 우회)', regex: '[ㅅㅆㅉ]ㅣ[ㅂㅃ]ㅏㄹ' },
  { name: '개씨발', regex: '개시바' },
  { name: '시발년', regex: '시발련|[십씹쓉쉽]련' },
  { name: '씨부럴', regex: '[씨쉬쒸시스ㅅへ人야c][이으ㅣ]*[브부ㅂ][ㄹ럴]' },
  { name: '머저리', regex: '머저리' },
  { name: 'X 반복', regex: '[#x]{3,}|야이[#x]{2,}' },
  {
    name: '지랄',
    regex: '(지|쥐|ㅈ|ㅈi|ㅈl|zi|g|야)[ㄱ-ㅎㅏ-ㅣ이]*(lal|ral|랄|ㄹ|룰)',
  },
  {
    name: '개새끼',
    regex:
      '(개|dog)[샠색샊섺섹]|rotorl|[개ㄱ][새ㅅ][끼낏꺄까ㄲ]|^개[새색샊]$|새[개객갞걖]끼',
  },
  { name: '병신년', regex: '병신년([^에]|$)' },
  {
    name: '병신',
    regex:
      '[병ㅂ뼝삉㈅븽빙븅뷍뽕빵뽱퓽뿽][ㄱ-ㅎㅏ-ㅣ]*(쉰|신|싯|진|㈆|ㅅ|へ|人|shin|sin)|ㅄ|qudtls',
  },
  { name: '병신 (우회)', regex: '벼어*ㅓ*엉신|뷰우*ㅜ*웅신' },
  {
    name: '병신 (초성 우회)',
    regex: 'ㅂㅕㅇㅅㅣㄴ',
  },
  { name: '간나 (욕설로 사용)', regex: '[개쌍썅종존좆ㅈ]간나' },
  { name: '거지 (욕설로 사용)', regex: '거지냐|거지새끼|거지[놈년]' },
]
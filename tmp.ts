const CENSOR = [
  {
    name: '욕설 금지',
    description: '얘 아까 선생님 욕했어요! / 야! 그걸 왜 말해!',
    elements: [
      {
        name: '씨발',
        regex:
          '([시쉬스슈싯싰씨씻씼쒸씺씹앂싸쓔취씌야ㅅへ人ㅆ⩘入八㉦㈆∧c]|//^|//^ㅣ|ㅇㅑ|di|si|she|shi|shu|syu|shyu|ya|se|tl|//^ㅣ)[ㄱ-ㅎㅏ-ㅣ0-9이으ㅣieㅡ-]*(빠|밠|밟|밣|밡|뿔|불|발|뱔|팔|펄|벌|뻘|빨|뿰|붤|봘|뷀|벨|벩|풜|밦|밟|밠|밢|㈅|㉥|ㅂ|8|ㅃ|var|bar|val|bal|vul|bul|bel|qkf)|[쉬쒸씨](바|ba)|[시씨띠][바파][아ㅏ]*[알랄]|^[시씨스ㅅㅆ][바ㅂ㈓]$|[씹쓉씝십쉽][할알팔발핧팛팙팘핤붤벨밸]|tlqk|ㅽ|18[놈넘]',
        ruleType: 'Black',
      },
      {
        name: '씨발 (초성 우회)',
        regex: '[ㅅㅆㅉ]ㅣ[ㅂㅃ]ㅏㄹ',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '씨발 (숫자 우회)',
        regex: '10[할알]?[련년]|십팔련|18[련년놈]',
        ruleType: 'Black',
      },
      {
        name: '개씨발',
        regex: '개시바',
        ruleType: 'Black',
      },
      {
        name: '시발년',
        regex: '시발련|[십씹쓉쉽]련',
        ruleType: 'Black',
      },
      {
        name: '씨부럴',
        regex: '[씨쉬쒸시스ㅅへ人야c][이으ㅣ]*[브부ㅂ][ㄹ럴]',
        ruleType: 'Black',
      },
      {
        name: '머저리',
        regex: '머저리',
        ruleType: 'Black',
      },
      {
        name: '기분 나쁜 X의 반복',
        regex: '[#x]{3,}|야이[#x]{2,}',
        ruleType: 'Black',
      },
      {
        name: '지랄',
        regex: '(지|쥐|ㅈ|ㅈi|ㅈl|zi|g|야)[ㄱ-ㅎㅏ-ㅣ이]*(lal|ral|랄|ㄹ|룰)',
        ruleType: 'Black',
      },
      {
        name: '개새끼',
        regex:
          '(개|dog)[샠색샊섺섹]|rotorl|[개ㄱ][새ㅅ][끼낏꺄까ㄲ]|^개[새색샊]$|새[개객갞걖]끼',
        ruleType: 'Black',
      },
      {
        name: '당신이 2016년을 말하려 한 거라 믿어요',
        regex: '병신년([^에]|$)',
        ruleType: 'Black',
      },
      {
        name: '병신',
        regex:
          '[병ㅂ뼝삉㈅븽빙븅뷍뽕빵뽱퓽뿽][ㄱ-ㅎㅏ-ㅣ]*(쉰|신|싯|진|㈆|ㅅ|へ|人|shin|sin)|ㅄ|qudtls',
        ruleType: 'Black',
      },
      {
        name: '병신 (우회)',
        regex: '벼어*ㅓ*엉신|뷰우*ㅜ*웅신',
        ruleType: 'Black',
      },
      {
        name: '병신 (초성우회)',
        regex: 'ㅂㅕㅇㅅㅣㄴ',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '간나새끼',
        regex: '[개쌍썅종존좆ㅈ]간나',
        ruleType: 'Black',
      },
      {
        name: '거지',
        regex: '거지냐|거지새끼|거지[놈년]',
        ruleType: 'Black',
      },
      {
        name: '창년',
        regex: '창[녀년]',
        ruleType: 'Black',
      },
      {
        name: '~년',
        regex: '(걸레|벌레|[쓰스]레기)년',
        ruleType: 'Black',
      },
      {
        name: '~같은 년',
        regex: '(걸레|개)(같은)?[녀뇬ㄴ년]|..한[년뇬ㄴ]',
        ruleType: 'Black',
      },
      {
        name: '개같은 년',
        regex: '개같은[년]',
        ruleType: 'Black',
      },
      {
        name: '썅',
        regex: '썅',
        ruleType: 'Black',
      },
      {
        name: "니취팔러마('씨발'의 우회 표현)",
        regex: '니취팔',
        ruleType: 'Black',
      },
      {
        name: '당신의 어머니/아버지',
        regex:
          '[ㄴ니]?[애][미비]|느[금ㄱ][ㅁ마빠]?|ㄴㄱㅁ|늑음마|느개[미비]|니[앰앱]이|^느엄$',
        ruleType: 'Black',
      },
      {
        name: '상년',
        regex: '[상샹썅쌍ㅆ][년ㄴ]',
        ruleType: 'Black',
      },
      {
        name: '염병하다',
        regex: '(^|[^전감])[염엠옘얨앰]병',
        ruleType: 'Black',
      },
      {
        name: '뒈지다',
        regex: '^(?!ㄷㄷㄷㅈ).*[뒤디ㄷ][져진ㅈ질졌]|뒈[져지]',
        ruleType: 'Black',
      },
      {
        name: '뒈질?',
        regex: '^ㄷㅈ$',
        ruleType: 'Black',
      },
      {
        name: '질내사정',
        regex: '질내[사싸]정|질싸|^질사$',
        ruleType: 'Black',
      },
      {
        name: '엠창',
        regex: '[엠앰]창',
        ruleType: 'Black',
      },
      {
        name: '미친 놈/년',
        regex: '[미ㅁ][친ㅊ][놈년ㄴ]|[미ㅁ][친ㅊ쳤쳣첫쳐처](놈|년|녀석)',
        ruleType: 'Black',
      },
      {
        name: '산을 표현하는 수화',
        regex:
          '(^ㅗ$|ㅗ{2,})|[\uD83D\uDD95┵凸⟂]|산을표현(하는|한)수화|[네냐라해요]ㅗ$',
        ruleType: 'Black',
      },
      {
        name: '좆까',
        regex: '[좆ㅈ][까ㄲ]|丕刀卜|^[조ㅈ][까ㄲ]$',
        ruleType: 'Black',
      },
      {
        name: 'Shit',
        regex: 'shit|쉣쒯',
        ruleType: 'Black',
      },
      {
        name: '등신',
        regex: '^등신',
        ruleType: 'Black',
      },
      {
        name: '니미',
        regex: '^니미',
        ruleType: 'Black',
      },
      {
        name: '~자식',
        regex: '..자식',
        ruleType: 'Black',
      },
      {
        name: '개자식',
        regex: '개자식',
        ruleType: 'Black',
      },
      {
        name: '호로자식',
        regex: '호로(자식|새끼)|^호로$',
        ruleType: 'Black',
      },
      {
        name: '우라질',
        regex: '우라질',
        ruleType: 'Black',
      },
      {
        name: '찐따',
        regex: '찐따',
        ruleType: 'Black',
      },
      {
        name: '호구',
        regex: '호구[냐잖는가]',
        ruleType: 'Black',
      },
      {
        name: 'Fuck',
        regex: '[뻐퍼]킹|fu[ckx]k|[뻑퍽뻒퍾뿪풖뿩풕][유규]|뻐큐|fuc$',
        ruleType: 'Black',
      },
      {
        name: 'What the Fuck',
        regex: 'wtf|dafuq',
        ruleType: 'Black',
      },
      {
        name: 'Damn',
        regex: 'damn',
        ruleType: 'Black',
      },
      {
        name: 'Abomination',
        regex: 'abomination',
        ruleType: 'Black',
      },
      {
        name: 'All Coppers Are Bastards',
        regex: 'acab|allcoppers?arebastards?',
        ruleType: 'Black',
      },
      {
        name: 'All Coppers Are Bastards',
        regex: 'acab|allcoppers?arebastards?',
        ruleType: 'Black',
      },
      {
        name: 'Bastard',
        regex: 'bastard',
        ruleType: 'Black',
      },
      {
        name: 'Bitch',
        regex: 'bitch',
        ruleType: 'Black',
      },
      {
        name: 'Asshole',
        regex: 'asshole',
        ruleType: 'Black',
      },
      {
        name: '세종대왕님 오늘도 정의로운 검열을 허락해주세요.',
        regex: '[ㄱ-ㅎㅏ-ㅣ]{1,3}ㅄ[ㄱ-ㅎㅏ-ㅣ]{1,3}ㅄ',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '왜 이렇게 복잡하게 말씀하시는 거죠?',
        regex: '([ㄱ-ㅎㅏ-ㅣ]{1,3}[ㄲㄸㅃㅆㅉㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀ]){3,}',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '육시랄',
        regex: '육시[랄럴]',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '나쁜 말 금지',
    description: '거친 말과 욕설의 차이요? 그런 게 있을 리가 없잖아요!',
    elements: [
      {
        name: '새끼',
        regex:
          '[새세섀쉐섺샊샛셋쉣쒯쒰쌔ㅅへ人]ㅐ?(ㄲ|키|끼|ㄱㄱㅣ|ㄲㅣ|77ㅣ|귀)|[쉑쉨샠]|새꺄|색히',
        ruleType: 'Black',
      },
      {
        name: '존나',
        regex: '[ㅈ존][ㄴ나]',
        ruleType: 'Black',
      },
      {
        name: '좆같다',
        regex: '[ㅈ좆奀]같[다네]?',
        ruleType: 'Black',
      },
      {
        name: '개같다',
        regex: '^(?!무지개같).*[개ㄱ]같',
        ruleType: 'Black',
      },
      {
        name: '개소리',
        regex: '개(솔|소리)',
        ruleType: 'Black',
      },
      {
        name: '개돼지',
        regex: '개돼지',
        ruleType: 'Black',
      },
      {
        name: '개차반',
        regex: '개차반',
        ruleType: 'Black',
      },
      {
        name: '꼰대',
        regex: '꼰대',
        ruleType: 'Black',
      },
      {
        name: '꺼져',
        regex: '(^|[^이])[꺼끄ㄲ][ㅈ져질저]|rjwu',
        ruleType: 'Black',
      },
      {
        name: '닥쳐',
        regex: '[닥닭닦ㄷ][쳐ㅊ처치]',
        ruleType: 'Black',
      },
      {
        name: 'What the heck',
        regex: 'whattheheck|wth',
        ruleType: 'Black',
      },
      {
        name: '엿먹어',
        regex: '엿(이나)?(많이|마니)?[쳐처]?(먹|드세요|드시던|머거)',
        ruleType: 'Black',
      },
      {
        name: '의도가 불순한 엿',
        regex: '^엿$',
        ruleType: 'Black',
      },
      {
        name: '느그',
        regex: '느그',
        ruleType: 'Black',
      },
      {
        name: '아무리 귀엽게 말해도 욕은 욕입니다.',
        regex: '뽀큐|뻐뀨|뽀뀨|뽁유|[뽀포퍼빠뻐][뀨큐]|^보큐$',
        ruleType: 'Black',
      },
      {
        name: '나쁜 놈/년',
        regex: '나[쁜뿐][놈년ㄴ]',
        ruleType: 'Black',
      },
      {
        name: '네 다음 XX',
        regex: '네다음.{2,3}|ㄴㄷㅆ|^ㄴㄷ[ㄱ-ㅎ]$',
        ruleType: 'Black',
      },
      {
        name: '멍청한 놈/년',
        regex: '멍[충청]한[놈년]',
        ruleType: 'Black',
      },
      {
        name: '애미',
        regex: '^응?.?[애에][미비]$|^[에애][미비]$|^[엠앰]이',
        ruleType: 'Black',
      },
      {
        name: '멍청하다',
        regex: '멍[충청][이아한]',
        ruleType: 'Black',
      },
      {
        name: '미치다',
        regex: '[미ㅁ][친ㅊ쳐처]',
        ruleType: 'Black',
      },
      {
        name: '말귀를 못 알아듣다',
        regex: '말귀.*못알아',
        ruleType: 'Black',
      },
      {
        name: '좆망',
        regex: '[좆ㅈ]망',
        ruleType: 'Black',
      },
      {
        name: 'Shut up',
        regex: 'shutup|shtup|셔럽|셧업',
        ruleType: 'Black',
      },
      {
        name: '왜 사냐',
        regex: '왜사냐|왜살아|왜살냐',
        ruleType: 'Black',
      },
      {
        name: '그런 걸 왜 하냐',
        regex: '왜하냐|왜해',
        ruleType: 'Black',
      },
      {
        name: '꼴아보다',
        regex: '꼴아[보봐]',
        ruleType: 'Black',
      },
      {
        name: '꼴받다',
        regex: '꼴받[네다게아잖지]',
        ruleType: 'Black',
      },
      {
        name: '망할',
        regex: '망할',
        ruleType: 'Black',
      },
      {
        name: '망해라',
        regex: '망해(버려)?라',
        ruleType: 'Black',
      },
      {
        name: '양아치',
        regex: '양아치',
        ruleType: 'Black',
      },
      {
        name: '제기랄',
        regex: '제기랄|제길',
        ruleType: 'Black',
      },
      {
        name: '눈 없냐',
        regex: '눈없냐|눈없어',
        ruleType: 'Black',
      },
      {
        name: '좆밥',
        regex: '[좆좃죶죳ㅈ]밥',
        ruleType: 'Black',
      },
      {
        name: '나대지 마',
        regex: '나[대댄](다|지마|지말)',
        ruleType: 'Black',
      },
      {
        name: '빡대가리',
        regex: '빡대가리',
        ruleType: 'Black',
      },
      {
        name: '바보',
        regex: '바보|ㅂr보',
        ruleType: 'Black',
      },
      {
        name: 'バカ',
        regex: '[바빠][아ㅏ]+카|빠가(야로)?',
        ruleType: 'Black',
      },
      {
        name: '당신은 사랑받기 위해 태어난 사람이에요!',
        regex: '자살할|죽고싶다|죽을까|죽어버릴까|죽을[것거]같',
        ruleType: 'Black',
      },
      {
        name: '자살해라',
        regex: '자살해',
        ruleType: 'Black',
      },
      {
        name: '죽어',
        regex: '(^|[^나])죽어',
        ruleType: 'Black',
      },
      {
        name: '어쩌라고',
        regex: '어쩌라고|어쩔$',
        ruleType: 'Black',
      },
      {
        name: '대갈통',
        regex: '대갈통',
        ruleType: 'Black',
      },
      {
        name: '가로세로연구소',
        regex: '가로세로연구소|가세연',
        ruleType: 'Black',
      },
      {
        name: '거렁뱅이',
        regex: '거렁뱅이',
        ruleType: 'Black',
      },
      {
        name: '젠장',
        regex: '[줸쥔쥉젠]장',
        ruleType: 'Black',
      },
      {
        name: '저능아',
        regex: '저능아',
        ruleType: 'Black',
      },
      {
        name: '무뇌아',
        regex: '무뇌아',
        ruleType: 'Black',
      },
      {
        name: 'ㅅㄱ',
        regex: '^ㅅㄱ$',
        ruleType: 'Black',
      },
      {
        name: '살인',
        regex: '(^|[^화])살인',
        ruleType: 'Black',
      },
      {
        name: '자살',
        regex: '^자살$',
        ruleType: 'Black',
      },
      {
        name: '자해하다',
        regex: '자해[도할했]',
        ruleType: 'Black',
      },
      {
        name: '목매달다',
        regex: '목을?매달',
        ruleType: 'Black',
      },
      {
        name: '돌아이',
        regex: '돌아이|[또도]라이',
        ruleType: 'Black',
      },
      {
        name: '헤로인',
        regex: '헤로인',
        ruleType: 'Black',
      },
      {
        name: '필로폰',
        regex: '필로폰|히로[퐁뽕]',
        ruleType: 'Black',
      },
      {
        name: 'LSD',
        regex: 'lsd[은는이가]|^lsd$',
        ruleType: 'Black',
      },
      {
        name: '펜타닐',
        regex: '[팬펜]타닐',
        ruleType: 'Black',
      },
      {
        name: '덜떨어지다',
        regex: '덜떨어[지진졌]',
        ruleType: 'Black',
      },
      {
        name: '고자',
        regex: '^고자',
        ruleType: 'Black',
      },
      {
        name: '싸가지',
        regex: '싸가지',
        ruleType: 'Black',
      },
      {
        name: '거지깽깽이',
        regex: '[거그]지깽+이',
        ruleType: 'Black',
      },
      {
        name: '객사하다',
        regex: '객사해',
        ruleType: 'Black',
      },
      {
        name: '벙어리',
        regex: '벙어리',
        ruleType: 'Black',
      },
      {
        name: '떨거지',
        regex: '떨거지',
        ruleType: 'Black',
      },
      {
        name: '똘마니',
        regex: '똘마니',
        ruleType: 'Black',
      },
      {
        name: '똘추',
        regex: '똘추',
        ruleType: 'Black',
      },
      {
        name: '망나니',
        regex: '망나니',
        ruleType: 'Black',
      },
      {
        name: '잡놈',
        regex: '잡놈',
        ruleType: 'Black',
      },
      {
        name: '쓰레기',
        regex: '허접[쓰스][레래]기',
        ruleType: 'Black',
      },
      {
        name: '버러지',
        regex: '버러지|벌어지',
        ruleType: 'Black',
      },
      {
        name: 'A hell of a ~',
        regex: 'ahellofa',
        ruleType: 'Black',
      },
      {
        name: 'Idiot',
        regex: 'idiot',
        ruleType: 'Black',
      },
      {
        name: '매춘부',
        regex: '매춘부?',
        ruleType: 'Black',
      },
      {
        name: '이러면 모를 줄 알았나요?',
        regex: 'લસશ|નુલુંગ',
        ruleType: 'Black',
      },
      {
        name: '깡패',
        regex: '깡패',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '야한 말 금지',
    description: '야한 건 안 된다고 생각해요! 선생님!',
    elements: [
      {
        name: '좆',
        regex: '[좆奀]|[^a-zA-Z]jot[^a-zA-Z]',
        ruleType: 'Black',
      },
      {
        name: '씹',
        regex: '[씹쓉]([^으어다]|$)|^[씹쓉]$',
        ruleType: 'Black',
      },
      {
        name: 'Suck',
        regex: 'suck',
        ruleType: 'Black',
      },
      {
        name: '암캐 / 수캐',
        regex: '[암수]캐',
        ruleType: 'Black',
      },
      {
        name: '발정하다',
        regex: '발정[난했하]',
        ruleType: 'Black',
      },
      {
        name: '고자',
        regex: '곶아',
        ruleType: 'Black',
      },
      {
        name: '잠지',
        regex: '[잠짬][지찌]',
        ruleType: 'Black',
      },
      {
        name: '자지',
        regex: '(^|[^용혼남여])[쥬ㅈ자][지ㅈ]([^마말]|$)|말자지',
        ruleType: 'Black',
      },
      {
        name: '보지',
        regex: '(^|[^나바])[ㅂ뷰보][ㅈ지]([^마말않]|$)|봊',
        ruleType: 'Black',
      },
      {
        name: 'E-Hentai',
        regex: 'ehentai|[익이]헨',
        ruleType: 'Black',
      },
      {
        name: '임신 최적화 몸매',
        regex: '임식최적화|임최몸',
        ruleType: 'Black',
      },
      {
        name: 'Hitomi.la',
        regex: 'hitomi|[히꺼][토또]미',
        ruleType: 'Black',
      },
      {
        name: 'hiyobi.me',
        regex: 'hiyobi|히요비',
        ruleType: 'Black',
      },
      {
        name: 'Pornhub',
        regex: 'pornhub|포르노허브|폰허브|폰헙',
        ruleType: 'Black',
      },
      {
        name: '섹스',
        regex:
          '^(?!검색스).*[ㅅ人へ색쉑섹섺샊셲쒝쒞섁쎅쎾쎽쌕섻셐샠솈섘짹쨱쨲][스수ㅅへ人쓰쯔쑤쓔]|[섻쉓]|sex|^야[스쓰]$',
        ruleType: 'Black',
      },
      {
        name: '섹스 (회피)',
        regex: '섹s',
        ruleType: 'Black',
      },
      {
        name: '많은 의미를 담고 있는 한 글자',
        regex: '^섹$',
        ruleType: 'Black',
      },
      {
        name: '자위행위',
        regex: '자위|딸딸이|딸{2,}|딸치기',
        ruleType: 'Black',
      },
      {
        name: '발기하다',
        regex: '^발기$|발기[하했할한]',
        ruleType: 'Black',
      },
      {
        name: '불알',
        regex: '불알|부랄',
        ruleType: 'Black',
      },
      {
        name: '오목할 요',
        regex: '凹',
        ruleType: 'Black',
      },
      {
        name: '볼록할 철',
        regex: '凸',
        ruleType: 'Black',
      },
      {
        name: '붕탁',
        regex: '[붕븅][탁딱]',
        ruleType: 'Black',
      },
      {
        name: '음탕한 손짓',
        regex: '\uD83D\uDC49\uD83D\uDC4C|\uD83D\uDC4C\uD83D\uDC49',
        ruleType: 'Black',
      },
      {
        name: '스섹',
        regex: '[쑤쓔쓰스][색쉑섹섺샊셲쒝쒞섁쎅쎾쎽쌕]',
        ruleType: 'Black',
      },
      {
        name: '가슴',
        regex: '가슴|슴가',
        ruleType: 'Black',
      },
      {
        name: '바이브레이터',
        regex: '바이브레이터',
        ruleType: 'Black',
      },
      {
        name: '넣어줘',
        regex: '넣어줘',
        ruleType: 'Black',
      },
      {
        name: '박다',
        regex: '박아[줘줄주]|박을[게까수래]',
        ruleType: 'Black',
      },
      {
        name: '떡치다',
        regex: '떡[치칠][다래자]|떡치기',
        ruleType: 'Black',
      },
      {
        name: '성교',
        regex: '성교',
        ruleType: 'Black',
      },
      {
        name: '항문',
        regex: '항문',
        ruleType: 'Black',
      },
      {
        name: '정액',
        regex: '정액([^제]|$)',
        ruleType: 'Black',
      },
      {
        name: '귀두',
        regex: '[귀커]두',
        ruleType: 'Black',
      },
      {
        name: '아헤가오',
        regex: '아헤가오',
        ruleType: 'Black',
      },
      {
        name: '당신의 체위 방식은 궁금하지 않습니다',
        regex: '정상위|역상위|기승위|후배위|[쓰스]리[썸섬]|항문성교|스마타',
        ruleType: 'Black',
      },
      {
        name: '쓰리썸',
        regex: '[스쓰]리[섬썸]',
        ruleType: 'Black',
      },
      {
        name: '커닐링구스',
        regex: '커닐링구스',
        ruleType: 'Black',
      },
      {
        name: '딸내미 시리즈',
        regex: '[대금벽]딸',
        ruleType: 'Black',
      },
      {
        name: '복상사',
        regex: '복상사',
        ruleType: 'Black',
      },
      {
        name: '암컷타락',
        regex: '암컷타락|암타',
        ruleType: 'Black',
      },
      {
        name: '꼴리다',
        regex: '꼴[리려린][요다네]',
        ruleType: 'Black',
      },
      {
        name: '펠라치오',
        regex: '펠라',
        ruleType: 'Black',
      },
      {
        name: 'Sex (이모지 회피)',
        regex: '\uD83C\uDDF8\uD83C\uDDEA\uD83C\uDDFD',
        ruleType: 'Black',
      },
      {
        name: '3단 합체',
        regex: '[3-9]단합체',
        ruleType: 'Black',
      },
      {
        name: '육변기',
        regex: '육변기',
        ruleType: 'Black',
      },
      {
        name: '성노예',
        regex: '[성육]노예',
        ruleType: 'Black',
      },
      {
        name: 'NTR',
        regex: 'ntr[하할은는이가]|^ntr$',
        ruleType: 'Black',
      },
      {
        name: '딜도',
        regex: '딜도',
        ruleType: 'Black',
      },
      {
        name: '가위치기',
        regex: '가위치기',
        ruleType: 'Black',
      },
      {
        name: '벗어',
        regex: '벗어',
        ruleType: 'Black',
      },
      {
        name: '이상한 의미를 가져버린 슬픈 숫자',
        regex: '^69$|^74$',
        ruleType: 'Black',
      },
      {
        name: '페니스',
        regex: '[페패]니스|penis',
        ruleType: 'Black',
      },
      {
        name: '러브젤',
        regex: '러브젤',
        ruleType: 'Black',
      },
      {
        name: '리얼돌',
        regex: '리얼돌',
        ruleType: 'Black',
      },
      {
        name: '강간하다',
        regex: '강간($|[해하할이은])',
        ruleType: 'Black',
      },
      {
        name: '따먹다',
        regex: '따먹어[버줄]',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '차별 및 혐오 금지',
    description: '위 아 더 월드!',
    elements: [
      {
        name: '쪽바리',
        regex: '쪽바리',
        ruleType: 'Black',
      },
      {
        name: '짱깨',
        regex: '짱깨',
        ruleType: 'Black',
      },
      {
        name: '착짱죽짱',
        regex: '착짱죽짱',
        ruleType: 'Black',
      },
      {
        name: 'Nigger',
        regex: 'nigga|nigger',
        ruleType: 'Black',
      },
      {
        name: '깜둥이',
        regex: '[깜껌]둥이',
        ruleType: 'Black',
      },
      {
        name: 'Ching Chang Chong',
        regex: 'chingchangchong|칭챙총',
        ruleType: 'Black',
      },
      {
        name: '김치녀',
        regex: '김치녀',
        ruleType: 'Black',
      },
      {
        name: '된장녀',
        regex: '된장녀',
        ruleType: 'Black',
      },
      {
        name: '보슬아치',
        regex: '보슬아치',
        ruleType: 'Black',
      },
      {
        name: '개초딩',
        regex: '개초딩',
        ruleType: 'Black',
      },
      {
        name: '틀니딱딱충',
        regex: '틀니?딱+',
        ruleType: 'Black',
      },
      {
        name: '똥꼬충',
        regex: '똥꼬충',
        ruleType: 'Black',
      },
      {
        name: '잡종',
        regex: '잡종',
        ruleType: 'Black',
      },
      {
        name: '호모',
        regex: '호모',
        ruleType: 'Black',
      },
      {
        name: '혐오의 의미가 담겨버린 슬픈 손모양',
        regex: '\uD83E\uDD0F',
        ruleType: 'Black',
      },
      {
        name: '전라도 비하발언',
        regex: 'ㅈ라[남북]?도|멍청[남북]?도|전라디언',
        ruleType: 'Black',
      },
      {
        name: '경상도 비하발언',
        regex: '경상디언',
        ruleType: 'Black',
      },
      {
        name: '트위터 짹짹이',
        regex: '트[짹쨱]이',
        ruleType: 'Black',
      },
      {
        name: '냄져',
        regex: '냄[져저]',
        ruleType: 'Black',
      },
      {
        name: '설거지론',
        regex: '퐁퐁단|퐁퐁이형|설거지론|설겆이론|퐁퐁신도시',
        ruleType: 'Black',
      },
      {
        name: '동탄맘',
        regex: '동탄맘',
        ruleType: 'Black',
      },
      {
        name: '맘충',
        regex: '맘충',
        ruleType: 'Black',
      },
      {
        name: '잠재적 가해자',
        regex: '잠재적 가해자',
        ruleType: 'Black',
      },
      {
        name: '파오후',
        regex: '파오후|(쿰척)+',
        ruleType: 'Black',
      },
      {
        name: '쿵쾅이',
        regex: '쿵쾅이',
        ruleType: 'Black',
      },
      {
        name: '군캉스',
        regex: '군캉스',
        ruleType: 'Black',
      },
      {
        name: '갓양남',
        regex: '갓양남',
        ruleType: 'Black',
      },
      {
        name: '군무새',
        regex: '군무새',
        ruleType: 'Black',
      },
      {
        name: '관음증 + 자지',
        regex: '곽[잦좆]',
        ruleType: 'Black',
      },
      {
        name: '군쾅이',
        regex: '군쾅이',
        ruleType: 'Black',
      },
      {
        name: '김여사, 김아재',
        regex: '김여자|김아재',
        ruleType: 'Black',
      },
      {
        name: '꽁치남',
        regex: '꽁치남',
        ruleType: 'Black',
      },
      {
        name: '남자의 적은 남자',
        regex: '냄적냄',
        ruleType: 'Black',
      },
      {
        name: '싸튀충',
        regex: '싸취퉁',
        ruleType: 'Black',
      },
      {
        name: '한남유충',
        regex: '한남유충',
        ruleType: 'Black',
      },
      {
        name: '근근웹',
        regex: '[근ㄹ][근ㄹ]웹',
        ruleType: 'Black',
      },
      {
        name: '틀리앙',
        regex: '틀리앙',
        ruleType: 'Black',
      },
      {
        name: '로리웹',
        regex: '로리웹',
        ruleType: 'Black',
      },
      {
        name: '근첩',
        regex: '[근ㄹ]첩',
        ruleType: 'Black',
      },
      {
        name: '짭새',
        regex: '짭새',
        ruleType: 'Black',
      },
      {
        name: '군바리',
        regex: '군바리',
        ruleType: 'Black',
      },
      {
        name: '디시충',
        regex: '디[시씨]충',
        ruleType: 'Black',
      },
      {
        name: '중근웹',
        regex: '중근웹',
        ruleType: 'Black',
      },
      {
        name: '근카라이브',
        regex: '근카라이브',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '변태 금지',
    description: '변태는 안돼요',
    elements: [
      {
        name: '할짝',
        regex: '[할핥핡햘햝햙][쯔즈][악약]',
        ruleType: 'Black',
      },
      {
        name: '이상한 신음',
        regex: '아흥|하[아으우]*(응읏악앍앙)|(하악)+',
        ruleType: 'Black',
      },
      {
        name: 'ㅗㅜㅑ',
        regex: 'ㅗㅜㅑ',
        ruleType: 'Black',
      },
      {
        name: "퍄 ('ㅗㅜㅑ'의 회피 표현)",
        regex: '퍄',
        ruleType: 'Black',
      },
      {
        name: '어딜 그렇게 급하게 가세요',
        regex: '가버[렷려렸]',
        ruleType: 'Black',
      },
      {
        name: '할짝',
        regex: '[할핥핡햘햝햙ㅎ][ㅉ짝쨕작착쟉쨝]([^업품곡]|$)',
        ruleType: 'Black',
      },
      {
        name: '헤으응',
        regex: '[헤해][으ㅡㅔㅖ]*응',
        ruleType: 'Black',
      },
      {
        name: '이상한 소리 모음집',
        regex: '뷰릇|푸[슈슛]|뷰[루르]*[릇룻]',
        ruleType: 'Black',
      },
      {
        name: '엉덩이',
        regex: '[엉응][덩딩]이|응디',
        ruleType: 'Black',
      },
      {
        name: '헨타이',
        regex: '헨타이|hentai',
        ruleType: 'Black',
      },
      {
        name: '의미심장한 이모지',
        regex: '\uD83D\uDD1E',
        ruleType: 'Black',
      },
      {
        name: '맘마통',
        regex: '맘마통|빨통',
        ruleType: 'Black',
      },
      {
        name: '보빨',
        regex: '보빨',
        ruleType: 'Black',
      },
      {
        name: '사이코',
        regex: '[사싸]이코([^노]|$)',
        ruleType: 'Black',
      },
      {
        name: '모쏠아다',
        regex: '모쏠아다',
        ruleType: 'Black',
      },
      {
        name: '아다',
        regex: '^아다$',
        ruleType: 'Black',
      },
      {
        name: '큥큥',
        regex: '큥+',
        ruleType: 'Black',
      },
      {
        name: '순수하지 못한 하트',
        regex: '❤\uD83D\uDC95',
        ruleType: 'Black',
      },
      {
        name: '무슨 냄새를 맡으시는 거죠',
        regex: '(킁카?)+',
        ruleType: 'Black',
      },
      {
        name: '촉수',
        regex: '촉수',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '정치 발언 금지',
    description: '정치 발언은 안돼요',
    elements: [
      {
        name: '고노무 (노무현 대통령 비하발언)',
        regex: '고노무',
        ruleType: 'Black',
      },
      {
        name: '노무 (노무현 대통령 비하발언)',
        regex: '노무([^자]|$)',
        ruleType: 'Black',
      },
      {
        name: 'MC무현 (노무현 대통령 비하발언)',
        regex: 'mc무현',
        ruleType: 'Black',
      },
      {
        name: '딱 좋다',
        regex: '(따악|딱딱+)좋다|^딱좋[다노]$',
        ruleType: 'Black',
      },
      {
        name: '부엉이바위',
        regex: '부엉이바위',
        ruleType: 'Black',
      },
      {
        name: '운지',
        regex: '(^|[^여싸치라배])운지([^법]|$)',
        ruleType: 'Black',
      },
      {
        name: '야 기분 좋다',
        regex: '야기분좋[다노]',
        ruleType: 'Black',
      },
      {
        name: '이기야',
        regex: '이기야$|^이기$',
        ruleType: 'Black',
      },
      {
        name: '재기하다',
        regex: '성?재기',
        ruleType: 'Black',
      },
      {
        name: '일간베스트',
        regex:
          '일베[충]?|일간[베배]스트|ㅇㅂㅊ|^ㅇㅂ[ㅅㄲㅊㄱ]+$|^일배$|^ㅇㅂ$',
        ruleType: 'Black',
      },
      {
        name: '메갈리아',
        regex: '메갈리아|메갈([^로]|$)',
        ruleType: 'Black',
      },
      {
        name: '최순실',
        regex: '최순실|순시리',
        ruleType: 'Black',
      },
      {
        name: '한남충',
        regex: '한남충|^한남$',
        ruleType: 'Black',
      },
      {
        name: '노짱',
        regex: '노[쨩짱쟝]',
        ruleType: 'Black',
      },
      {
        name: '이승만',
        regex: '[이런]승만|승만이',
        ruleType: 'Black',
      },
      {
        name: '윤보선',
        regex: '윤보선',
        ruleType: 'Black',
      },
      {
        name: '박정희',
        regex: '박정희',
        ruleType: 'Black',
      },
      {
        name: '최규하',
        regex: '최규하',
        ruleType: 'Black',
      },
      {
        name: '전두환',
        regex: '전두환|전[땅탱땡떙]크',
        ruleType: 'Black',
      },
      {
        name: '노태우',
        regex: '노태우',
        ruleType: 'Black',
      },
      {
        name: '김영삼',
        regex: '김[영0][삼3]',
        ruleType: 'Black',
      },
      {
        name: '김대중',
        regex: '김대중',
        ruleType: 'Black',
      },
      {
        name: '중력일',
        regex: '중력[절일]',
        ruleType: 'Black',
      },
      {
        name: '노무현',
        regex: '노?무현|노코리타',
        ruleType: 'Black',
      },
      {
        name: '이명박',
        regex: '이?명박|^mb[은는이가]|^가카$',
        ruleType: 'Black',
      },
      {
        name: '박근혜',
        regex: '박?[근ㄹ]혜|[박닭]그네',
        ruleType: 'Black',
      },
      {
        name: '문재인',
        regex:
          '[문곰x그][졔쟤제재죄][인앙]([^거가데]|$)|mc재[앙인]|문크예거|문코리타|문켓몬(스터)?|문노스|문두환|문대중|문통[은는이가]|moonjaein',
        ruleType: 'Black',
      },
      {
        name: '조 바이든',
        regex: '조?바이든',
        ruleType: 'Black',
      },
      {
        name: '윤석열',
        regex:
          '윤석[열렬]|윤항문|윤[짜춘][장왕]|간석열|윤재명|윤틀러|윤두환|폰석열|준석열|윤도리',
        ruleType: 'Black',
      },
      {
        name: '이준석',
        regex: '[이리]준석',
        ruleType: 'Black',
      },
      {
        name: '이재명',
        regex: '[찢찟이리][재제]명|[찢찟]코리타',
        ruleType: 'Black',
      },
      {
        name: '홍준표',
        regex: '홍준표|홍카콜라',
        ruleType: 'Black',
      },
      {
        name: '좌파',
        regex: '좌[파빨좀]',
        ruleType: 'Black',
      },
      {
        name: '우파',
        regex: '우파냐',
        ruleType: 'Black',
      },
      {
        name: '극우',
        regex: '극우',
        ruleType: 'Black',
      },
      {
        name: '극좌',
        regex: '극좌',
        ruleType: 'Black',
      },
      {
        name: '탄핵',
        regex: '탄핵',
        ruleType: 'Black',
      },
      {
        name: '히틀러',
        regex: '히틀러|아돌프|adolfhitler',
        ruleType: 'Black',
      },
      {
        name: '욱일기',
        regex: '욱일(승천)?기',
        ruleType: 'Black',
      },
      {
        name: '허경영',
        regex: '허경영',
        ruleType: 'Black',
      },
      {
        name: '심상정',
        regex: '심상정',
        ruleType: 'Black',
      },
      {
        name: '자위대',
        regex: '자위대',
        ruleType: 'Black',
      },
      {
        name: '하켄크로이츠',
        regex: '하켄크로이츠',
        ruleType: 'Black',
      },
      {
        name: '북쪽에 있는 그 사람들',
        regex: '김일성|김정[일은]|김여정',
        ruleType: 'Black',
      },
      {
        name: '신천지',
        regex: '신천지',
        ruleType: 'Black',
      },
      {
        name: '이만희',
        regex: '[이개]만희',
        ruleType: 'Black',
      },
      {
        name: '빨갱이',
        regex: '빨갱이',
        ruleType: 'Black',
      },
      {
        name: '종북',
        regex: '종북',
        ruleType: 'Black',
      },
      {
        name: '시진핑',
        regex: '시?진핑+',
        ruleType: 'Black',
      },
      {
        name: '도널드 트럼프',
        regex: '도[널날]드[트도][럼람][프푸]|럼프형|트황상',
        ruleType: 'Black',
      },
      {
        name: '조지 부시',
        regex: '조지부시',
        ruleType: 'Black',
      },
      {
        name: '반자이',
        regex: '반자이',
        ruleType: 'Black',
      },
      {
        name: '일왕',
        regex: '천황|[덴텐]노',
        ruleType: 'Black',
      },
      {
        name: '더불어민주당',
        regex: '민주당|더불어(공산당|만진당)|더민주',
        ruleType: 'Black',
      },
      {
        name: '노동당',
        regex: '노동당',
        ruleType: 'Black',
      },
      {
        name: '자유한국당',
        regex: '자유한국당|자한당',
        ruleType: 'Black',
      },
      {
        name: '국민의힘',
        regex: '국민의[힘짐]|국[힘짐]',
        ruleType: 'Black',
      },
      {
        name: '정의당',
        regex: '정의당',
        ruleType: 'Black',
      },
      {
        name: '기본소득당',
        regex: '기본소득당',
        ruleType: 'Black',
      },
      {
        name: '시대전환',
        regex: '시대전환',
        ruleType: 'Black',
      },
      {
        name: '새누리당',
        regex: '새누리당',
        ruleType: 'Black',
      },
      {
        name: '나치',
        regex: '나치([은는이가]|$)|네오나치',
        ruleType: 'Black',
      },
      {
        name: '나치즘',
        regex: '나치즘',
        ruleType: 'Black',
      },
      {
        name: '혐오의 의미가 담겨버린 슬픈 손모양',
        regex: '\uD83E\uDD0F',
        ruleType: 'Black',
      },
      {
        name: '토착왜구',
        regex: '토착왜구',
        ruleType: 'Black',
      },
      {
        name: '국가혁명당',
        regex: '국가혁명당',
        ruleType: 'Black',
      },
      {
        name: '여성의당',
        regex: '여성의당',
        ruleType: 'Black',
      },
      {
        name: '조선로동당',
        regex: '조선[노로]동당',
        ruleType: 'Black',
      },
      {
        name: '조선사회민주당',
        regex: '조선사회민주당',
        ruleType: 'Black',
      },
      {
        name: '천도교청우당',
        regex: '천도교청우당',
        ruleType: 'Black',
      },
      {
        name: '재일본조선인총련합회',
        regex: '재일본?조선인총[련연]합회|조선총[령연]',
        ruleType: 'Black',
      },
      {
        name: '적폐청산',
        regex: '적폐청산',
        ruleType: 'Black',
      },
      {
        name: '적폐',
        regex: '적폐들',
        ruleType: 'Black',
      },
      {
        name: '메갈리아',
        regex: '메갈([^로]$)|메갈리아',
        ruleType: 'Black',
      },
      {
        name: '여성시대',
        regex: '여성시대|여시([는가도나]|$)',
        ruleType: 'Black',
      },
      {
        name: '워마드',
        regex: '워[마x][드x]',
        ruleType: 'Black',
      },
      {
        name: '페미니즘',
        regex: '[페패폐]미(니즘)?',
        ruleType: 'Black',
      },
      {
        name: '성차별',
        regex: '성차별',
        ruleType: 'Black',
      },
      {
        name: '성인지감수성',
        regex: '성차별',
        ruleType: 'Black',
      },
      {
        name: '남녀 혐오',
        regex: '[남녀여]성혐오',
        ruleType: 'Black',
      },
      {
        name: 'I purchase a ball',
        regex: '공산당',
        ruleType: 'Black',
      },
      {
        name: '스탈린',
        regex: '스탈린',
        ruleType: 'Black',
      },
      {
        name: '버락 오바마',
        regex: '오바마',
        ruleType: 'Black',
      },
      {
        name: '티베트 독립',
        regex: '프리(티베트|티벳)|(티베트|티벳)독립',
        ruleType: 'Black',
      },
      {
        name: '홍콩 독립',
        regex:
          '프리(향항|홍콩)|(향항|홍콩)(독립|광복)|(광복(홍콩|향항))?시대혁명',
        ruleType: 'Black',
      },
      {
        name: '천안문 6.4 항쟁',
        regex: '[천톈탠텐]안[먼문]|19890?60?4',
        ruleType: 'Black',
      },
      {
        name: '빌 클린턴',
        regex: '빌클린턴',
        ruleType: 'Black',
      },
      {
        name: '힐러리 클린턴',
        regex: '힐러리(클린턴)?',
        ruleType: 'Black',
      },
      {
        name: '미하일 세르게예비치 고르바초프',
        regex: '고르바초프',
        ruleType: 'Black',
      },
      {
        name: '블라디미르 레닌',
        regex: '레닌',
        ruleType: 'Black',
      },
      {
        name: '블라디미르 푸틴',
        regex: '푸틴',
        ruleType: 'Black',
      },
      {
        name: '보리스 옐친',
        regex: '옐친',
        ruleType: 'Black',
      },
      {
        name: '볼로디미르 젤렌스키',
        regex: '젤렌스키',
        ruleType: 'Black',
      },
      {
        name: '마오쩌둥',
        regex: '마오쩌둥',
        ruleType: 'Black',
      },
      {
        name: '아베 신조',
        regex: '아베',
        ruleType: 'Black',
      },
      {
        name: '한한령',
        regex: '한한령',
        ruleType: 'Black',
      },
      {
        name: '중국몽',
        regex: '중국몽',
        ruleType: 'Black',
      },
      {
        name: 'THAAD',
        regex: 'thaad|^사드([은는이가배]|$)',
        ruleType: 'Black',
      },
      {
        name: '파시즘',
        regex: '파시즘|결속주의',
        ruleType: 'Black',
      },
      {
        name: '여성가족부',
        regex: '여성가족부|[여ㅈ]가부',
        ruleType: 'Black',
      },
      {
        name: '세금 낭비',
        regex: '세금(낭비|도둑|루팡)',
        ruleType: 'Black',
      },
      {
        name: '민족 볼셰비즘',
        regex: '민족볼셰비즘|나츠볼',
        ruleType: 'Black',
      },
      {
        name: '이라크 전쟁',
        regex: '이라크전쟁?',
        ruleType: 'Black',
      },
      {
        name: '걸프 전쟁',
        regex: '걸프전쟁?',
        ruleType: 'Black',
      },
      {
        name: '러시아의 우크라이나 침공',
        regex: '우크라이나(습격|전쟁|기습|침공)',
        ruleType: 'Black',
      },
      {
        name: '시리아 내전',
        regex: '시리아내전',
        ruleType: 'Black',
      },
      {
        name: '블랙워싱',
        regex: '블랙워[싱시]|blackwash(ing)?',
        ruleType: 'Black',
      },
      {
        name: '화이트워싱',
        regex: '화이트워[싱시]|whitewash(ing)?',
        ruleType: 'Black',
      },
      {
        name: '옐로워싱',
        regex: '옐로워[싱시]|blackwash(ing)?',
        ruleType: 'Black',
      },
      {
        name: '정치적 올바름',
        regex: '정치적 올바름',
        ruleType: 'Black',
      },
      {
        name: '박원순 (제35-37대 서울특별시장)',
        regex: '박원순',
        ruleType: 'Black',
      },
      {
        name: '보리스 존슨 (영국 제77대 총리)',
        regex: '보리스존슨',
        ruleType: 'Black',
      },
      {
        name: '미러링',
        regex: '미러링',
        ruleType: 'Black',
      },
      {
        name: '탈코르셋',
        regex: '탈코(르셋)?',
        ruleType: 'Black',
      },
      {
        name: '조선민주주의인민공화국',
        regex:
          '북조선|북한|[부쿡]카니스탄|조선민주주의인민공화국|노스코리아|northkorea|democraticpeoplesrepublicofkorea',
        ruleType: 'Black',
      },
      {
        name: '북괴',
        regex: '북괴',
        ruleType: 'Black',
      },
      {
        name: '탈북',
        regex: '탈북([^민]|$)',
        ruleType: 'Black',
      },
      {
        name: '월북',
        regex: '월북',
        ruleType: 'Black',
      },
      {
        name: '김두한 (대한민국 제3·6대 국회의원)',
        regex: '김두한',
        ruleType: 'Black',
      },
      {
        name: '동튀르키스탄 독립운동',
        regex: '위구르독립|프리위구르',
        ruleType: 'Black',
      },
      {
        name: '통일교',
        regex: '통일교',
        ruleType: 'Black',
      },
      {
        name: '대순진리교',
        regex: '대순진리[교회]',
        ruleType: 'Black',
      },
      {
        name: '전국장애인차별철폐연대',
        regex: '전장[연련]|전국장애인차별철폐연대',
        ruleType: 'Black',
      },
      {
        name: '노동조합',
        regex: '노동조합',
        ruleType: 'Black',
      },
      {
        name: '한국노동조합총연맹',
        regex: '한국노동조합총연맹|한국노총',
        ruleType: 'Black',
      },
      {
        name: '전국민주노동조합총연맹',
        regex: '전국민주노동조합총연맹|민주노총',
        ruleType: 'Black',
      },
      {
        name: '청년유니온',
        regex: '청년유니온',
        ruleType: 'Black',
      },
      {
        name: '센카쿠열도',
        regex: '센카쿠열도|첨각열도|댜오위다오|댜오위타이|피너클열도',
        ruleType: 'Black',
      },
      {
        name: '탈레반',
        regex: '탈레반|taliban',
        ruleType: 'Black',
      },
      {
        name: '2014년 러시아의 크림반도 합병',
        regex: '크림반도',
        ruleType: 'Black',
      },
      {
        name: '저기 다리가 터졌는데요?',
        regex: '국민여러분안심하십시오|서울시민여러분안심하고서울을지키십시오',
        ruleType: 'Black',
      },
      {
        name: '이낙연 (대한민국 제45대 국무총리)',
        regex: '이낙연',
        ruleType: 'Black',
      },
      {
        name: '안철수',
        regex: '안[철찰][수스]|안쳤어([는가]|$)',
        ruleType: 'Black',
      },
      {
        name: '배리나 (페미니즘 유튜버)',
        regex: '배리나|baelina',
        ruleType: 'Black',
      },
      {
        name: '윤김지영 (페미니스트)',
        regex: '안[철찰][수스]|안쳤어([는가]|$)',
        ruleType: 'Black',
      },
      {
        name: '미투운동',
        regex: '미투운동',
        ruleType: 'Black',
      },
      {
        name: '혜화역 시위',
        regex: '혜회역시위',
        ruleType: 'Black',
      },
      {
        name: '사담 후사인 압드 알마지드 알티크리티',
        regex: '사담후[세사]인',
        ruleType: 'Black',
      },
      {
        name: '드미트리 아나톨리예비치 메드베데프',
        regex: '메드베데프',
        ruleType: 'Black',
      },
      {
        name: '9.11 테러',
        regex: '911테러',
        ruleType: 'Black',
      },
      {
        name: '그 분',
        regex: '비선실세',
        ruleType: 'Black',
      },
      {
        name: '네?',
        regex: '우주가(나서서)?도와(준다줍니다)',
        ruleType: 'Black',
      },
      {
        name: '네?',
        regex: '대통령직을사퇴합니다',
        ruleType: 'Black',
      },
      {
        name: '네?',
        regex: '바쁜벌꿀은슬퍼할시간도없다',
        ruleType: 'Black',
      },
      {
        name: '네?',
        regex: '이러려고대통령을했나',
        ruleType: 'Black',
      },
      {
        name: '네!',
        regex: '나만불편해',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: 'URL 금지',
    description: '인터넷 사이트 URL을 올리는 것을 금지합니다',
    elements: [
      {
        name: 'HTTP URL',
        regex: 'http://[^ ]+',
        ruleType: 'Black',
      },
      {
        name: 'HTTPS URL',
        regex: 'https://[^ ]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '반말 금지',
    description: '반말을 금지합니다.',
    elements: [
      {
        name: '음슴체',
        regex: 'ㅁ$',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '평서형 해라체',
        regex: 'ㄴ(ㅡㄴ)?(ㄷㅏㄴ)?ㄷㅏ$',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '평서형 해라체',
        regex: '이?란다$|[이었겠]거니$|더라$|으?리라$|으?리로다$|으?렷다$',
        ruleType: 'Black',
      },
      {
        name: '명령형 해라체',
        regex: '[가-힣]어라$|으?라$|도록$',
        ruleType: 'Black',
      },
      {
        name: '의문형 해라체',
        regex: '[냐니누던디남]$|으?[랴련]$|이?람$|자면서$',
        ruleType: 'Black',
      },
      {
        name: '청유형 해라체',
        regex: '자(꾸나)?$|으?렴$|으?려무나$',
        ruleType: 'Black',
      },
      {
        name: '확인형 해라체',
        regex: '이?라니까$',
        ruleType: 'Black',
      },
      {
        name: '평서형 해체',
        regex: '어$|이?야$|지$|이?라지$|거든$|거들랑$|데$|[다자고]고$',
        ruleType: 'Black',
      },
      {
        name: '평서형 해체',
        regex: 'ㄴ(ㅡㄴ)?ㄷㅏㅈㅣ$|(ㅇㅡ)?ㄹ밖에',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '명령형 해체',
        regex: '어$|지$|으?라고$',
        ruleType: 'Black',
      },
      {
        name: '의문형 해체',
        regex: '어$|이?야$|지$|게$|으?려나$|이?라면서$',
        ruleType: 'Black',
      },
      {
        name: '의문형 해체',
        regex:
          '[ㅇㄴ]ㅡㄴ(ㅈㅣ|ㄷㅔ)$|(ㅇㅡ)?ㄹ(ㄲㅏ|ㄹㅐ)$|(ㅇㅡ)?ㄹㄱㅓㄴㅏ$|ㄴㄷㅏㅁㅕㄴㅅㅓ$',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '의문형 해체 불규칙활용',
        regex: '.[해가서둬놔]$',
        ruleType: 'Black',
        separate: true,
      },
      {
        name: '간결체 평서형',
        regex: '하?다$',
        ruleType: 'Black',
      },
      {
        name: '초성체',
        regex: '^[ㄱ-ㅎ]+$',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '냥냥체',
    description: '이 채널에는 고양이만 서식한다냥!',
    elements: [
      {
        name: '냥냥체',
        regex: '냥$|냐[아ㅏ]*앙$',
        ruleType: 'White',
      },
    ],
  },
  {
    name: '멍멍체',
    description: '이 채널에는 댕댕이만 서식한다멍!',
    elements: [
      {
        name: '멍멍체',
        regex: '멍$|머[어ㅓ]*엉$|^[월댕왈]+$',
        ruleType: 'White',
      },
    ],
  },
  {
    name: '멈뭄미체',
    description: '미 채널은 돔그라미를 허묨하지 많습니다!',
    elements: [
      {
        name: '돔그라미',
        regex: 'ㅇ',
        ruleType: 'Black',
        separate: true,
      },
    ],
  },
  {
    name: '엉엉이체',
    description: '이 채널은 네오를 허용하지 않습니다!',
    elements: [
      {
        name: '네오',
        regex: 'ㅁ',
        ruleType: 'Black',
        separate: true,
      },
    ],
  },
  {
    name: '노체 금지',
    description: '경상도 사투리 쓰시는 분들께는 죄송합니다.',
    elements: [
      {
        name: '노체',
        regex: '노$',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '일본어 금지',
    description: '와따시 일본어 못쓰는데스',
    elements: [
      {
        name: '히라가나',
        regex: '[ぁ-ん]',
        ruleType: 'Black',
      },
      {
        name: '가타카나',
        regex: '[ァ-ン]',
        ruleType: 'Black',
      },
      {
        name: '아이누어 확장',
        regex: '[ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ]',
        ruleType: 'Black',
      },
      {
        name: '한자',
        regex: '[\\u4E00-\\u9FFF]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '그리스어 금지',
    description: '디스 이스 낫 스파르타',
    elements: [
      {
        name: '그리스 문자',
        regex: '[\\u0370-\\u03FF]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '한국어 금지',
    description: '세종대왕님 죄송합니다',
    elements: [
      {
        name: '한글 자음',
        regex: '[ㄱ-ㅎ]+',
        ruleType: 'Black',
      },
      {
        name: '한글 모음',
        regex: '[ㅏ-ㅣ]+',
        ruleType: 'Black',
      },
      {
        name: '한글 조합자',
        regex: '[가-힣]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '한국어만 허용',
    description: '한국이 문화 승리에 성공하였습니다!',
    elements: [
      {
        name: '한글',
        regex: '[ㄱ-ㅎㅏ-ㅣ가-힣]+',
        ruleType: 'White',
      },
    ],
  },
  {
    name: '영어 금지',
    description: '저 영어 할 줄 몰라요우',
    elements: [
      {
        name: '알파벳',
        regex: '[a-zA-Z]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '아랍어 금지',
    description: '석유가 부러워서 그런 건 아니예요',
    elements: [
      {
        name: '아랍 문자',
        regex: '[\\u0600-\\u06FF]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '러시아어 금지',
    description: '러시아워',
    elements: [
      {
        name: '키릴 문자',
        regex: '[\\u0400-\\u04FF]+',
        ruleType: 'Black',
      },
    ],
  },
  {
    name: '중국어 금지',
    description: '나는 베이징의 천안문을 사랑해',
    elements: [
      {
        name: '한자 부수',
        regex: '[\\u2E80-\\u2EFF]+',
        ruleType: 'Black',
      },
      {
        name: '창힐수입법',
        regex: '[\\u2F00-\\u2FDF]+',
        ruleType: 'Black',
      },
      {
        name: 'Ideographic Description Characters',
        regex: '[\\u2FF0-\\u2FFF]+',
        ruleType: 'Black',
      },
      {
        name: '한자',
        regex: '[\\u4E00-\\u9FFF]+',
        ruleType: 'Black',
      },
      {
        name: '호환용 확장 한자',
        regex: '[\\u3400-\\u4DBF]+',
        ruleType: 'Black',
      },
    ],
  },
]

// DB.js
    const movie2 = [
    {
        id: 1,
        title: '마루 밑 아리에티',
        poster: 'poster_anime/poster_arrietty.jpg',
        director: '요네바야시 히로마사',
        genre: ['애니메이션', '판타지', '모험'],
        rating: 8.2,
        cast: ['아리에티', '쇼', '호밀리', '포드'],
        synopsis: '인간의 눈을 피해 마루 밑에서 살아가던 10cm 소인 소녀 아리에티가 인간 소년 쇼를 만나며 벌어지는 비밀스럽고 따뜻한 모험 이야기.'
    },
    {
        id: 2,
        title: '체인소 맨 레제편',
        poster: 'poster_anime/poster_chainsawmanreze.jpg',
        director: '나카소노 마코토',
        genre: ['애니메이션', '액션', '다크 판타지'],
        rating: 9.1,
        cast: ['덴지', '레제', '마키마', '파워', '아키'],
        synopsis: '체인소 악마의 힘을 지닌 데빌 헌터 덴지가 카페에서 일하는 비밀스러운 소녀 레제를 만나며 펼쳐지는 피비린내 나는 전투와 로맨스.'
    },
    {
        id: 3,
        title: '하울의 움직이는 성',
        poster: 'poster_anime/poster_howlsmovingcastle.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '로맨스'],
        rating: 9.3,
        cast: ['소피', '하울', '캘시퍼', '마르클'],
        synopsis: '황야의 마녀 저주로 할머니가 된 소녀 소피가 마법사 하울의 움직이는 성에 들어가 살게 되면서 펼쳐지는 신비롭고 아름다운 사랑 이야기.'
    },
    {
        id: 4,
        title: '귀멸의 칼날: 무한성편',
        poster: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
        director: '소토자키 하루오',
        genre: ['애니메이션', '액션', '판타지'],
        rating: 9.5,
        cast: ['카마도 탄지로', '카마도 네즈코', '아가츠마 젠이츠', '하시비라 이노스케', '키부츠지 무잔'],
        synopsis: '귀살대 최고의 대원들과 탄지로 일행이 혈귀들의 본거지인 무한성에 입성해 최종 흑막 키부츠지 무잔과 벌이는 목숨을 건 최후의 결전.'
    },
    {
        id: 5,
        title: '벼랑 위의 포뇨',
        poster: 'poster_anime/poster_ponyo.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '모험', '가족', '판타지'],
        rating: 8.5,
        cast: ['포뇨', '소스케', '후지모토', '그란만마레'],
        synopsis: '호기심 많은 물고기 소녀 포뇨가 호수 마을 소년 소스케를 만나 인간이 되고 싶어 하면서 벌어지는 동화 같은 사랑과 모험.'
    },
    {
        id: 6,
        title: '센과 치히로의 행방불명',
        poster: 'poster_anime/poster_spiritedaway.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '모험'],
        rating: 9.6,
        cast: ['치히로(센)', '하쿠', '유바바', '가오나시'],
        synopsis: '돼지로 변해버린 부모님을 구하기 위해 신들의 온천장에서 일하게 된 치히로가 하쿠의 도움으로 시련을 극복해 나가는 신비로운 이야기.'
    },
    {
        id: 7,
        title: '스즈메의 문단속',
        poster: 'poster_anime/poster_suzume.jpg',
        director: '신카이 마코토',
        genre: ['애니메이션', '판타지', '재난', '모험'],
        rating: 8.8,
        cast: ['이와토 스즈메', '무나카타 소타', '다이진'],
        synopsis: '규슈의 한가로운 마을에 사는 스즈메가 문을 닫는 여행을 하는 청년 소타를 만나 일본 전역을 돌며 재앙을 부르는 문들을 닫아가는 모험.'
    },
    {
        id: 8,
        title: '그대들은 어떻게 살 것인가',
        poster: 'poster_anime/poster_theboyandtheheron.jpg',
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '드라마'],
        rating: 8.1,
        cast: ['마히토', '왜가리', '히미', '키리코'],
        synopsis: '화재로 어머니를 잃은 소년 마히토가 정체불명의 말하는 왜가리를 따라 이세계로 들어서며 삶과 죽음, 상실에 대해 탐구하는 여정.'
    },
    {
        id: 9,
        title: '더 퍼스트 슬램덩크',
        poster: 'poster_anime/poster_thefirstslamdunk.jpg',
        director: '이노우에 타케히코',
        genre: ['애니메이션', '스포츠', '드라마'],
        rating: 9.4,
        cast: ['송태섭', '강백호', '서태웅', '정대만', '채치수'],
        synopsis: '전국제패를 꿈꾸는 북산고 농구부 5인방이 절대강자 산왕공고와의 목숨 건 경기 속에서 자신의 과거와 한계를 뛰어넘는 뜨거운 승부.'
    },
    {
        id: 10,
        title: '너의 이름은.',
        poster: 'poster_anime/poster_yourname.jpg',
        director: '신카이 마코토',
        genre: ['애니메이션', '로맨스', '판타지', '드라마'],
        rating: 9.2,
        cast: ['타치바나 타키', '미야미즈 미츠하'],
        synopsis: '도쿄에 사는 소년 타키와 시골 마을에 사는 소녀 미츠하의 몸이 서로 바뀌는 기적 같은 현상이 일어나며 시공간을 초월해 서로를 찾아나서는 사랑 이야기.'
    }
    ];


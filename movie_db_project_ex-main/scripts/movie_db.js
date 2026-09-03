// 영화 db
// 어벤져스, 스파이더맨, 오디세이, 토이스토리 5, 악마는 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의 언덕
// Movie Database JS File
const moviesDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        director: '앤서니 루소, 조 루소',
        genre: ['액션', 'SF', '모험'],
        rating: 9.5,
        cast: ['로버트 다우니 주니어', '페드로 파스칼', '바네사 커비', '조셉 퀸', '에빈 모스배크랙'],
        synopsis: '닥터 둠의 등장으로 우주적 위기에 직면한 영웅들이 다중우주의 운명을 걸고 다함께 맞서는 대서사시.'
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2026-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        director: '데스틴 대니얼 크레턴',
        genre: ['액션', 'SF', '모험'],
        rating: 9.2,
        cast: ['톰 홀랜드', '젠데이아'],
        synopsis: '새로운 정체성과 위협 속에서 위기를 극복하고 영웅으로서의 책임과 희생을 다루는 피터 파커의 이야기.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-07-17',
        poster: 'poster/poster_theodyssey.jpg',
        director: '우베 브라운',
        genre: ['드라마', '모험', '사극'],
        rating: 8.8,
        cast: ['랄프 파인즈', '줄리엣 비노슈'],
        synopsis: '트로이 전쟁이 끝난 후 집으로 돌아가기 위해 잔혹한 신들과 괴물들이 도사리는 바다를 헤쳐나가는 오디세우스의 험난한 여정.'
    },
    {
        id: 4,
        title: '토이스토리 5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        director: '앤드류 스탠튼',
        genre: ['애니메이션', '모험', '코미디', '가족'],
        rating: 9.0,
        cast: ['톰 행크스', '팀 알렌'],
        synopsis: '스마트기기 및 최첨단 전자기기에 아이들의 관심 빼앗긴 시대, 우디와 버즈 그리고 장난감 친구들이 맞닥뜨린 새로운 도전과 모험.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다 2',
        date: '2026-05-01',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        director: '데이비드 프랭클',
        genre: ['드라마', '코미디'],
        rating: 8.7,
        cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트'],
        synopsis: '쇠퇴해가는 전통 잡지 미디어 시장 속에서 출판사 대표 미란다 프리스트리와 거대 미디어 그룹의 고위 임원이 된 앤디의 새로운 갈등과 재회.'
    },
    {
        id: 6,
        title: '마이클',
        date: '2025-04-18',
        poster: 'poster/poster_michael.jpg',
        director: '안톤 후쿠아',
        genre: ['전기', '음악', '드라마'],
        rating: 9.3,
        cast: ['자파 잭슨', '콜먼 도밍고', '니아 롱'],
        synopsis: '팝의 황제 마이클 잭슨의 삶과 음악, 그리고 무대 뒤 인간적인 번뇌와 예술적 성취를 그린 전대미문의 전기 영화.'
    },
    {
        id: 7,
        title: '슈퍼마리오 브라더스 2',
        date: '2026-04-03',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        director: '아론 호바스, 마이클 제레닉',
        genre: ['애니메이션', '모험', '코미디'],
        rating: 8.9,
        cast: ['크리스 프랫', '찰리 데이', '안야 테일러 조이'],
        synopsis: '버섯 왕국을 넘어 다채로운 신세계로 떠나는 마리오와 루이지 브라더스의 더 스펙터클해진 모험과 새로운 친구들과의 만남.'
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        director: '필 로드, 크리스토퍼 밀러',
        genre: ['SF', '드라마', '모험'],
        rating: 9.6,
        cast: ['라이언 고슬링'],
        synopsis: '인류 멸망의 위기 속에서 기억을 잃은 채 우주선에서 깨어난 과학자 라일랜드 그레이스가 인류를 구하기 위해 홀로 수행하는 외로운 미션.'
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-02-13',
        poster: 'poster/poster_wutheringheights.jpg',
        director: '에메랄드 페넬',
        genre: ['로맨스', '드라마'],
        rating: 8.6,
        cast: ['마고 로비', '제이콥 엘로디'],
        synopsis: '황량한 요크셔 벌판을 배경으로 펼쳐지는 히스클리프와 캐서린의 지독하고 관능적이며 비극적인 사랑과 복수의 이야기.'
    }
];

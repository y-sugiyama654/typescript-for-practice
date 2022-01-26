export {};

// Record<K, T>
 type Prefectures = 'Tokyo' | 'Chiba' | 'Ibaraki'

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
    Ibaraki: { kanji_name: '茨城', confirmed_cases: 19 },
}
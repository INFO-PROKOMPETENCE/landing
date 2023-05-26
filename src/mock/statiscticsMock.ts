interface StatisticsData {
  title: string;
  caption?: string;
  isActive?: boolean;
}

export const STATISTICS_MOCK_DATA_INSTITUTES: StatisticsData[] = [
  {
    title: "Все институты",
  },
  {
    title: "ИРИТ-РТФ",
    isActive: true,
  },
  {
    title: "ХТИ",
  },
  {
    title: "ФТИ",
  },
  {
    title: "ИНМИТ",
  },
];
export const STATISTICS_MOCK_DATA_SUMMARY: StatisticsData[] = [
  {
    title: "1008",
    caption: "студентов",
    isActive: true,
  },
  {
    title: "40",
    caption: "партнеров",
  },
  {
    title: "256",
    caption: "проектов",
  },
  {
    title: "70",
    caption: "кураторов",
  },
  {
    title: "46",
    caption: "стажировок и офферов",
  },
  {
    title: "28",
    caption: "научных статей",
  },
];

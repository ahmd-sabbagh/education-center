import {
  Group,
  Manegment,
  Student,
  Queiz,
  Present,
  Safe,
  Reports,
  Teachers,
  Rooms,
  Settings,
} from "../../assets";
export const data = [
  {
    type: "link",
    name: "الرئيسية",
  },
  {
    icon: <Manegment />,
    name: "الادارة",
  },
  {
    icon: <Student />,
    name: "الطلاب",
  },
  {
    icon: <Group />,
    name: "المجموعات",
  },
  {
    icon: <Queiz />,
    name: "الاختبارات",
    route:"/exam"
  },
  {
    icon: <Present />,
    name: "الحضور و الغياب",
  },
  {
    icon: <Safe />,
    name: "الخزينة",
  },
  {
    icon: <Reports />,
    name: "التقارير",
  },
  {
    icon: <Teachers />,
    name: "المعلمون",
  },
  {
    icon: <Rooms />,
    name: "القاعات",
  },
  {
    type:"link",
    icon: <Settings />,
    name: "الاعدادات",
  },
];

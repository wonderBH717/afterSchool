import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DatePickerJp from '../../components/Forms/DatePicker/DatePickerJp';

import kid from '../../images/user/kid.png';

interface ParentScheduleEntry {
  id: string;
  name: string;
  avatar?: string;
  reason?: string;
  isAbsent?: boolean;
  hadSnack?: boolean;
  isNight?: boolean;
  className?: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart: string;
  actualEnd: string;
  plannedPickup: boolean;
  plannedReturn: boolean;
  actualPickup: boolean;
  actualReturn: boolean;
  notes?: string;
}

interface ParentScheduleData {
  date: string;
  entries: ParentScheduleEntry[];
}

const ScheduleStats: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduleData, setScheduleData] = useState<ParentScheduleEntry[]>([
    {
      id: '1',
      name: '中村 絵衣子',
      avatar: kid,
      className: '年長クラス',
      plannedStart: '16:00',
      plannedEnd: '17:30',
      actualStart: '16:05',
      actualEnd: '17:25',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: true,
      actualReturn: true,
      notes: '元気に過ごしました',
    },
    {
      id: '2',
      name: '佐藤 太郎',
      avatar: kid,
      className: '年中クラス',
      plannedStart: '09:00',
      plannedEnd: '14:00',
      actualStart: '09:10',
      actualEnd: '14:05',
      plannedPickup: false,
      plannedReturn: true,
      actualPickup: false,
      actualReturn: true,
      notes: 'おやつ完食',
    },
    {
      id: '3',
      name: '鈴木 花子',
      avatar: kid,
      className: '年少クラス',
      plannedStart: '08:30',
      plannedEnd: '16:30',
      actualStart: '08:35',
      actualEnd: '',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: true,
      actualReturn: false,
      isAbsent: true,
      notes: '体調不良のため早退',
    },
    {
      id: '4',
      name: '田中 優子',
      avatar: kid,
      className: '年長クラス',
      plannedStart: '09:30',
      plannedEnd: '18:00',
      actualStart: '09:25',
      actualEnd: '18:05',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: true,
      actualReturn: true,
      hadSnack: true,
    },
    {
      id: '5',
      name: '山田 健太',
      avatar: kid,
      className: '年中クラス',
      plannedStart: '08:00',
      plannedEnd: '15:00',
      actualStart: '08:00',
      actualEnd: '15:00',
      plannedPickup: false,
      plannedReturn: false,
      actualPickup: false,
      actualReturn: false,
      hadSnack: true,
    },
    {
      id: '6',
      name: '伊藤 美咲',
      avatar: kid,
      className: '年少クラス',
      plannedStart: '10:00',
      plannedEnd: '16:00',
      actualStart: '',
      actualEnd: '',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: false,
      actualReturn: false,
      isAbsent: true,
      notes: '発熱のため欠席',
    },
    {
      id: '7',
      name: '渡辺 翔太',
      avatar: kid,
      className: '年長クラス',
      plannedStart: '09:00',
      plannedEnd: '17:00',
      actualStart: '09:15',
      actualEnd: '17:00',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: true,
      actualReturn: true,
      hadSnack: true,
    },
    {
      id: '8',
      name: '小林 さくら',
      avatar: kid,
      className: '年中クラス',
      plannedStart: '08:30',
      plannedEnd: '16:30',
      actualStart: '08:40',
      actualEnd: '16:25',
      plannedPickup: false,
      plannedReturn: true,
      actualPickup: false,
      actualReturn: true,
      hadSnack: true,
    },
    {
      id: '9',
      name: '加藤 陽太',
      avatar: kid,
      className: '年少クラス',
      plannedStart: '09:30',
      plannedEnd: '15:30',
      actualStart: '09:35',
      actualEnd: '15:35',
      plannedPickup: true,
      plannedReturn: false,
      actualPickup: true,
      actualReturn: false,
      hadSnack: true,
    },
    {
      id: '10',
      name: '吉田 めぐみ',
      avatar: kid,
      className: '年長クラス',
      plannedStart: '08:00',
      plannedEnd: '18:00',
      actualStart: '08:05',
      actualEnd: '18:00',
      plannedPickup: true,
      plannedReturn: true,
      actualPickup: true,
      actualReturn: true,
      hadSnack: true,
      isNight: true,
    },
  ]);
  const handlePrevDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };
  const handleInputChange = (
    index: number,
    field: keyof ParentScheduleEntry,
    value: string | boolean
  ) => {
    const newScheduleData = [...scheduleData];
    newScheduleData[index] = {
      ...newScheduleData[index],
      [field]: value,
    };
    setScheduleData(newScheduleData);
  };

  const handleTimeChange = (
    index: number,
    field: keyof ParentScheduleEntry,
    value: string
  ) => {
    handleInputChange(index, field, value);
  };
  const handleTodayDate = () => {
    setSelectedDate(new Date());
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="スケジュール統計" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="hover:bg-gray-100 rounded-lg border border-stroke p-2 dark:border-strokedark dark:hover:bg-meta-4"
                onClick={handlePrevDate}
              >
                <svg
                  className="fill-current"
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                >
                  <path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" />
                </svg>
              </button>
              <div className="w-48">
                <DatePickerJp
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </div>
              <button
                className="hover:bg-gray-100 rounded-lg border border-stroke p-2 dark:border-strokedark dark:hover:bg-meta-4"
                onClick={handleNextDate}
              >
                <svg
                  className="fill-current"
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                >
                  <path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" />
                </svg>
              </button>
              <button
                className="hover:bg-gray-100 rounded-lg border border-stroke px-3 py-2 dark:border-strokedark dark:hover:bg-meta-4"
                onClick={handleTodayDate}
              >
                今日
              </button>
            </div>
            <div className="flex items-center gap-2">
              {/** Download button */}
              <button className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 font-medium text-white hover:bg-opacity-90">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.75L13.5 8.25H10.5V1.5H7.5V8.25H4.5L9 12.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.5 15.75H16.5V12.75H15V14.25H3V12.75H1.5V15.75Z"
                    fill="currentColor"
                  />
                </svg>
                ダウンロード
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2">氏名</th>
                <th className="p-2">出欠確認</th>
                <th className="p-2">出欠</th>
                <th className="p-2">予定</th>
                <th className="p-2">打刻</th>
                <th className="p-2">送迎方法</th>
                <th className="p-2">おやつ</th>
                <th className="p-2">タグ</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((entry, index) => (
                <tr key={entry.id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={entry.avatar}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <div>{entry.name}</div>
                        <div className="text-gray-500 text-sm">
                          {entry.className}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <input
                      type="text"
                      value={entry.reason || ''}
                      onChange={(e) =>
                        handleInputChange(index, 'reason', e.target.value)
                      }
                      className="w-full rounded border border-stroke bg-transparent p-2 dark:border-strokedark"
                    />
                  </td>
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={entry.isAbsent}
                      onChange={(e) =>
                        handleInputChange(index, 'isAbsent', e.target.checked)
                      }
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="p-2">
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="time"
                        value={entry.plannedStart}
                        onChange={(e) =>
                          handleTimeChange(
                            index,
                            'plannedStart',
                            e.target.value
                          )
                        }
                        className="h-10 w-20 rounded border border-stroke bg-transparent px-2 dark:border-strokedark"
                      />
                      <span>-</span>
                      <input
                        type="time"
                        value={entry.plannedEnd}
                        onChange={(e) =>
                          handleTimeChange(index, 'plannedEnd', e.target.value)
                        }
                        className="h-10 w-20 rounded border border-stroke bg-transparent px-2 dark:border-strokedark"
                      />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="time"
                        value={entry.actualStart}
                        onChange={(e) =>
                          handleTimeChange(index, 'actualStart', e.target.value)
                        }
                        className="h-10 w-20 rounded border border-stroke bg-transparent px-2 dark:border-strokedark"
                      />
                      <span>-</span>
                      <input
                        type="time"
                        value={entry.actualEnd}
                        onChange={(e) =>
                          handleTimeChange(index, 'actualEnd', e.target.value)
                        }
                        className="h-10 w-20 rounded border border-stroke bg-transparent px-2 dark:border-strokedark"
                      />
                    </div>
                  </td>
                  <td className="p-2">
                    <select className="w-full rounded border border-stroke bg-transparent p-2 dark:border-strokedark">
                      <option value="bus">スクールバス</option>
                      <option value="parent">保護者送迎</option>
                      <option value="walk">徒歩</option>
                    </select>
                  </td>
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={entry.hadSnack}
                      onChange={(e) =>
                        handleInputChange(index, 'hadSnack', e.target.checked)
                      }
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={entry.isNight}
                      onChange={(e) =>
                        handleInputChange(index, 'isNight', e.target.checked)
                      }
                      className="h-4 w-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ScheduleStats;

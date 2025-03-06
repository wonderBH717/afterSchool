import React from 'react';

interface ScheduleTableProps {
  scheduleData: ScheduleEntry[];
  onScheduleChange: (newSchedule: ScheduleEntry[]) => void;
}

interface ScheduleEntry {
  date: string;
  day: string;
  isHoliday: boolean;
  plannedStart: string;
  plannedEnd: string;
  plannedPickup: boolean;
  plannedReturn: boolean;
  actualStart: string;
  actualEnd: string;
  actualPickup: boolean;
  actualReturn: boolean;
  isAbsent: boolean;
  notes?: string;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  scheduleData,
  onScheduleChange,
}) => {
  const handleInputChange = (
    index: number,
    field: keyof ScheduleEntry,
    value: string | boolean
  ) => {
    const newScheduleData = [...scheduleData];
    newScheduleData[index] = {
      ...newScheduleData[index],
      [field]: value,
    };
    onScheduleChange(newScheduleData);
  };
  const handleTimeChange = (
    index: number,
    field: keyof ScheduleEntry,
    value: string
  ) => {
    handleInputChange(index, field, value);
  };
  return (
    <div className="overflow-x-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="min-w-[1000px]">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b border-stroke bg-gray-2 dark:border-strokedark dark:bg-meta-4">
          <div className="col-span-1 flex items-center justify-center p-2.5 text-center">
            <h5 className="text-sm font-medium">日付</h5>
          </div>
          <div className="col-span-1 flex items-center justify-center p-2.5 text-center">
            <h5 className="text-sm font-medium">休</h5>
          </div>
          <div className="col-span-4 grid grid-cols-4 border-l border-r border-stroke dark:border-strokedark">
            <div className="col-span-4 border-b px-4 py-2 text-center">
              <h5 className="text-sm font-medium">予定</h5>
            </div>
            <div className="col-span-2 px-4 py-2 text-center">
              <h5 className="text-sm font-medium">時間</h5>
            </div>
            <div className="col-span-2 grid grid-cols-2 text-center">
              <div className="px-4 py-2">
                <h5 className="text-sm font-medium">往</h5>
              </div>
              <div className="px-4 py-2">
                <h5 className="text-sm font-medium">復</h5>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center p-2.5 text-center">
            <h5 className="text-sm font-medium">欠席</h5>
          </div>
          <div className="col-span-4 grid grid-cols-4 border-l border-r border-stroke dark:border-strokedark">
            <div className="col-span-4 border-b px-4 py-2 text-center">
              <h5 className="text-sm font-medium">実績</h5>
            </div>
            <div className="col-span-2 px-4 py-2 text-center">
              <h5 className="text-sm font-medium">時間</h5>
            </div>
            <div className="col-span-2 grid grid-cols-2 text-center">
              <div className="px-4 py-2">
                <h5 className="text-sm font-medium">往</h5>
              </div>
              <div className="px-4 py-2">
                <h5 className="text-sm font-medium">復</h5>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center p-2.5 text-center">
            <h5 className="text-sm font-medium">備考</h5>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-stroke dark:divide-strokedark">
          {scheduleData.map((entry, index) => (
            <div
              key={index}
              className={`grid grid-cols-12 ${
                entry.day === '土'
                  ? 'bg-blue-50 dark:bg-blue-900/10'
                  : entry.day === '日'
                  ? 'bg-pink-50 dark:bg-pink-900/10'
                  : 'bg-white dark:bg-boxdark'
              }`}
            >
              {/* Date and Holiday columns */}
              <div className="col-span-1 p-2.5 text-center">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm">
                    {entry.date}({entry.day})
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 p-2.5 text-center">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={entry.isHoliday}
                    onChange={(e) =>
                      handleInputChange(index, 'isHoliday', e.target.checked)
                    }
                    className="h-4 w-4"
                  />
                </div>
              </div>

              {/* Planned Schedule */}
              <div className="col-span-4 grid grid-cols-4 border-l border-r border-stroke dark:border-strokedark">
                <div className="col-span-2 flex items-center gap-2 p-2.5">
                  <input
                    type="time"
                    value={entry.plannedStart}
                    onChange={(e) =>
                      handleTimeChange(index, 'plannedStart', e.target.value)
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
                <div className="col-span-2 grid grid-cols-2">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={entry.plannedPickup}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          'plannedPickup',
                          e.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={entry.plannedReturn}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          'plannedReturn',
                          e.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
              {/* Absence column */}
              <div className="col-span-1 grid grid-cols-1 p-2.5 text-center">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={entry.isAbsent}
                    onChange={(e) =>
                      handleInputChange(index, 'isAbsent', e.target.checked)
                    }
                    className="h-4 w-4"
                  />
                </div>
              </div>
              {/* Actual Schedule */}
              <div className="col-span-4 grid grid-cols-4 border-l border-r border-stroke dark:border-strokedark">
                <div className="col-span-2 flex gap-2 p-2.5">
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
                <div className="col-span-2 grid grid-cols-2">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={entry.actualPickup}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          'actualPickup',
                          e.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={entry.actualReturn}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          'actualReturn',
                          e.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
              {/* Notes column */}
              <div className="col-span-1 grid grid-cols-1 dark:border-strokedark">
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    value={entry.notes || ''}
                    onChange={(e) =>
                      handleInputChange(index, 'notes', e.target.value)
                    }
                    className="m-2 w-full rounded border border-stroke bg-transparent p-2.5 dark:border-strokedark"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;
export type { ScheduleEntry };
